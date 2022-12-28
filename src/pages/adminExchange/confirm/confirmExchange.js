import React from 'react';
import styles from './confirmExchange.module.scss'
import classNames from "classnames";
import copy from "../img/copy.svg";


export const ConfirmExchange = () => {
    return <section className={styles.exchange}>
        <div className={styles.cardBlock}>
            <div className={styles.panel}>
                <p className={styles.clarification}>Please confirm the details of your exchange</p>
                <div className={styles.block}>
                    <span className={styles.name}>You send</span>
                    <div className={styles.number}>4 ETH</div>
                    <span className={styles.text}>1 ETH = 0.024740275 BTC</span>
                </div>
                <div className={styles.block}>
                    <span className={styles.name}>You get</span>
                    <div className={styles.number}>~ 0.0989611 BTC</div>
                    <span className={styles.text}>1BoatSLRHtKNngkdXEeobR76b53LETtpyT</span>
                </div>
                <div className={styles.block}>
                    <span className={styles.name}>Estimated Arrival</span>
                    <span className={styles.text}>2-40 minutes</span>
                </div>
                <div className={styles.wrapper}>
                    <button type="button" className={classNames("button ", styles.buttonConfirm)}>confirm</button>
                    <button type="button" className={styles.back}>Back</button>
                </div>
                <div className={styles.checkbox}>
                    <input type="checkbox" className={styles.checkboxInput} id="happy" name="happy" value="yes"/>
                    <label htmlFor="happy">I've read and agree to the Meltswap <a href="/terms">Terms of Use</a> and <a href="/policy">Privacy Policy</a></label>

                </div>
            </div>
            <div className={styles.stage}>
                <ul className={styles.list}>
                    <li className={styles.active}>Enter Exchange Details</li>
                    <li className={styles.active}>Complete the Exchange</li>
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
