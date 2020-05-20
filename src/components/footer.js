import React from 'react';
import {Link} from 'gatsby'
import footerStyles from '../styles/footer.module.scss';
import Social from './social';

const Footer = () => {
    return (
        <div className={footerStyles.container}>
         
                <div className={footerStyles.name_container}>
                    <h3 className={footerStyles.name}>The Mavenist</h3>
                </div>

                <div className={footerStyles.wrapper}>
                    <div className={footerStyles.info}>
                        <Link to={"/about"}>
                            <li>
                            About
                            </li>
                        </Link>
                    </div>
                    <div className={footerStyles.social}>
                        <Social />
                    </div>
                </div>

        </div>
    )
}

export default Footer