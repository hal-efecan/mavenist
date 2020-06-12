import React from 'react'
import { Link } from 'gatsby'

import navStyles from '../../styles/nav.module.scss'

const Nav = () => {

    return (
        <ul className={navStyles.container}>
            <Link className={navStyles.link} activeClassName={navStyles.active} to={`/`}>
                <li className={navStyles.nav_item}>Home</li>
            </Link>
            <Link className={navStyles.link} activeClassName={navStyles.active} to={`/fashion`}>
                <li className={navStyles.nav_item}>Fashion</li>
            </Link>
            {/* <Link className={navStyles.link} activeClassName={navStyles.active} to={`/style`}>
                <li className={navStyles.nav_item}>Style</li>
            </Link> */}
            {/* <Link className={navStyles.link} activeClassName={navStyles.active} to={`/thoughts`}>
                <li className={navStyles.nav_item}>Thoughts</li>
            </Link> */}
            <Link className={navStyles.link} activeClassName={navStyles.active} to={`/footwear`}>
                <li className={navStyles.nav_item}>Footwear</li>
            </Link>
            <Link className={navStyles.link} activeClassName={navStyles.active} to={`/accessories`}>
                <li className={navStyles.nav_item}>Accessories</li>
            </Link>
        </ul>
    )
}

export default Nav