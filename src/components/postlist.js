import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import { SectionTitle, ArticleTitle, ImgContainer,
  Excerpt, MainChildContainer, DescriptionContainerTop,
  Divider, MainParentContainer } from '../styled'

const PostList = () => {
    const data = useStaticQuery(query)
    const postsArr = data.allMdx.edges
    
    return (
      <>
      <MainParentContainer>
            {
                postsArr.map(post => {
                    const { frontmatter, id, excerpt, fields } = post.node
                    const { title, image, section } = frontmatter
                    const { slug } = fields
                    const fluid = image.childImageSharp.fluid

                    return (
                      <Link key={id} 
                      to={`${slug}`} 
                      style={{ boxShadow: `none`, boxSizing: `border-box` }}
                      >

                        <MainChildContainer>

                          <ImgContainer>
                            <Img fluid={fluid} />
                          </ImgContainer>

                          <DescriptionContainerTop>
                            <>
                              <SectionTitle>{section}</SectionTitle><br/>
                              <ArticleTitle>{title}</ArticleTitle>
                            </>
                            <Excerpt>{excerpt}</Excerpt>
                          </DescriptionContainerTop>

                        </MainChildContainer>
                        
                      </Link>
                    )
                })
            }
        </MainParentContainer>
        <Divider />
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
          path
          tags
          title
          section
          isHero
          image {
            childImageSharp {
              id
              fluid(
                maxWidth: 400
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