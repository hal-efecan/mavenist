import React from 'react'
import Layout from '../components/layout'
import AboutUs from '../components/aboutUs'
import SEO from "../components/seo"

const About = () => {
    return (
        <Layout>
            <SEO title="About" description="About Us"/>
            <AboutUs />
        </Layout>
    )
}

export default About
