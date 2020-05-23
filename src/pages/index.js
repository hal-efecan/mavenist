import React, { useEffect } from "react"
import PostList from '../components/postlist'
import SubSection from '../components/subSection'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner1 from '../components/banner1'
import Banner2 from '../components/banner2'

import main from '../styles/main.module.scss'

const Index = () => {

  useEffect(() => {
    document.body.style.maxWidth = "1366px"
    document.body.style.margin = "0 auto"
  }, [])

  return (
            <Layout>
              <SEO title="Home" />
              <div className={main.container}>
                <PostList />
                <Banner1 />
                <SubSection />
                {/* <Banner2 /> */}
              </div>
            </Layout>
        )
}

export default Index