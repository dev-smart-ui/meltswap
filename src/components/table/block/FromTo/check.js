import React from 'react';
import styles from '../../../../pages/status/coins/coinItem.module.scss'
import check from '../../../../pages/status/img/check.svg';

export const Check = (props) => {
    return(
        <div>
            {props.value ? <img src={check} className={styles.checkIcon} alt="Check"/> : ""}
        </div>
    )
};
