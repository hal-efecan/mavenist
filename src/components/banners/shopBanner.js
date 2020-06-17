import React from 'react'
import { Link } from'gatsby'

import { Base, Blurb } from '../../styled/banner/shopBanner'

const ShopBanner = () => {
    return (
        <Base>
            <Link style={{ boxShadow: `none` }} to={`/shop`}>
                <Blurb>
                    Shop the edit
                </Blurb>
            </Link>
        </Base>
    )
}

export default ShopBanner
