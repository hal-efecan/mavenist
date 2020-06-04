import React from 'react'
import Layout from '../components/layout/layout'
import FashionArticles from '../components/fashion'

import SEO from 'react-seo-component'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import main from '../styles/main.module.scss'

const Fashion = ({ data }) => {

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
            description={`Fashion content featuring the best established and new brands`}
            image={`${siteUrl}${image}`}
            pathname={siteUrl}
            siteLanguage={siteLanguage}
            siteLocale={siteLocale}
            twitterUsername={twitter}
            />
            <div className={main.container}>
                <FashionArticles />
            </div>
        </Layout>
    )
}

export default Fashion
