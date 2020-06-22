import React from 'react'
import Layout from '../components/layout/layout'
// import StyleArticles from '../components/style'

import SEO from 'react-seo-component'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import { PageContainer } from '../styled/homePage'

const Style = ({ data }) => {
    const {
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
                description={`Style advise from experts`}
                image={`${siteUrl}${image}`}
                pathname={siteUrl}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitter}
                />

            <PageContainer>
                {/* <StyleArticles />   */}
            </PageContainer>
            
        </Layout>
    )
}

export default Style