import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import navStyles from '../styles/nav.module.scss'

const Nav = () => {
    
    return (
        <ul className={navStyles.container}>
            <Link className={navStyles.link} activeClassName={navStyles.active} to={`/`}>
                <li className={navStyles.nav_item} >Home</li>
            </Link>
            <Link className={navStyles.link} activeClassName={navStyles.active} to={`/shop`}><li className={navStyles.nav_item}>Shop</li></Link>
        </ul>
    )
}

export default Nav