import React from 'react';
import shopBtnStyle from '../../styles/Mdx/shopBtn.module.scss'

const ShopBtn = ({ url, text }) => {
    return (
        <div>
            <a 
            href={url}
            target={`_blank`}
            className={shopBtnStyle.button}
            rel={`noopener`}
            rel={`noreferrer`}
            >
            {text}
            </a>
        </div>
    )
}

export default ShopBtn