import React from 'react';
import styles from './searchStatus.module.scss'
import searchLogo from './img/search-logo.svg';

export const SearchStatus = () => {

    return <div className={styles.searchID}>
        <div className={styles.logo}>
            <img src={searchLogo} alt="Search logo" />
        </div>
        <div className={styles.block}>
            <h3 className={styles.blockTitle}>Enter your order ID to get the status</h3>
            <form className={styles.form}>
                <input name='text' placeholder='Transaction ID' className={styles.inputId} />
                <button type='button' className={styles.formBtn}>Check</button>
            </form>
        </div>
    </div>
};
 