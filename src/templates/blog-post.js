import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { DiscussionEmbed } from "disqus-react"

import { useSiteMetadata } from "../hooks/useSiteMetadata"
import SEO from 'react-seo-component'

import Layout from "../components/layout/layout"
import postStyle from '../styles/blog_post.module.scss'

import { Page, Post } from '../components/post'
import { Title, ByLine } from '../styled'

export const query = graphql`
query ($slug: String!) {
  site {
    siteMetadata {
      title
      description
      siteUrl
    }
  }
  mdx(fields: {slug: {eq: $slug}}) {
    id
    excerpt(pruneLength: 160)
    fields {
      slug
    }
    frontmatter {
      title
      date (formatString: " YYYY MMMM Do")
      author
      image {
        publicURL
        childImageSharp {
          id
          fluid ( maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
          }
        }
      }

    body
    }
  }
`

const BlogPostTemplate = (props) => {

  const image =  props.data.mdx.frontmatter.image
  const fluid = image.childImageSharp.fluid 
  const {slug} = props.data.mdx.fields
  // const { author, date } = props.data.markdownRemark.frontmatter
  console.log('props', props)
  // console.log(props.data.markdownRemark.excerpt)

  const disqusShortName = process.env.GATSBY_DISQUS_NAME

  // console.log(props.data.markdownRemark.id, props.data.markdownRemark.title)

  const { siteLanguage, siteLocale, social: { twitter }, siteUrl } = useSiteMetadata()
  const { frontmatter, excerpt, body } = props.data.mdx
  const { pathname } = props.location
  const { title, date, author } = frontmatter
  
  const disqusConfig = {
    shortname: disqusShortName,
    identifier: props.data.mdx.id,
    title: props.data.mdx.title,
    config: { identifier: slug, title },
  }

  // console.log({
  //   title: title,
  //   description: excerpt,
  //   image: `${siteUrl}${image.publicURL}`,
  //   siteLanguage: siteLanguage,
  //   siteLocale: siteLocale,
  //   twitterUsername: twitter,
  //   article: true,
  //   pathname: `${siteUrl}${pathname}`,
  //   author: author,
  //   publishedDate: date,
  //   modifiedDate: new Date(Date.now()).toISOString()
  // })

  return (
    <Layout>

      <SEO
        title={title}
        description={excerpt}
        image={`${siteUrl}${image.publicURL}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitter}
        article={true}
        pathname={`${siteUrl}${pathname}`}
        author={author}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <Page>

        <Title>{props.data.mdx.frontmatter.title}</Title>
        <Img fluid={fluid} style={{ maxWidth: "700px", margin: "0 auto 15px auto" }} />
        <ByLine>{date}</ByLine>

        <Post>
          <MDXRenderer>{body}</MDXRenderer>
        </Post>

        <DiscussionEmbed {...disqusConfig} className={postStyle.disqus} />
      </Page>

    </Layout>
  )
}

export default BlogPostTemplate

