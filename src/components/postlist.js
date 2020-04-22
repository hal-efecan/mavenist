import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import thumbStyles from '../styles/post_thumb.module.scss'

const PostList = () => {
    const data = useStaticQuery(query)
    const postsArr = data.allMarkdownRemark.edges
    
    return (
      <>
        <div className={thumbStyles.parent_container}>
            {
                postsArr.map(post => {
                    const { frontmatter, id, excerpt, fields } = post.node
                    const { title, image, section } = frontmatter
                    const { slug } = fields
                    console.log(image)
                    const fluid = image.childImageSharp.fluid

                    return (
                      <Link key={id} to={`/post/${slug}`} className={thumbStyles.link}>

                        <div className={thumbStyles.child_container}>
                            <Img className={thumbStyles.image} fluid={fluid} />
                            <div className={thumbStyles.wrapper}>
                              <div>
                                <span className={thumbStyles.section}>{section} - </span>
                                <span className={thumbStyles.title}>{title}</span>
                              </div>
                              <p className={thumbStyles.excerpt}>{excerpt}</p>
                            </div>
                        </div>
                        
                      </Link>
                    )
                })
            }
        </div>
        <hr className={thumbStyles.divider}/>
        </>
    )
}

export default PostList

const query = graphql`
{
  site {
        siteMetadata {
        title
    }
  }
  allMarkdownRemark(filter: {frontmatter: {isHero: {eq: true}}}) {
    edges {
      node {
        id
        fields {
          slug
        }
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
              fluid(
                maxWidth: 700
                ) {
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt(pruneLength: 100)
      }
    }
  }
}
`

// duotone: { highlight: "#ffffff", shadow: "#b89a6a" }
// ...GatsbyImageSharpFluid_tracedSVG
// duotone: { highlight: "#f00e2e", shadow: "#192550" }