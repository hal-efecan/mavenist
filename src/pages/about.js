import React from 'react'
import Layout from '../components/layout/layout'
import AboutUs from '../components/aboutUs'

import SEO from 'react-seo-component'

const About = () => {
    return (
        <Layout>
            <SEO
            title={`About us`}
            description={`About us page`}
            />
            <AboutUs />
        </Layout>
    )
}

export default About
