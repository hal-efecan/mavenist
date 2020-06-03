import React from 'react'
import Layout from '../components/layout/layout'
import SEO from 'react-seo-component'

const Cancelled = () => {
    return (
        <Layout>
            <SEO
            title={`Order cancelled`}
            description={`Order cancelled page`}
            />
            <h1>Order cancelled!</h1>    
        </Layout>
    )
}

export default Cancelled
