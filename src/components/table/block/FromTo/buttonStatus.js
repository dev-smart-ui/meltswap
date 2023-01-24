import React from 'react';
import styles from '../../../../pages/status/coins/coinItem.module.scss'

export const ButtonStatus = (props) => {
    return(
        <div className={styles.status}>
        <button type='button' className={props.data.isAvailable ? [styles.active] : ""} >Active</button>
    </div>
    )
};
