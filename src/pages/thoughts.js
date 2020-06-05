import React from 'react'
import Layout from '../components/layout/layout'
import ThoughtsArticles from '../components/thoughts'

import SEO from 'react-seo-component'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import { PageContainer } from '../styled/homePage'

const Thoughts = ({ data }) => {
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
                <ThoughtsArticles />
            </PageContainer>

        </Layout>
    )
}

export default Thoughts
