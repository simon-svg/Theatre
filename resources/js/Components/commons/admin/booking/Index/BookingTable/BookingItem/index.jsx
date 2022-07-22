import React from 'react';

// Styles
import styles from './bookingItem.module.scss';
import {getData} from "@/utils";
import {Link} from "@inertiajs/inertia-react";

const BookingItem = ({item}) => {
    return (
        <tr>
            <td>
                <div className={styles.table__item}>
                    <img src={`/storage/${item.image}`} alt={item.name}/>
                    <span>{item.name}</span>
                </div>
            </td>
            <td>
                <div className={styles.table__item}>
                    <span>{item.theatre_name}</span>
                </div>
            </td>
            <td>
                <div className={styles.table__item}>
                    <span>{getData(item.date)}</span>
                </div>
            </td>
            <td>
                <div className={styles.table__item}>
                    {item.booked ?
                        <Link className={`${styles.table__btn} ${styles.submitted}`}
                              href={route('admin.booking.submit')}
                              data={{id: item.booked_id, submitted: item.booked}}
                              method="post"
                              as="button">unsubmit</Link> :
                        <Link className={styles.table__btn}
                              href={route('admin.booking.submit')}
                              data={{id: item.booked_id, submitted: item.booked}}
                              method="post"
                              as="button">submit</Link>
                    }
                </div>
            </td>
        </tr>
    )
}

export default BookingItem;
