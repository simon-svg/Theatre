import React from 'react';
import {Link, usePage} from "@inertiajs/inertia-react";
import {getData} from '../../../../../../utils/index';

// Styles
import styles from './theatreTable.module.scss';

const TheatreTable = () => {
    const { theatres } = usePage().props

    return (
        <>
            <div className={styles.theatre__head}>
                <h3 className={styles.theatre__title}>All Theatres</h3>
                <Link className={styles.create__button} href={route('admin.theatre.create')} as="a">Create</Link>
            </div>
            <table className={styles.theatre__table}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>date</th>
                        <th width="10%">panel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        theatres.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        <div className={styles.table__item}>
                                            <img src={`/storage/${item.image}`} alt={item.name}/>
                                            <span>{item.name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.table__item}>
                                            <span>{getData(item.date)}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.table__item}>
                                            <Link className={styles.table__btn} href={route('admin.theatre.edit', item.id)} as="a">edit</Link>
                                            <Link className={`${styles.table__btn} ${styles.delete}`} href={route('admin.theatre.destroy', item.id)} method="delete" as="button">delete</Link>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default TheatreTable;
