import React, { useEffect } from 'react'
import Nav from './nav'
import { graphql, useStaticQuery, Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'

// import Cart from './cart'

const Header = () => {
    const data = useStaticQuery(query)
    const { title } = data.site.siteMetadata  
    
    useEffect(() => {
        if (typeof window !== 'undefined') {

            let prevScrollPos = window.pageYOffset;
            console.log('prevPos', prevScrollPos)
            window.onscroll = () => {
                let currScrollPos = window.pageYOffset
                // let start = "800px"
                console.log('currPos', currScrollPos, 'prevPos', prevScrollPos)
                
                let head = document.querySelector('#head')
                let title = document.querySelector('#title')
                if(currScrollPos < 140) {
                    head.style.top = "0"
                    // title.style.opacity = "1"
                } else {
                    head.style.top = "-140px"
                    // title.style.opacity = "0"
                }

                prevScrollPos = currScrollPos
            }
        }

    }, [])

    return (
        <div id="head" className={headerStyles.header}>
            
                {/* <h1 id="title" className={headerStyles.title}>
                    <Link className={headerStyles.link} to={`/`}>
                        {title}
                    </Link>
                </h1> */}

                {/* <div className={headerStyles.container}>
                    <Cart />
                </div> */}

            <Nav />
        </div>
    )
}

export default Header

const query = graphql`
{
    site {
        siteMetadata {
            title
        }
    }
}
`