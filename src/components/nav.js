import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import navStyles from '../styles/nav.module.scss'

const Nav = () => {

    const data = useStaticQuery(query)
    const { pathPrefix } = data.site.siteMetadata
    console.log('pathPrefix', pathPrefix)
    
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

const query = graphql`
query {
    site {
      siteMetadata {
        pathPrefix
      }
    }
  }
`