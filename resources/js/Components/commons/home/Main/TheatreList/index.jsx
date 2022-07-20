import React from 'react';
import {usePage} from "@inertiajs/inertia-react";

// Styles
import styles from './theatreList.module.scss';

// Components
import TheatreItem from './TheatreItem';

const TheatreList = () => {
    const { theatres } = usePage().props

    return (
        <ul className={styles.theatre__list}>
            {
                theatres.map((item) => {
                    return (
                        <TheatreItem key={item.id} item={item}/>
                    )
                })
            }
        </ul>
    )
}

export default TheatreList;
