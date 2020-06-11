import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { DiscussionEmbed } from "disqus-react"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

import SEO from 'react-seo-component'
import Helmet from 'react-helmet'
import Layout from "../components/layout/layout"
import postStyle from '../styles/blog_post.module.scss'

import { Page, Post } from '../components/post'
import { Title, ByLine, BlogTitle } from '../styled'

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
    firstQ: frontmatter {
      title
      date(formatString: " YYYY MMMM Do")
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
    secondQ: frontmatter {
      date
    }
    body
  }
      sitePage(context: {slug: {eq: $slug}}) {
        context {
          slug
          lastmod
        }
      }
}
`

const BlogPostTemplate = (props) => {

  const image =  props.data.mdx.firstQ.image
  const fluid = image.childImageSharp.fluid 
  const { slug } = props.data.mdx.fields

  const isoDate = props.data.mdx.secondQ.date
  const lastmod = props.data.sitePage.context.lastmod

  const disqusShortName = process.env.GATSBY_DISQUS_NAME

  const { /*title: publisher,*/ siteLanguage, template, image: logo, siteLocale, social: { twitter }, siteUrl } = useSiteMetadata()
  const { firstQ, excerpt, body } = props.data.mdx
  const { pathname } = props.location
  const { title, date, author } = firstQ

  const disqusConfig = {
    shortname: disqusShortName,
    url: `${props.data.site.siteMetadata.siteUrl}${props.location.pathname}`,
    identifier: props.data.mdx.id,
    title: props.data.mdx.firstQ.title,
    config: { identifier: slug, title },
  }
  
console.log(disqusShortName, props.data.mdx.id, props.data.mdx.firstQ.title)
console.log(props)
console.log(props.data.mdx.id)
console.log(disqusConfig)
  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {
            JSON.stringify({
              "@context": "http://schema.org",
              "@type" : "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${siteUrl}/${slug}`
              },
              "name" : `${title}`,
              "datePublished" : `${isoDate}`,
              "image" : `${siteUrl}${image.publicURL}`,
              "articleBody": `${body}`,
              "author": `${author}`,
              "publisher": {
                "@type": "Organization",
                "name": `The Mavenist`,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${siteUrl}${logo}`
                }
              },
              "headline": `${title}`,
              "dateModified": `${lastmod}`
            })
          }
        </script>
        {/* <script type="text/javascript" async defer src="//assets.pinterest.com/js/pinit.js"></script> */}
      </Helmet>
      <SEO
        title={title}
        titleTemplate={template}
        description={excerpt}
        image={`${siteUrl}${image.publicURL}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitter}
        article={true}
        pathname={`${siteUrl}${pathname}`}
        author={author}
        publishedDate={date}
      />
      <Page>

        <BlogTitle>{props.data.mdx.firstQ.title}</BlogTitle>
        <Img fluid={fluid} style={{ maxWidth: "700px", margin: "0 auto 15px auto" }} />
        <ByLine>{date}</ByLine>

        <Post>
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </Post>
        
        <DiscussionEmbed {...disqusConfig} className={postStyle.disqus} />
      </Page>

    </Layout>
  )
}

export default BlogPostTemplate

