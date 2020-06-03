import React from 'react'
import Layout from '../components/layout/layout'
import StyleArticles from '../components/style'

import SEO from 'react-seo-component'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import main from '../styles/main.module.scss'

const Style = ({ data }) => {
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

    return (
        <Layout>
            <SEO
                title={title}
                description={description || 'nothin’'}
                image={`${siteUrl}${image}`}
                pathname={siteUrl}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitter}
                />
            <div className={main.container}> 
                <StyleArticles />  
            </div>
        </Layout>
    )
}

export default Style