import React from 'react'
import Layout from '../components/layout/layout'
// import Skus from '../components/skus'
import SEO from 'react-seo-component'

const Shop = () => {
    return (
            <Layout>
            <SEO
            title={`Shop`}
            description={`Shop page`}
            />
                {/* <Skus /> */}
            </Layout>
    )
}

export default Shop

