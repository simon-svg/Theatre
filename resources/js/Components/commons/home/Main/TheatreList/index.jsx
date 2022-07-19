import React from 'react';

// Styles
import styles from './theatreList.module.scss';

// Images
import theatre1 from '../../../../../../assets/images/theatres/1.jpg';
import theatre2 from '../../../../../../assets/images/theatres/2.jpg';
import theatre3 from '../../../../../../assets/images/theatres/3.jpg';
import theatre4 from '../../../../../../assets/images/theatres/4.jpg';

// Components
import TheatreItem from './TheatreItem';

const TheatreList = () => {
    return (
        <ul className={styles.theatre__list}>
            <TheatreItem item={{image: theatre1, name: 'Theatre 1', date: '05-05-2022 18:00'}}/>
            <TheatreItem item={{image: theatre2, name: 'Theatre 2', date: '09-04-2022 19:00'}}/>
            <TheatreItem item={{image: theatre3, name: 'Theatre 3', date: '07-05-2022 17:00'}}/>
            <TheatreItem item={{image: theatre4, name: 'Theatre 4', date: '05-06-2022 15:00'}}/>
        </ul>
    )
}

export default TheatreList;
