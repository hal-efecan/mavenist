import React from 'react'
import Layout from '../components/layout'
import StyleArticles from '../components/style'

import main from '../styles/main.module.scss'

const Style = () => {
    return (
        <Layout>
            <div className={main.container}> 
                <StyleArticles />  
            </div>
        </Layout>
    )
}

export default Style