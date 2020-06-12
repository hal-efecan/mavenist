import React from 'react'
import Layout from '../components/layout/layout'
import AccessoriesArticles from '../components/accessories'

import SEO from 'react-seo-component'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import { PageContainer } from '../styled/homePage'

const Fashion = ({ data }) => {

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
            description={`The latest articles on fashion accessoires content`}
            image={`${siteUrl}${image}`}
            pathname={siteUrl}
            siteLanguage={siteLanguage}
            siteLocale={siteLocale}
            twitterUsername={twitter}
            />
            <PageContainer>
                <AccessoriesArticles />
            </PageContainer>
        </Layout>
    )
}

export default Fashion