import React from 'react';
import styles from '../../../priceItem/priceItem.module.scss'
export const TablePriceMobile = (props) => {

    let price = props.data.price
        
    return (<>
        <div className={styles.value}>
            ${Intl.NumberFormat('en-IN').format(price)} 
        </div>
        <div className={styles.change}>
            {props.data.change}
        </div>
    </>
);
};
