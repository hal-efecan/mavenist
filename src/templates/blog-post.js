import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import blogPostStyle from '../styles/blog_post.module.scss'

export const query = graphql`
 query($slug: String!) {
     markdownRemark(fields: {slug: {eq: $slug }}) {
       frontmatter {
         title
         date
       }
       html
     }
 }`

const BlogPostTemplate = (props) => {

  return (
    <Layout>
        <h1 className={blogPostStyle.title}>{props.data.markdownRemark.frontmatter.title}</h1>
        <div 
        className={blogPostStyle.container}
        dangerouslySetInnerHTML={{ __html:props.data.markdownRemark.html }} 
        />
    </Layout>
  )
}

export default BlogPostTemplate

