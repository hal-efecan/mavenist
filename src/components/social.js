import React from 'react'

import fbook from '../icons/facebook.svg'
import twitter from '../icons/twitter.svg'
import instagram from '../icons/instagram.svg'

import footerStyles from '../styles/footer.module.scss'

const Social = () => {
    return (
        <div className={footerStyles.social_wrapper}>

            <a className={footerStyles.link} rel="noopener noreferrer" href="https://www.facebook.com/themavenist-113576677029420/" target="_blank">
                <img className={footerStyles.img} src={fbook} alt="facebook" width="23px"/>
            </a>

            <a className={footerStyles.link} rel="noopener noreferrer" href="https://twitter.com/the_mavenist" target="_blank">
                <img className={footerStyles.img} src={twitter} alt="twitter" width="23px"/> 
            </a>

            <a className={footerStyles.link} rel="noopener noreferrer" href="https://www.instagram.com/themavenist/" target="_blank">
                <img className={footerStyles.img} src={instagram} alt="instagram" width="23px"/>
            </a>

        </div>
    )
}

export default Social
