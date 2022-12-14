import React from 'react';
import styles from './howSection.module.scss'

export const HowSection = () => {

    return <section className={styles.howSection}>
        <div className='container'>
            <h2 className={styles.title}>
                How Meltswap works
            </h2>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <div className={styles.numb}>
                            1
                    </div>
                    <div className={styles.content}>
                        <h3>
                            Complete exchange details
                        </h3>
                        <p>
                            Choose and exchange pair from our list. 
                            There are over 50,000 exchange pairs to choose from, so you should be able to find what you are looking for. 
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.numb}>
                        2
                    </div>
                    <div className={styles.content}>
                        <h3>
                            Receiving address
                        </h3>
                        <p>
                            Insert receiving address for the crypto coin you would like to swap too.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.numb}>
                        3
                    </div>
                    <div className={styles.content}>
                        <h3>
                            Make crypto deposit
                        </h3>
                        <p>
                            Deposit your selected cryptocurrency into the deposit address that will be provided to swap to corresponding cryptocurrency.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.numb}>
                        4
                    </div>
                    <div className={styles.content}>
                        <h3>
                            Sit back relax and watch the process be completed
                        </h3>
                        <p>
                            Deposit Received <br/>
                            Confirmation <br/>
                            Exchanging <br/>
                            Sending final coins to your receiving address <br/>
                            Done!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
};
 