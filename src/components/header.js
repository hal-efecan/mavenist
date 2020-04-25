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
                if(currScrollPos < 200) {
                    head.style.top = "0"
    
                } else {
                    head.style.top = "-140px"
                }

                prevScrollPos = currScrollPos
            }
        }
        
    }, [])

    return (
        <div id="head" className={headerStyles.header}>
            
                <h1 className={headerStyles.title}>
                    <Link id="title" className={headerStyles.link} to={`/`}>
                        {title}
                    </Link>
                </h1>

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