import React from 'react';

// Styles
import styles from './nav.module.scss';

const Nav = ({isOpened}) => {
    return (
        <nav className={styles.user__nav} style={{height: isOpened ? 'max-content' : '0%'}}>
            <ul className={styles.user__nav_list}>
                <li className={styles.user__nav_item}>
                    <a className={styles.user__nav_link} href="">log out</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
