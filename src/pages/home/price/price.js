import React from 'react';
import styles from './price.module.scss'


export const Price = () => {
    return <section className={styles.price}>
        <div className='container'>
            <h2 className={styles.title}>Price charts</h2>
            
            <a href='/' className='btn'>More assets</a>
        </div>
    </section>

};
 