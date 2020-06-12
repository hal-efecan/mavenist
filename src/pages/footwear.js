import React from 'react'
import Layout from '../components/layout/layout'
import FootwearArticles from '../components/footwear'

import SEO from 'react-seo-component'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import { PageContainer } from '../styled/homePage'

const Footwear = ({ data }) => {

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
            description={`Fashion content featuring the best established and new brands`}
            image={`${siteUrl}${image}`}
            pathname={siteUrl}
            siteLanguage={siteLanguage}
            siteLocale={siteLocale}
            twitterUsername={twitter}
            />
            <PageContainer>
                <FootwearArticles />
            </PageContainer>
        </Layout>
    )
}

export default Footwear