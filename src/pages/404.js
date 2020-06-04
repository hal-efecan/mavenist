import React from "react"

import Layout from "../components/layout/layout"
import SEO from 'react-seo-component'

const NotFoundPage = () => {
  
  return (
    <Layout>
      <SEO
      title={`404: Not Found`}
      description={`Page not found`}
      />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage