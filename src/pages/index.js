import React from "react"
import PostList from '../components/postlist'
import Layout from "../components/layout"
import SEO from "../components/seo"
import SubSection from '../components/subSection'

const Index = () => {
  return (
            <Layout>
              <SEO title="Home" />
              <PostList />
            {/* sub section */}
              <SubSection />
            {/* final section */}
            </Layout>
        )
}

export default Index