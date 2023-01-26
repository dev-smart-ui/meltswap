import React from 'react';
import coinranking from './img/coinranking-logo.svg';
import cryptovirally from './img/cryptovirally-logo.png';
import pixeltrue from './img/pixeltrue-logo.svg';


import styles from './companySection.module.scss'

export const CompanySection = () => {
    const sizeCoinranking = ((16 / 99)  * 100);  // (( height / width)  * 100)
    const sizeCryptovirally = ((24 / 102)  * 100);  // (( height / width)  * 100)
    const sizePixeltrue = ((27 / 81)  * 100);  // (( height / width)  * 100)

    return <section className={styles.company}>
        <div className={styles.wrap}>
            <div className={styles.logo}>
                <figure className={"figure-webp"}  style={{paddingBottom: `${sizeCoinranking}%`}}>
                    <img src={coinranking} alt="Coinranking logo" />
                </figure>
            </div>
            <div className={styles.logo}>
                <figure className={"figure-webp"}  style={{paddingBottom: `${sizeCryptovirally}%`}}>
                    <img src={cryptovirally} alt="Cryptovirally logo" />
                </figure>
            </div>
            <div className={styles.logo}>
                <figure className={"figure-webp"}  style={{paddingBottom: `${sizePixeltrue}%`}}>
                    <img src={pixeltrue} alt="Pixeltrue logo" />
                </figure>
            </div>
        </div>
    </section>
};
 