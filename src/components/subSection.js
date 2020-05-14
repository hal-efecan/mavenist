import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image';

import subsection from '../styles/sub_section.module.scss'

const SubSection = () => {
    const data = useStaticQuery(query)
    const articles = data.allMarkdownRemark.edges

    return (
        <div className={subsection.parent_container}>
            {
              articles.map(article => {
                console.log(article)
                const { id, frontmatter, excerpt, fields } = article.node
                const { title, section, image, path, date } = frontmatter
                const { slug } = fields
                const fluid = image.childImageSharp.fluid

                return (
                  <Link className={subsection.child_container} key={id} to={`/${path}/${slug}`}> 
                        <div className={subsection.image_container}>
                          <Img fluid={fluid} />
                        </div>

                        <div className={subsection.wrapper}>
                          <div>
                            <span className={subsection.section}>{section}</span><br />
                            <span className={subsection.title}>{title}</span>
                          </div>
                          <p className={subsection.excerpt}>{excerpt}</p>
                          {/* <p className={subsection.date}>{date}</p> */}
                        </div>
                  </Link>
                )
              })
            }
        </div>
    )
}

export default SubSection

const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {isSubSection: {eq: true}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            author
            date
            path
            tags
            title
            section
            isHero
            image {
              childImageSharp {
                id
                fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          }
            fields {
              slug
            }
          excerpt(pruneLength: 250)
        }
      }
  }
}
`