import React, { useEffect } from "react"
import PostList from '../components/postlist'
import SubSection from '../components/subSection'
import Layout from "../components/layout"
import SEO from "../components/seo"

import main from '../styles/main.module.scss'

const Index = () => {

  useEffect(() => {
    document.body.style.maxWidth = "1366px"
  }, [])

  return (
            <Layout>
              <SEO title="Home" />
              <div className={main.container}>
                <PostList />
                <SubSection />
              </div>
            </Layout>
        )
}

export default Index