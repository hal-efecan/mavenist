import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image';

import { SectionTitle, ArticleTitle, ImgContainer,
  Excerpt, ParentContainer, DescriptionContainer,
  ChildContainer } from '../styled/listElements'

const FashionArticles = () => {
    const data = useStaticQuery(query)
    const articles = data.allMdx.edges

    return (
      <ParentContainer>

          {
            articles.map(article => {
              console.log(article)
              const { id, frontmatter, excerpt, fields } = article.node
              const { title, section, image } = frontmatter
              const { slug } = fields
              const fluid = image.childImageSharp.fluid

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
                        <SectionTitle>{section}</SectionTitle><br />
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

export default FashionArticles

const query = graphql`
{
  allMdx(filter: {frontmatter: {section: {eq: "Fashion"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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