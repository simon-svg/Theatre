import React from 'react';
import {Link} from "@inertiajs/inertia-react";

// Styles
import styles from './theatreTable.module.scss';

const TheatreTable = () => {
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
                    <tr>
                        <td>
                            <div className={styles.table__item}>
                                <img src="https://pbs.twimg.com/profile_images/1483493069752258566/Ft0W9FvR_400x400.jpg" alt=""/>
                                <span>Theatre 1</span>
                            </div>
                        </td>
                        <td>
                            <div className={styles.table__item}>
                                <span>Theatre 1</span>
                            </div>
                        </td>
                        <td>
                            <div className={styles.table__item}>
                                <button className={styles.table__btn}>edit</button>
                                <button className={`${styles.table__btn} ${styles.delete}`}>delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TheatreTable;
