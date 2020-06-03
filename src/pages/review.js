import React from 'react'
import Layout from '../components/layout/layout'
import SEO from 'react-seo-component'
// import CartReview from '../components/cartReview'

const Review = () => {
    return (
        <Layout>
            <SEO
            title={`Review order page`}
            description={`Review order page`}
            />
            {/* <CartReview /> */}
        </Layout>
    )
}

export default Review