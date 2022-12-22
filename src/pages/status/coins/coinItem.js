import React from 'react';
import styles from './coinItem.module.scss'
import check from '../img/check.svg';
export const ConstItem = ({item}) => {

    return <div className={styles.coinItem}>
        <div className={styles.currency}>
            <img src={item.icon} alt={item.currency} /> <div><span>{item.name}</span> {item.currency}</div>
        </div>
        <div className={styles.status}>
            <button type='button' className={item.status ? [styles.active] : ""} >Active</button>
        </div>
        <div>
            {item.exchangeFrom ? <img src={check} className={styles.checkIcon} alt="Check"/> : ""}
        </div>
        <div>
            {item.exchangeTo ? <img src={check} className={styles.checkIcon} alt="Check"/> : ""}
        </div>
        <div>
            {item.fixedRate ? <img src={check} className={styles.checkIcon} alt="Check"/> : ""}
        </div>
    </div>
};
 