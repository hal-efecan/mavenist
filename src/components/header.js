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

            window.onscroll = () => {
                let currScrollPos = window.pageYOffset

                if(currScrollPos < 0) {
                    currScrollPos = 0
                }
                // console.log('currPos', currScrollPos, 'prevPos', prevScrollPos)
                // let deviceTop = currScrollPos-812
                // console.log(deviceTop)
                let head = document.querySelector('#head')
                // let title = document.querySelector('#title')
                if(currScrollPos <= prevScrollPos) {
                    console.log('curr', currScrollPos, 'prev', prevScrollPos)
                    head.style.top = `0`
                } else {
                    head.style.top = "-140px"
                }

                prevScrollPos = currScrollPos
            }
        }

    }, [])

    return (
        <div id="head" className={headerStyles.header}>
            
                <h1 id="title" className={headerStyles.title}>
                    <Link className={headerStyles.link} to={`/`}>
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