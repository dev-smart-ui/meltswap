import React from 'react';
import styles from './priceItem.module.scss'

export const PriceItem = ({item, counter}) => {

    return <div className={styles.priceItem}>
        <div className={styles.numb}>
           {counter+1}
        </div>
        <div className={styles.currency}>
            <img src={item.icon} alt={item.currency} /> <div className={styles.currencyTitle}><span>{item.name}</span> {item.currency}</div> 
        </div>
        <div className={styles.value}>
            {item.price}
        </div>
        <div className={styles.change}>
            {item.change}
        </div>
        <div className={styles.market}>
            {item.cap}
        </div>
        <div className={styles.btnExchange}>
            <button type='button'>Exchange</button>
        </div>
    </div>
};
 