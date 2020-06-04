import React, { useEffect } from "react"
import PostList from '../components/postlist'
import SubSection from '../components/subSection'
import Layout from "../components/layout/layout"
import Helmet from 'react-helmet'
import Banner1 from '../components/banners/banner1'

import { useSiteMetadata } from '../hooks/useSiteMetadata'
import main from '../styles/main.module.scss'
import SEO from 'react-seo-component'

const Index = ({ data }) => {

  useEffect(() => {
    document.body.style.maxWidth = "1366px"
    document.body.style.margin = "0 auto"
  }, [])

    const {
      description,
      template,
      title,
      image,
      siteUrl,
      siteLanguage,
      siteLocale,
      social: {
          twitter
      }
    } =  useSiteMetadata()

  return (
            <Layout>
              <Helmet>
                <link href="https://ir-uk.amazon-adsystem.com" rel="dns-prefetch" />
                <link href="https://ir-uk.amazon-adsystem.com" rel="preload" />
                <link href="https://ir-uk.amazon-adsystem.com" rel="preconnect" crossorigin/>
              </Helmet>
              <SEO
                title={title}
                titleTemplate={template}
                description={description}
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

              </div>
            </Layout>
        )
}

export default Index