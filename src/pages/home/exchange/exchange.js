import React from 'react';
import styles from './exchange.module.scss'
import exchanges from './img/Exchange.svg';


export const Exchange = () => {
    const sizePaddingBottom = ((393 / 491)  * 100);  // (( height / width)  * 100)

    return <section className={styles.exchange}>
        <div className={styles.content}>
            <h1> <span>Trusted</span> & <span>secure</span> platform for crypto exchange </h1>
            <p>Get started with the easiest and most secure platform to exchange cryptocurrencies</p>
        </div>
        <div className={styles.img}>
            <figure className={"figure-webp"}  style={{paddingBottom: `${sizePaddingBottom}%`}}>
                <img src={exchanges} alt='Exchange' />
            </figure>
        </div>
    </section>
};
 