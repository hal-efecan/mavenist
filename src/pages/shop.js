import React, { useState, useContext } from 'react'
import Layout from '../components/layout/layout'
// import Skus from '../components/skus'
import SEO from 'react-seo-component'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import Sandals from '../components/affiliate/footwear/sandals'
import Sneakers from '../components/affiliate/footwear/sneakers'
import Bags from '../components/affiliate/accessories/bags'
import Jeans from '../components/affiliate/bottoms/jeans'
import Sunglasses from '../components/affiliate/accessories/sunglasses'

import { Btn, ProductsNav, PageWrapper } from '../styled/shop'

import { ShopContext } from '../context/shopContext'

const Shop = ({ data }) => {

  const shop_context = useContext(ShopContext)
  
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
            
            <div style={{ 
              display: `flex`,
              alignItems: `center`,
              width: `75%`,
              justifyContent: `space-around`,
              flexWrap: `wrap`,
              margin: `0px auto 0px auto`,
            }}>

              { shop_context.sandals ? <Sandals /> : null }
              { shop_context.sneakers ? <Sneakers/> : null }
              { shop_context.bags ? <Bags /> : null }
              { shop_context.jeans ? <Jeans /> : null }
              { shop_context.sunglasses ? <Sunglasses /> : null }
            </div>

            </PageWrapper>
            {/* <Skus /> */}
            </Layout>
    )
}

export default Shop