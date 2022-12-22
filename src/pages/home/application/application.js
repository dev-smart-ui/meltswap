import React from 'react';
import phone from './img/phones.svg';

import styles from './application.module.scss'

export const Application = () => {

    return <section className={styles.application}>
        <div className='container'>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <h2>Mobile management application </h2>
                    <button type='button' disabled  className='button'>Coming soon</button>
                </div>
                <div className={styles.image}>
                    <img src={phone} alt="phone" />
                </div>
            </div>
        </div>
    </section>
};
 