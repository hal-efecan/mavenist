import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image';
import { formatMonth } from '../utils/utilityFn'

import { SectionTitle, ArticleTitle, Excerpt,
  ImgContainer,
  ParentContainer, DescriptionContainer,
  ChildContainer, HR } from '../styled/listElements'

const SubSection = () => {
    const data = useStaticQuery(query)
    const articles = data.allMdx.edges

    return (
          <ParentContainer>
            {
              articles.map(article => {
                const { id, frontmatter, excerpt, fields } = article.node
                const { title, section, image, date } = frontmatter
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
                  <Link 
                  style={{ boxShadow: `none`, boxSizing: `border-box` }}
                  key={id} 
                  to={`/${slug}`}
                  >
                    <ChildContainer>

                        <ImgContainer>
                          <Img fluid={fluid} />
                        </ImgContainer>

                        <DescriptionContainer>
                          <div>
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
                          </div>
                          <Excerpt>{excerpt}</Excerpt>
                        </DescriptionContainer>

                    </ChildContainer>
                  </Link>
                )
              })
            }
            </ParentContainer>
    )
}

export default SubSection

const query = graphql`
{
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
  allMdx(filter: {frontmatter: {isSubSection: {eq: true}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            author
            date
            title
            section
            isHero
            image {
              childImageSharp {
                id
                fluid(maxWidth: 400, quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp
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