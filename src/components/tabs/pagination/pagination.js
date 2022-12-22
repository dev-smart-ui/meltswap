import React from 'react';
import styles from './pagination.module.scss'

export const Pagination = () => {

    return <div className={styles.pagination}>
        <button type='button' className={"active " + [styles.dots]}>1</button>
        <button type='button' className={styles.dots}>2</button>
        <button type='button' className={styles.dots}>3</button>
        <button type='button' className={styles.dots}>4</button>
        <button type='button' className={styles.dots}>5</button>
    </div>
};
