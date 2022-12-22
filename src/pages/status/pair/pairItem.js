import React from 'react';
import arrow from '../img/arrow.svg';
import styles from './pair.module.scss';
export const PairItem = ({item}) => {

    return <div className={styles.pairItem}>
        <div className={styles.pairFrom}>
            <img src={item.from['icon']} alt={item.currency} /> <div><span>{item.from['name']}</span> {item.from['currency']}</div>
        </div>
        <div className={styles.pairArrow}>
            <img src={arrow} alt="Arrow" />
        </div>
        <div className={styles.pairTo}>
        <img src={item.to['icon']} alt={item.currency} /> <div><span>{item.to['name']}</span> {item.to['currency']}</div>
        </div>
        <div className={styles.status}>
            <button type='button' className={item.status ? [styles.active] : ""} >Active</button>
        </div>
        
        <div className={styles.fixedRate}>
            <button type='button' className={item.status ? [styles.active] : ""} >Active</button>
        </div>
    </div>
};
 