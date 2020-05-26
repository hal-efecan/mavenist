import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from "../components/seo"

import Layout from "../components/layout"
import postStyle from '../styles/blog_post.module.scss'

export const query = graphql`
query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    id
    excerpt(pruneLength: 160)
    frontmatter {
      title
      date
      author
      image {
        childImageSharp {
          id
          fluid ( maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
          }
        }
      }
    html
    }
  }
`

const BlogPostTemplate = (props) => {
  const image =  props.data.markdownRemark.frontmatter.image
  const fluid = image.childImageSharp.fluid
  // const { author, date } = props.data.markdownRemark.frontmatter
  // console.log('props', props)

  return (

    <Layout>
        <SEO
          title={props.data.markdownRemark.frontmatter.title}
          description={props.data.markdownRemark.frontmatter.description || props.data.markdownRemark.frontmatter.excerpt}
          image={fluid}
          pathname={props.location.pathname}
        />

      <div className={postStyle.wrapper}>
        <div className={postStyle.title_container}>
          <h1 className={postStyle.title}>{props.data.markdownRemark.frontmatter.title}</h1>
        </div>

        <Img fluid={fluid} style={{ maxWidth: "700px", margin: "0 auto 15px auto" }} />
        {/* <p className={postStyle.by_line}>{ author } { date }</p> */}
                
        <div
        className={postStyle.container}
        dangerouslySetInnerHTML={{ __html:props.data.markdownRemark.html }} 
        />
    </div>
    </Layout>
  )
}

export default BlogPostTemplate

