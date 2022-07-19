import React from 'react';
import {Link} from "@inertiajs/inertia-react";

// Styles
import styles from './theatre.module.scss';

const TheatreItem = ({item}) => {
    return (
        <li className={styles.theatre__item}>
            <Link className={styles.theatre__image} href="#">
                <img src={item.image} alt={item.name}/>
            </Link>
            <div className={styles.theatre__cont}>
                <div className={styles.theatre__info}>
                    <Link className={styles.theatre__name} href="#">{item.name}</Link>
                    <h3 className={styles.theatre__date}>{item.date}</h3>
                </div>
                <div className={styles.theatre__book}>
                    <Link className={`${styles.theatre__book_btn} styles.active`} href="">Book</Link> {/* here can be Booked */}
                </div>
            </div>
        </li>
    )
}

export default TheatreItem;
