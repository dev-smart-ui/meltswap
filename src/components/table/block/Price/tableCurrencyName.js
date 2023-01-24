import React from 'react';
import styles from '../../../priceItem/priceItem.module.scss'
export const TableCurrencyName = (props) => {
    
        if(!props?.data) {
            return <div/> 
        }
    return (<div className={styles.currency}>
        <img src={props.data.iconUrl} alt={props.data.name} /> <div className={styles.currencyTitle}><span>{props.data.symbol}</span> {props.data.name}</div> 
    </div>
);
};
