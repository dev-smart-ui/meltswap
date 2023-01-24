import React from 'react';
import styles from '../../../priceItem/priceItem.module.scss'
export const TableFromToName = (props) => {
    
        if(!props?.data) {
            return <div/> 
        }
    return (<div className={styles.currency}>
        <img src={props.data.image} alt={props.data.ticker} /> <div className={styles.currencyTitle}><span>{props.data.ticker}</span> {props.data.name}</div> 
    </div>
);
};
