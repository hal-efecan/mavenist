import React from 'react'
import Layout from '../components/layout'
import ThoughtsArticles from '../components/thoughts'

import main from '../styles/main.module.scss'

const Thoughts = () => {
    return (
        <Layout>
            <div className={main.container}>
                <ThoughtsArticles />
            </div>
        </Layout>
    )
}

export default Thoughts
