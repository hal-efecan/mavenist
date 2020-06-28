import React from 'react'
import { Link } from'gatsby'

import { Base, Blurb } from '../../styled/banner/shopBanner'

const ShopBanner = () => {
    return (
            <Link 
            style={{ boxShadow: `none` }} 
            to={`/shop/`}>

            <Base>
                <Blurb>Shop our favourites</Blurb>
            </Base>
            
            </Link>
    )
}

export default ShopBanner