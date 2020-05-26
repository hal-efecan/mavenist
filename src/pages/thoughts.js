import React from 'react'
import Layout from '../components/layout'
import ThoughtsArticles from '../components/thoughts'
import SEO from "../components/seo"

import main from '../styles/main.module.scss'

const Thoughts = () => {
    return (
        <Layout>
            <SEO title="Thoughts" description="All Thoughts related content"/>
            <div className={main.container}>
                <ThoughtsArticles />
            </div>
        </Layout>
    )
}

export default Thoughts
