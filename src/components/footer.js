import React from 'react'
import footerStyles from '../styles/footer.module.scss'
import Social from './social'

const Footer = () => {
    return (
        <div className={footerStyles.container}>
         
                <div className={footerStyles.name}>
                    The Mavenist
                </div>

                <div className={footerStyles.wrapper}>

                    <div className={footerStyles.social}>
                        <Social />
                    </div>

                    <ul className={footerStyles.info}>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>

                </div>

        </div>
    )
}

export default Footer