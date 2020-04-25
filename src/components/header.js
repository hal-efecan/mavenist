import React, { useEffect } from 'react'
import Nav from './nav'
import { graphql, useStaticQuery, Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'

// import Cart from './cart'

const Header = () => {
    const data = useStaticQuery(query)
    const { title } = data.site.siteMetadata


    // let window;
    
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            let prevScrollPos = window.pageYOffset;
            // prevScrollPos
            window.onscroll = () => {
                let currScrollPos = window.pageYOffset
                
                if(prevScrollPos > currScrollPos) {
                    let myDiv = document.querySelector('#head')
                    console.log(myDiv)
                    myDiv.style.top = "0"
                } else {
                    document.querySelector('#head').style.top = "-140px"
                }
                prevScrollPos = currScrollPos
            }
        }
        
    }, [])

    return (
        <div id="head" className={headerStyles.header}>
            
                <h1 className={headerStyles.title}>
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