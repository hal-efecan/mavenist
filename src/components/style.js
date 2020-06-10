import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image';
import { formatMonth } from '../utils/utilityFn'

import { SectionTitle, ArticleTitle, ImgContainer,
  Excerpt, ParentContainer, DescriptionContainer,
  ChildContainer } from '../styled/listElements'

const StyleArticles = () => {
    const data = useStaticQuery(query)
    const articles = data.allMdx.edges

    return (
      <ParentContainer>

          {
            articles.map(article => {
              console.log(article)
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

export default StyleArticles

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
  allMdx(filter: {frontmatter: {section: {eq: "Style"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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