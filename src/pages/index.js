import React, { useEffect } from "react"
import PostList from '../components/postlist'
import SubSection from '../components/subSection'
import Layout from "../components/layout"
import Helmet from 'react-helmet'
// import { graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"
import Banner1 from '../components/banner1'

import main from '../styles/main.module.scss'

const Index = () => {

  useEffect(() => {
    document.body.style.maxWidth = "1366px"
    document.body.style.margin = "0 auto"
  }, [])

  // console.log(query)
  // const data = useStaticQuery(query)

  return (
            <Layout>
              <Helmet>
              {/* <!-- Digital window verification 001 --> */}
              </Helmet>
              <SEO title="Home - Fashion, Sneakers, Trends & Latest News" />
              <div className={main.container}>
                <PostList />
                <Banner1 />
                <SubSection />
              </div>
            </Layout>
        )
}

export default Index

export const query = graphql`
query {
  site {
    siteMetadata {
      title
      description
      siteUrl
    }
  }
}
`

// <Helmet>
// <title>{`${props.data.site.siteMetadata.title}`}</title>
// {/* <meta property="og:url"           content={`${props.data.site.siteMetadata.siteUrl}${props.location.pathname}`} />
// <meta property="og:type"          content="Website" />
// <meta property="og:title"         content={`${props.data.markdownRemark.frontmatter.title}`} />
// <meta property="og:description"   content={`${props.data.markdownRemark.excerpt}`} />
// <meta property="og:image"         content={props.data.markdownRemark.frontmatter.image.childImageSharp.fluid} />
// <link rel="canonical"             href={`https://themavenist.com/${props.location.pathname}`} /> */}
// </Helmet>