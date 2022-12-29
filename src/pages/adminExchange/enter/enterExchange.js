import React from 'react';
import styles from './enterExchange.module.scss'
import {ExchangeSelect} from "../../../components/exchangeSelect/exchangeSelect";
import classNames from "classnames";
import copy from "../img/copy.svg";

export const EnterExchange = () => {
    return <section className={styles.exchange}>
        <div className={styles.cardBlock}>
            <div className={styles.panel}>
                <p className={styles.clarification}>Please enter the details of your exchange</p>
                <ExchangeSelect/>
                <div>
                    <label className={styles.walletText}>
                        Recipient Wallet
                    </label>
                    <input type="text" placeholder="Enter the payout address" className={styles.walletInput} />
                    <a href="/confirm" className={classNames(styles.button , " button") }> Next</a>
                </div>
            </div>
            <div className={styles.stage}>
                <ul className={styles.list}>
                    <li className={styles.active}>Enter Exchange Details</li>
                    <li>Complete the Exchange</li>
                    <li>Receive Your Funds</li>
                </ul>
                <div className={styles.transaction}>
                    <span>Transaction ID</span>
                    <div className={styles.transactionWrap}>
                        <div className={styles.id}>
                            11234c78af1230
                        </div>
                        <button type="button"><img src={copy} alt="Copy" /></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
};
