import React from 'react';

// Styles
import styles from './edit.module.scss';
import Wrapper from "../../../all/Wrapper";

// Components
import Nav from "../../all/Nav";
import EditForm from "./EditForm";

const Edit = () => {
    return (
        <main>
            <section className={styles.home__section}>
                <Wrapper>
                    <div className={styles.home__cont}>
                        <Nav />
                        <EditForm />
                    </div>
                </Wrapper>
            </section>
        </main>
    )
}

export default Edit;
