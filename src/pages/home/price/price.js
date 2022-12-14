import React from 'react';
import styles from './price.module.scss'
import Tabs from "../../../components/layout/tab/tabs";
import bitcoin from './img/bitcoin.svg';


export const Price = () => {
    return <section className={styles.price}>
        <div className='container'>
            <h2 className={styles.title}>Price charts</h2>
            <Tabs>
                <div label="Top Cryptocurrencies">
                    <div className={styles.tabsBlock}>
                        <div className={styles.numberBlock}>
                            #
                        </div>
                        <div className={styles.currencyBlock}>
                            Currency
                        </div>
                        <div className={styles.priceBlock}>
                            Price
                        </div>
                        <div className={styles.changeBlock}>
                            24 Change
                        </div>
                        <div className={styles.marketBlock}>
                            Market Cap
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div>
                        <div className={styles.tabsContent}>
                            <div className={styles.numb}>
                                1
                            </div>
                            <div className={styles.currency}>
                                <img src={bitcoin} alt="Bitcoin" /> <div className={styles.currencyTitle}><span>BTC</span> Bitcoin</div> 
                            </div>
                            <div className={styles.value}>
                                $32456.78
                            </div>
                            <div className={styles.change}>
                                4.58%
                            </div>
                            <div className={styles.market}>
                                $234,123,567,367
                            </div>
                            <div className={styles.btnExchange}>
                                <button type='button'>Exchange</button>
                            </div>
                        </div>
                        <div className={styles.tabsContent}>
                            <div className={styles.numb}>
                                1
                            </div>
                            <div className={styles.currency}>
                                <img src={bitcoin} alt="Bitcoin" /> <div className={styles.currencyTitle}><span>BTC</span> Bitcoin</div> 
                            </div>
                            <div className={styles.value}>
                                $32456.78
                            </div>
                            <div className={styles.change}>
                                4.58%
                            </div>
                            <div className={styles.market}>
                                $234,123,567,367
                            </div>
                            <div className={styles.btnExchange}>
                                <button type='button'>Exchange</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div label="Top Gainers">
                2
                </div>
                <div label="Top Losers">
                3
                </div>
            </Tabs>
            <a href='/' className='btn'>More assets</a>
        </div>
    </section>

};
 