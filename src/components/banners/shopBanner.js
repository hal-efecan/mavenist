import React from 'react'
import { Link, graphql, useStaticQuery } from'gatsby'

import { Base, Blurb } from '../../styled/banner/shopBanner'

const ShopBanner = () => {
    return (
                <div style={{
                    width: `max-content`, margin: `0 auto`, backgroundColor:`coral`
                }}>

                <Link 
                style={{ boxShadow: `none`, width: `100%` }} 
                to={`/shop`}>

                <Base>
                    <Blurb>Shop the edit</Blurb>
                </Base>
                
                </Link>

                </div>
    )
}

export default ShopBanner