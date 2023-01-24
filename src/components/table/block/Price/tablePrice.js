import React from 'react';
import styles from '../../../priceItem/priceItem.module.scss'
export const TablePrice = (props) => {

    if(!props?.data) {
            return <div/> 
        }
    return (<>
            <div className={styles.value}>
            {props.data.price}
        </div>
        <div className={styles.change}>
            {props.data.change}
        </div>
    </>
);
};
