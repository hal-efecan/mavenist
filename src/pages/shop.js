import React, { useState } from 'react'
import Layout from '../components/layout/layout'
// import Skus from '../components/skus'
import SEO from 'react-seo-component'

import Sandals from '../components/affiliate/footwear/sandals'
import Sneakers from '../components/affiliate/footwear/sneakers'
import Bags from '../components/affiliate/accessories/bags'

import { Btn, ProductsNav, PageWrapper } from '../styled/shop'

const Shop = () => {

    const [ sandals, setSandals ] = useState(false)
    const [ sneakers, setSneakers ] = useState(true)
    const [ bags, setBags ] = useState(false)

    function displaySneakers() {
      setSneakers(true)
      setSandals(false)
      setBags(false)
    }

    function displaySandals() {
      setSneakers(false)
      setSandals(true)
      setBags(false)
    }

    function displayBags() {
      setSneakers(false)
      setSandals(false)
      setBags(true)
    }

    return (
            <Layout>
            
            <SEO
            title={`Shop`}
            description={`Shop page`}
            />

            <PageWrapper>

            <ProductsNav>
              <Btn onClick={() => displaySandals()}>Sandals</Btn>
              <Btn onClick={() => displaySneakers()}>Sneakers</Btn>
              <Btn onClick={() => displayBags()}>Bags</Btn>
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

            </div>

            </PageWrapper>
            {/* <Skus /> */}
            </Layout>
    )
}

export default Shop