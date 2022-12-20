import React from 'react';
import styles from './search.module.scss'
import search from './img/search.svg';

export const Search = () => {

    return <form className={styles.search}>
        <button type="submit" className={styles.submit}><img src={search} alt="Search" /></button>
        <input type="text" className={styles.field} placeholder="Search the coin"/>               
    </form>
};