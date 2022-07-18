import React from 'react';

// Styles
import styles from './logo.module.scss';

// Imgs
import logo from '../../../../../assets/images/logo.png';

const Logo = () => {
    return (
        <div className={styles.logo__cont}>
            <a className={styles.logo__link} href="#">
                <img src={logo} alt="theatre"/>
                <span>Theatre API</span>
            </a>
        </div>
    )
}

export default Logo;
