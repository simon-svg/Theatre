import React from 'react';
import {Link} from "@inertiajs/inertia-react";

// Styles
import styles from './footer.module.scss';

// Components
import Wrapper from '../Wrapper';
import logo from "../../../../../assets/images/logo.png";

const Footer = () => {
    console.log('grd')
    return (
        <footer className={styles.footer}>
            <Wrapper>
                <div className={styles.footer__cont}>
                    <div className={styles.logo__cont}>
                        <Link className={styles.logo__link} href={route('home')}>
                            <img src={logo} alt="theatre"/>
                        </Link>
                    </div>
                    <h4 className={styles.footer__rights}>© 2022 - 2022 Theatre API. All rights reserved.</h4>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer;
