import React from 'react';
import {Link} from "@inertiajs/inertia-react";

// Styles
import styles from './logo.module.scss';

// Images
import logo from '../../../../../../assets/images/logo.png';

const Logo = () => {

    return (
        <h1 className={styles.logo__cont}>
            <Link className={styles.logo__link} href={route('home')} as="a">
                <img src={logo} alt="theatre"/>
                <span>Theatre API</span>
            </Link>
        </h1>
    )
}

export default Logo;
