import React from 'react';

// Styles
import styles from './create.module.scss';
import Wrapper from "../../../all/Wrapper";

// Components
import Nav from "../../all/Nav";
import CreateForm from "./CreateForm";

const Create = () => {
    return (
        <main>
            <section className={styles.home__section}>
                <Wrapper>
                    <div className={styles.home__cont}>
                        <Nav />
                        <CreateForm />
                    </div>
                </Wrapper>
            </section>
        </main>
    )
}

export default Create;
