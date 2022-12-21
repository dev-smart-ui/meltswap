import React from 'react';
import coinranking from './img/coinranking-logo.svg';
import cryptovirally from './img/cryptovirally-logo.svg';
import pixeltrue from './img/pixeltrue-logo.svg';


import styles from './companySection.module.scss'

export const CompanySection = () => {

    return <section className={styles.company}>
        <div className={styles.wrap}>
            <div className={styles.logo}>
                <img src={coinranking} alt="Coinranking logo" />
            </div>
            <div className={styles.logo}>
                <img src={cryptovirally} alt="Cryptovirally logo" />
            </div>
            <div className={styles.logo}>
                <img src={pixeltrue} alt="Pixeltrue logo" />
            </div>
        </div>
    </section>
};
 