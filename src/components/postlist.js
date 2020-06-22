import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import { formatMonth } from '../utils/utilityFn'

import { SectionTitle, ArticleTitle, ImgContainer,
  Excerpt, ChildContainer, DescriptionContainer,
  ParentContainer } from '../styled/homePage'

const PostList = () => {
    const data = useStaticQuery(query)
    const postsArr = data.allMdx.edges

    return (
      <>
      <ParentContainer>
            {
                postsArr.map(post => {
                    const { frontmatter, id, excerpt, fields } = post.node
                    const { title, image, section, date } = frontmatter
                    const { slug } = fields
                    const fluid = image.childImageSharp.fluid

                    let dates = ``
                    data.allSitePage.edges.map(edge => {
                      const subSlug = edge.node.context.slug
                      const lastMod = edge.node.context.lastmod

                      if(subSlug === slug) {
                          // const day = new Date(lastMod).getDate()
                          // const month = new Date(lastMod).getMonth()
                          const dayCreated = new Date(date).getDate()
                          const monthCreated = new Date(date).getMonth()
                          const finalDate = `${formatMonth(monthCreated)} ${dayCreated}`
                          dates = finalDate
                        }
                    })

                    return (
                      <Link key={id} 
                      to={`/${slug}`} 
                      style={{ boxShadow: `none`, boxSizing: `border-box` }}
                      >
                      
                        <ChildContainer>

                          <ImgContainer>
                            <Img fluid={fluid} />
                          </ImgContainer>

                          <DescriptionContainer>
                            <>
                              <SectionTitle>{section}</SectionTitle>
                              <span 
                              style={{ color: `grey`, 
                              fontSize: `0.65rem`,
                              fontWeight: `bold`,
                              fontFamily: `Helvetica, sans-serif`,
                              letterSpacing:`0.05rem`, 
                              textTransform: `uppercase` 
                              }}> - {dates}</span><br/>
                              <ArticleTitle>{title}</ArticleTitle>
                            </>
                            <Excerpt>{excerpt}</Excerpt>
                          </DescriptionContainer>

                        </ChildContainer>
                        
                      </Link>
                    )
                })
            }
        </ParentContainer>
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
  allMdx(filter: {frontmatter: {isHero: {eq: true}, date: {}}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          author
          date
          title
          section
          isHero
          image {
            childImageSharp {
              id
              fluid(
                maxWidth: 400, quality: 75
                ) {
                  ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        excerpt(pruneLength: 80)
      }
    }
  }
  allSitePage(filter: {context: {slug: {regex: "/(.*?)/"}}}) {
    edges {
      node {
        context {
          lastmod
          slug
        }
      }
    }
  }
}
`

// ...GatsbyImageSharpFluid