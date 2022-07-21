import React from 'react';

// Styles
import styles from './ticket.module.scss';

const TicketCount = ({bookedTicketsCount, ticketsCount}) => {
    return (
        <div className={styles.ticket__count}>
            <p>Booked tickets count: <span>{bookedTicketsCount ?? 0}</span></p>
            <p>All tickets count: <span>{ticketsCount ?? 0}</span></p>
        </div>
    )
}

export default TicketCount;
