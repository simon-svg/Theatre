import React from 'react';
import {Link} from "@inertiajs/inertia-react";

// Styles
import styles from './nav.module.scss';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                    <Link className={styles.nav__link} href={route('admin.theatre.index')}>Theatres</Link>
                </li>
                <li className={styles.nav__item}>
                    <Link className={styles.nav__link} href="#">Bookings</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
