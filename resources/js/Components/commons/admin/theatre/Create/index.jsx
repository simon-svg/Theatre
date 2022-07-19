import React from 'react';

// Styles
import styles from './create.module.scss';
import Wrapper from "../../../all/Wrapper";

// Components
import Nav from "../all/Nav";

const Create = () => {
    return (
        <main>
            <section className={styles.home__section}>
                <Wrapper>
                    <div className={styles.home__cont}>
                        <Nav />
                        here will be create functionality
                    </div>
                </Wrapper>
            </section>
        </main>
    )
}

export default Create;
