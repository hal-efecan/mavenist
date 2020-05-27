import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// import SEO from "../components/seo"
import Helmet from 'react-helmet'
import { DiscussionEmbed } from "disqus-react"

import Layout from "../components/layout"
import postStyle from '../styles/blog_post.module.scss'

export const query = graphql`
query ($slug: String!) {
  site {
    siteMetadata {
      title
      description
      siteUrl
    }
  }
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
  console.log('props', props)
  // console.log(props.data.markdownRemark.excerpt)

  const disqusShortName = process.env.GATSBY_DISQUS_NAME

  console.log(props.data.markdownRemark.id, props.data.markdownRemark.title)

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    identifier: props.data.markdownRemark.id,
    title: props.data.markdownRemark.title
    // config: { identifier: slug, title },
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${props.data.markdownRemark.frontmatter.title}| ${props.data.site.siteMetadata.title}`}</title>
        <meta property="og:url"           content={`${props.data.site.siteMetadata.siteUrl}${props.location.pathname}`} />
        <meta property="og:type"          content="Website" />
        <meta property="og:title"         content={`${props.data.markdownRemark.frontmatter.title}`} />
        <meta property="og:description"   content={`${props.data.markdownRemark.excerpt}`} />
        <meta property="og:image"         content={props.data.markdownRemark.frontmatter.image.childImageSharp.fluid} />
        <link rel="canonical"             href={`https://themavenist.com/${props.location.pathname}`} />
      </Helmet>

        {/* <SEO
          title={props.data.markdownRemark.frontmatter.title}
          description={props.data.markdownRemark.excerpt || props.data.markdownRemark.excerpt}
          image={fluid}
          excerpt={props.data.markdownRemark.excerpt}
          pathname={props.location.pathname}
        /> */}

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

        {/* <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${props.data.site.siteMetadata.siteUrl}${props.location.pathname}`} 
        target="_blank"
        onClick="window.open(this.href, 'mywin','left=0,top=0,width=500,height=250,toolbar=1,resizable=0'); return false;"
        rel="noopener noreferrer"
        >
        FB</a>
        <a 
        href={`https://www.twitter.com/share?url=${props.data.site.siteMetadata.siteUrl}${props.location.pathname}&text${props.data.markdownRemark.frontmatter.title}`} 
        target="_blank" 
        onClick="window.open(this.href, 'mywin','left=0,top=0,width=500,height=250,toolbar=1,resizable=0'); return false;"
        rel="noopener noreferrer"
        >
        TW</a> */}
        {/* <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} /> */}
        <DiscussionEmbed {...disqusConfig} style={{ width: "80%", margin: "75px auto 0 auto" }} />
    </div>
    </Layout>
  )
}

export default BlogPostTemplate

