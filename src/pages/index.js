import React, { useEffect } from "react"
import PostList from '../components/postlist'
import SubSection from '../components/subSection'
import Layout from "../components/layout/layout"

import ShopBanner from '../components/banners/shopBanner'

import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { PageContainer } from '../styled/homePage'
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

              <PageContainer>
                <PostList />
                <ShopBanner />

                <h1 style={{ 
                  margin: `30px auto -10px auto`, 
                  padding: `0 0 0 30px`,
                  textDecoration: `underline`,
                  textDecorationColor: `orangered`,
                  fontSize: `3.25rem` 
                  }}>Latest</h1>
                <SubSection />
              </PageContainer>

            </Layout>
        )
}

export default Index