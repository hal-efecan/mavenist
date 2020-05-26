import React from 'react'
import Layout from '../components/layout'
import StyleArticles from '../components/style'
import SEO from "../components/seo"

import main from '../styles/main.module.scss'

const Style = () => {
    return (
        <Layout>
            <SEO title="Style" description="All style related content"/>
            <div className={main.container}> 
                <StyleArticles />  
            </div>
        </Layout>
    )
}

export default Style