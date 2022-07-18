import React, {useState} from 'react';

// Styles
import styles from './user.module.scss';
import Icon from "../../../../../assets/icons/icon";

// Components
import Nav from './Nav';

const User = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handelOpen = () => {
        setIsOpened(prevState => !prevState)
    }

    return (
        <div className={styles.user__cont} onClick={handelOpen}>
            <div className={styles.user__cont_head}>
                <span className={styles.user__name}>Simon</span>
                <div className={styles.arrow__down} style={{transform: isOpened ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                    <Icon name="arrowDown" />
                </div>
            </div>
            <Nav isOpened={isOpened} />
        </div>
    )
}

export default User;
