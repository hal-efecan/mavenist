import React from 'react'
import BannerStyles from '../../styles/banner.module.scss';

const Banner2 = () => {
    return (
        <div style={{ display: `flex`, flexDirection: `column`, alignItems: `center`}}>

            <iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=48&l=ur1&category=gift_certificates&banner=1A6C54G7EX5E5TK6HAR2&f=ifr&linkID=d81548508934dd22b1122ea50e6cb19e&t=themavenist-21&tracking_id=themavenist-21" 
            width="728" 
            height="90"
            title="Amazon gift certificate advertisment"
            scrolling="no" 
            border="0" 
            marginwidth="0" 
            className={BannerStyles.banner}
            frameborder="0"></iframe>

        </div>
    )
}

export default Banner2
