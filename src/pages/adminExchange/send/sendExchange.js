import React from 'react';
import styles from './sendExchange.module.scss'
import qrCode from '../img/qrCode.svg'
import copy from "../img/copy.svg";

export const SendExchange = () => {
    return <section className={styles.exchange}>
        <div className={styles.cardBlock}>
            <div className={styles.panel}>
                <p className={styles.clarification}>Please send the funds you would like to exchange</p>
                <div className={styles.card}>
                    <div className={styles.info}>
                        <div className={styles.infoBlock}>
                            <span className={styles.title}>Amount</span>
                            <div className={styles.data}>0.1 BTC</div>
                        </div>
                        <div className={styles.infoBlock}>
                            <span className={styles.title}>To this address</span>
                            <div className={styles.data}>3EZFfDDevkzEJ8HN4mBG4CrN8oFU</div>
                        </div>
                    </div>
                    <div className={styles.qrCod}>
                        <img src={qrCode} alt="QR-code" />
                    </div>
                </div>
                <ul className={styles.stage}>
                    <li className={styles.active}>
                        Awaiting <br/> deposit
                    </li>
                    <li>
                        Confirming
                    </li>
                    <li>
                        Exchanging
                    </li>
                    <li>
                        Sending <br/> to you
                    </li>
                </ul>
                <div className={styles.additionally}>
                    <span className={styles.title}>Amount</span>
                    <div className={styles.text}>~ 3.0884985 ETH</div>
                </div>
                <div className={styles.additionally}>
                    <span className={styles.title}>Recipient Wallet</span>
                    <div className={styles.text}>0x40C266A51ceD55cAF390cb6E00B5b38C5736792</div>
                </div>
            </div>

            <div className={styles.stageBlock}>
                <ul className={styles.list}>
                    <li className={styles.active}>Enter Exchange Details</li>
                    <li className={styles.active}>Complete the Exchange</li>
                    <li className={styles.active}>Receive Your Funds</li>
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