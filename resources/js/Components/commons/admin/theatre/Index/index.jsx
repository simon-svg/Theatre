import React from 'react';

// Styles
import styles from './main.module.scss';
import Wrapper from "../../../all/Wrapper";

// Components
import TheatreTable from './TheatreTable';
import Nav from "../all/Nav";

const Main = () => {
    return (
        <main>
            <section className={styles.home__section}>
                <Wrapper>
                    <div className={styles.home__cont}>
                        <Nav />
                        <TheatreTable />
                    </div>
                </Wrapper>
            </section>
        </main>
    )
}

export default Main;
