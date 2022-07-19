import React from 'react';
import { Link } from '@inertiajs/inertia-react';

// Styles
import styles from './guest.module.scss';

// Images
import Logo from '/resources/assets/images/logo.png';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link className={styles.logo} href="/">
                    <img src={Logo} alt=""/>
                </Link>
            </div>

            <div className={`${styles.form} w-full sm:max-w-md mt-6 px-6 py-4 sm:rounded-lg`}>
                {children}
            </div>
        </div>
    );
}
