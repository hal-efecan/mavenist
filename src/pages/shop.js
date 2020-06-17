import React, { useState } from 'react'
import Layout from '../components/layout/layout'
// import Skus from '../components/skus'
import SEO from 'react-seo-component'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import Sandals from '../components/affiliate/footwear/sandals'
import Sneakers from '../components/affiliate/footwear/sneakers'
import Bags from '../components/affiliate/accessories/bags'
import Jeans from '../components/affiliate/bottoms/jeans'

import { Btn, ProductsNav, PageWrapper } from '../styled/shop'

const Shop = ({ data }) => {

    const {
      template,
      title,
      image,
      siteUrl,
      siteLanguage,
      siteLocale,
      social: {
          twitter
      }
    } =  useSiteMetadata()

    const [ sandals, setSandals ] = useState(false)
    const [ sneakers, setSneakers ] = useState(true)
    const [ bags, setBags ] = useState(false)
    const [ jeans, setJeans ] = useState(false)

    function displaySneakers() {
      setSneakers(true)
      setSandals(false)
      setBags(false)
      setJeans(false)
    }

    function displaySandals() {
      setSneakers(false)
      setSandals(true)
      setBags(false)
      setJeans(false)
    }

    function displayBags() {
      setSneakers(false)
      setSandals(false)
      setBags(true)
      setJeans(false)
    }

    function displayJeans() {
      setSneakers(false)
      setSandals(false)
      setBags(false)
      setJeans(true)
    }

    return (
            <Layout>

            <SEO
            title={title}
            titleTemplate={template}
            description={`Shop our edit of the best fashion and accessories products`}
            image={`${siteUrl}${image}`}
            pathname={siteUrl}
            siteLanguage={siteLanguage}
            siteLocale={siteLocale}
            twitterUsername={twitter}
            />
            
            <PageWrapper>

            <ProductsNav>
              <Btn onClick={() => displaySandals()}>Sandals</Btn>
              <Btn onClick={() => displaySneakers()}>Sneakers</Btn>
              <Btn onClick={() => displayBags()}>Bags</Btn>
              <Btn onClick={() => displayJeans()}>Jeans</Btn>
            </ProductsNav>
            
            <div style={{ 
              display: `flex`,
              alignItems: `center`,
              width: `75%`,
              justifyContent: `space-around`,
              flexWrap: `wrap`,
              margin: `0px auto 0px auto`,
            }}>

              { sandals ? <Sandals /> : null }
              { sneakers ? <Sneakers/> : null }
              { bags ? <Bags /> : null }
              { jeans ? <Jeans /> : null }

            </div>

            </PageWrapper>
            {/* <Skus /> */}
            </Layout>
    )
}

export default Shop