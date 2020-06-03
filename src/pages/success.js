import React from 'react'
import Layout from '../components/layout/layout'
import SEO from 'react-seo-component'

const Success = () => {
    return (
        <Layout>
            <SEO
            title={`Order success`}
            description={`Order success page`}
            />
            <h1>Success your purchase has gone through!</h1>
        </Layout>
    )
}

export default Success
