import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image';

import thumbStyles from '../styles/post_thumb.module.scss'
import subsection from '../styles/sub_section.module.scss'

const SubSection = () => {
    const data = useStaticQuery(query)
    const articles = data.allMarkdownRemark.edges

    return (
        <div className={subsection.parent_container}>
            {
              articles.map(article => {
                const { id, frontmatter, excerpt, fields } = article.node
                const { title, section, image } = frontmatter
                const { slug } = fields
                const fixed = image.childImageSharp.fixed
                return (
                  <Link className={subsection.child_container} key={id} to={`/post/${slug}`}> 
                        <Img className={thumbStyles.image} fixed={fixed} />
                        
                        <div className={subsection.details}>
                          <div className={subsection.wrapper}>
                          <div>
                            <span>{section}: </span>
                            <span>{title}</span>
                          </div>
                          <p className={thumbStyles.excerpt}>{excerpt}</p>
                          </div>
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
    allMarkdownRemark(filter: {frontmatter: {isSubSection: {eq: true}}}) {
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
                  fixed {
                    ...GatsbyImageSharpFixed
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