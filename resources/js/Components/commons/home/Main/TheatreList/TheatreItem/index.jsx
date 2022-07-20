import React, {useState} from 'react';
import {Link, usePage} from "@inertiajs/inertia-react";
import {getData} from '../../../../../../utils/index';

// Styles
import styles from './theatre.module.scss';

const TheatreItem = ({item}) => {
    const {user} = usePage().props;

    const [data, setData] = useState({
        user_id: user.id,
        theatre_id: item.id,
    })

    return (
        <li className={styles.theatre__item}>
            <Link className={styles.theatre__image} href="#">
                <img src={`/storage/${item.image}`} alt={item.name}/>
            </Link>
            <div className={styles.theatre__cont}>
                <div className={styles.theatre__info}>
                    <Link className={styles.theatre__name} href="#">{item.name}</Link>
                    <h3 className={styles.theatre__date}>{getData(item.date)}</h3>
                </div>
                <div className={styles.theatre__book}>
                    <Link className={`${styles.theatre__book_btn} styles.active`}
                          href={route('booking.store')}
                          method="post"
                          data={data}
                          as="button">Book</Link>
                </div>
            </div>
        </li>
    )
}

export default TheatreItem;
