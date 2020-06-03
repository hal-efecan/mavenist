import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image';

// import { SectionTitle, ArticleTitle, ImgContainer,
// Excerpt, SubSectionParentContainer, DescriptionContainer,
// SubSectionChildContainer } from '../styled'

import { SectionTitle, ArticleTitle, Excerpt,
  ImgContainer,
  ParentContainer, DescriptionContainer,
  ChildContainer } from '../styled/listElements'

const SubSection = () => {
    const data = useStaticQuery(query)
    const articles = data.allMdx.edges

    return (

          <ParentContainer>
            {
              articles.map(article => {
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

export default SubSection

const query = graphql`
{
  allMdx(filter: {frontmatter: {isSubSection: {eq: true}}}, sort: {fields: frontmatter___date, order: DESC}) {
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
                fluid(maxWidth: 400) {
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