import React from 'react'
import Layout from '../components/layout'
import StyleArticles from '../components/style'
// import SEO from "../components/seo"

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
            {/* <SEO title="Style" description="All style related content"/> */}
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
                <StyleArticles />  
            </div>
        </Layout>
    )
}

export default Style