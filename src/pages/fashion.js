import React from 'react'
import Layout from '../components/layout'
import FashionArticles from '../components/fashion'

import main from '../styles/main.module.scss'

const Fashion = () => {
    return (
        <Layout>
            <div className={main.container}>
                <FashionArticles />
            </div>
        </Layout>
    )
}

export default Fashion
