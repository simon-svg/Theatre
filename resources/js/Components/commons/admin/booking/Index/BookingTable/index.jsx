import React from 'react';
import {Link, usePage} from "@inertiajs/inertia-react";
import {getData} from '../../../../../../utils/index';

// Styles
import styles from './theatreTable.module.scss';

// Components
import TicketCount from './TicketCount';
import BookingItem from './BookingItem';

const BookingTable = () => {
    const { bookings, bookedTicketsCount, ticketsCount } = usePage().props

    return (
        <>
            <div className={styles.theatre__head}>
                <h3 className={styles.theatre__title}>All Bookings</h3>
                <Link className={styles.clear__button} href={route('admin.booking.clear.all')} as="a">Clear all</Link>
            </div>
            <table className={styles.theatre__table}>
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>Theatre name</th>
                        <th>Date</th>
                        <th width="6%">Panel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((item) => {
                            return (
                                <BookingItem key={item.booked_id} item={item} />
                            )
                        })
                    }
                </tbody>
            </table>
            <TicketCount bookedTicketsCount={bookedTicketsCount} ticketsCount={ticketsCount} />
        </>
    )
}

export default BookingTable;
