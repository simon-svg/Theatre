import React from 'react';

// Styles
import styles from './header.module.scss';

// Components
import Wrapper from '../Wrapper'
import Logo from './Logo';
import User from './User';

const Header = () => {
    return (
        <header className={styles.header}>
            <Wrapper>
                <div className={styles.header__cont}>
                    <Logo/>
                    <User />
                </div>
            </Wrapper>
        </header>
    )
}

export default Header;
