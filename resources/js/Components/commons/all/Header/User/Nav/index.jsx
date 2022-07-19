import React from 'react';
import {Link, usePage} from "@inertiajs/inertia-react";

// Styles
import styles from './nav.module.scss';

const Nav = ({isOpened, role}) => {
    return (
        <nav className={`${styles.user__nav} ${isOpened ? styles.opend : ''}`}>
            <ul className={styles.user__nav_list}>
                <li className={styles.user__nav_item}>
                    {role === 'admin' &&
                        <Link className={styles.user__nav_link} href={route('admin.theatre.index')} method="get" as="button">admin</Link>
                    }
                    <Link className={styles.user__nav_link} href={route('logout')} method="post" as="button">log out</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
