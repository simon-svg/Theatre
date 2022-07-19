import React, {useState} from 'react';

// Styles
import styles from './user.module.scss';
import Icon from "../../../../../../assets/icons/icon";

// Components
import Nav from './Nav';
import {usePage} from "@inertiajs/inertia-react";

const User = () => {
    const { user } = usePage().props
    const [isOpened, setIsOpened] = useState(false);

    const handelOpen = () => {
        setIsOpened(prevState => !prevState)
    }

    return (
        <div className={styles.user__cont} onClick={handelOpen}>
            <div className={styles.user__cont_head}>
                <span className={styles.user__name}>{user.name}</span>
                <div className={styles.arrow__down} style={{transform: isOpened ? 'rotate(90deg)' : 'rotate(0deg)'}}>
                    <Icon name="arrowDown" />
                </div>
            </div>
            <Nav isOpened={isOpened} role={user.role} />
        </div>
    )
}

export default User;
