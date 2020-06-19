import React from 'react'
import { Link } from'gatsby'

import { Base, Blurb } from '../../styled/banner/shopBanner'

const ShopBanner = () => {
    return (
            <Link 
            style={{ boxShadow: `none` }} 
            to={`/shop/`}>

            <Base>
                <Blurb>Shop the edit</Blurb>
            </Base>
            
            </Link>
    )
}

export default ShopBanner