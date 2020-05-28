import React, { useEffect } from "react"
import PostList from '../components/postlist'
import SubSection from '../components/subSection'
import Layout from "../components/layout"
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
// import SEO from "../components/seo"
import Banner1 from '../components/banner1'
import Varification from '../components/varification'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import main from '../styles/main.module.scss'
import SEO from 'react-seo-component'

const Index = ({ data }) => {

  useEffect(() => {
    document.body.style.maxWidth = "1366px"
    document.body.style.margin = "0 auto"
  }, [])

  // export default ({ data }) => {
    const {
      description,
      title,
      image,
      siteUrl,
      siteLanguage,
      siteLocale,
      social: {
          twitter
      }
    } =  useSiteMetadata()
  // }; 

  // const data = useStaticQuery(query)
  // const { description, siteUrl } = data.site.siteMetadata
  // const { publicURL } = data.allFile.edges[0].node

  // console.log(siteUrl, publicURL)
  
  return (
            <Layout>
              {/* <SEO 
              title="The Mavenist - Home"
              excerpt={description}
              // card="thecard"
              // image={`${siteUrl}${publicURL}`}
              /> */}

              <SEO
                title={title}
                // titleTemplate={siteName}
                description={description || 'nothin’'}
                image={`${siteUrl}${image}`}
                pathname={siteUrl}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitter}
                />

              <div className={main.container}>
                <PostList />
                <Banner1 />
                <SubSection />
                <Varification />
              </div>
            </Layout>
        )
}

export default Index

export const query = graphql`
query MyQuery {
  site {
  siteMetadata {
    title
    description
    siteUrl
  }
}
allFile(filter: {relativePath: {eq: "android-chrome-192x192.png"}}) {
  edges {
    node {
      id
      publicURL
    }
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