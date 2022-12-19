import React from 'react';
import styles from './priceItem.module.scss'

export const PriceItem = ({item}) => {

    return <div className={styles.priceItem}>
        <>
            {item.currency}
            {item.name}
        </>
    </div>
};
 