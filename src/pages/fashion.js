import React from 'react'
import Layout from '../components/layout'
import FashionArticles from '../components/fashion'
import SEO from "../components/seo"

import main from '../styles/main.module.scss'

const Fashion = () => {
    return (
        <Layout>
            <SEO title="Fashion" description="All Fashion related content" />
            <div className={main.container}>
                <FashionArticles />
            </div>
        </Layout>
    )
}

export default Fashion
