import React from 'react';
import styles from './exchange.module.scss'
import exchanges from './img/Exchange.svg';


export const Exchange = () => {

    return <section className={styles.exchange}>
        <div className={styles.content}>
            <h1> <span>Trusted</span> & <span>secure</span> platform for crypto exchange </h1>
            <p>Get started with the easiest and most secure platform to exchange cryptocurrencies</p>
        </div>
        <div className={styles.img}>
            <img src={exchanges} alt='Exchange' />
        </div>
    </section>
};
 