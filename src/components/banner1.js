import React from 'react'
import BannerStyles from '../styles/banner.module.scss';

const Banner1 = () => {
    return (
        <div style={{ display: `flex`, flexDirection: `column`, alignItems: `center`}}>
            <iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=48&l=ur1&category=piv&banner=0CQ53D02W107RHR3JVR2&f=ifr&linkID=1e76e6a9ad38532d3b6b1c910a6ca86b&t=themavenist-21&tracking_id=themavenist-21" 
            width="728" 
            height="90" 
            scrolling="no" 
            border="0" 
            marginWidth="0"
            className={BannerStyles.banner}
            frameBorder="0"></iframe>

            {/* <iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=288&l=ur1&category=piv&banner=14ZQRPDZB4WWG3CQ3782&f=ifr&linkID=a427e0bd322d8faef4b16f554424c571&t=themavenist-21&tracking_id=themavenist-21" 
            width="320" 
            height="50" 
            scrolling="no" 
            border="0" 
            marginwidth="0" 
            className={BannerStyles.banner_small}
            frameborder="0"></iframe> */}

            <iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=22&l=ur1&category=piv&banner=1K2T9PSWF9KM5TPDGW02&f=ifr&linkID=a6cd1d8506b59630f93e5eff702bf352&t=themavenist-21&tracking_id=themavenist-21" 
            width="250" 
            height="250" 
            scrolling="no" 
            border="0" 
            marginwidth="0" 
            className={BannerStyles.banner_small}
            frameborder="0"></iframe>

            {/* <iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=20&l=ur1&category=piv&banner=0K32RTBXYEQ8GV9GD7G2&f=ifr&linkID=fd108611aca4218ba22ce09929094737&t=themavenist-21&tracking_id=themavenist-21" 
            width="120" 
            height="90" 
            scrolling="no" 
            border="0" 
            marginwidth="0" 
            className={BannerStyles.banner_small}
            frameborder="0"></iframe> */}
        </div>
    )
}

export default Banner1
