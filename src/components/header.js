import React from 'react'
import Nav from './nav'
import { graphql, useStaticQuery, Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'

import Cart from './cart'

const Header = () => {

    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata

    return (
        <div className={headerStyles.header}>
            
                <h1 className={headerStyles.title}>
                    <Link className={headerStyles.link} to={`/`}>
                        {title}
                    </Link>
                </h1>

                <div className={headerStyles.container}>
                    <Cart />
                </div>

            <Nav />
        </div>
    )
}

export default Header

// pathPrefix