import React from 'react'

import fbook from '../icons/facebook.svg'
import twitter from '../icons/twitter.svg'
import instagram from '../icons/instagram.svg'

import footerStyles from '../styles/footer.module.scss'

const Social = () => {
    return (
        <div className={footerStyles.social_wrapper}>
            <img className={footerStyles.img} src={fbook} alt="facebook" width="23px"/>
            <img className={footerStyles.img} src={twitter} alt="twitter" width="23px"/>
            <img className={footerStyles.img} src={instagram} alt="instagram" width="23px"/>
        </div>
    )
}

export default Social
