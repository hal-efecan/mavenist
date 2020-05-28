import React from 'react'
import Layout from '../components/layout'
import ThoughtsArticles from '../components/thoughts'
// import SEO from "../components/seo"

import SEO from 'react-seo-component'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import main from '../styles/main.module.scss'

const Thoughts = ({ data }) => {
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
            {/* <SEO title="Thoughts" description="All Thoughts related content"/> */}
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
                <ThoughtsArticles />
            </div>
        </Layout>
    )
}

export default Thoughts
