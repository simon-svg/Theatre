import React from 'react';

// Styles
import styles from './main.module.scss';

// Components
import Wrapper from '../../all/Wrapper';
import TheatreList from './TheatreList';

const Main = () => {
    return (
        <main>
            <section className={styles.home__section}>
                <Wrapper>
                    <div className={styles.home__cont}>
                        <TheatreList />
                    </div>
                </Wrapper>
            </section>
        </main>
    )
}

export default Main;
