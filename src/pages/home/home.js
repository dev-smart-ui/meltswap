import React from 'react';
import coinranking from '../../media/coinranking-logo.svg';
import exchange from '../../media/Exchange.svg';
import cryptovirally from '../../media/cryptovirally-logo.svg';
import pixeltrue from '../../media/pixeltrue-logo.svg';
import defi from '../../media/DeFi-based.svg';
import platform from '../../media/Non-custodial-platform.svg';
import limitless from '../../media/Limitless-exchange.svg';
import phone from '../../media/phones.svg';

import styles from './home.module.scss'

export const Home = () => {

    return <><section className={styles.banner}>
        <div className={styles.content}>
            <h1> <span>Trusted</span> & <span>secure</span> platform for crypto exchange </h1>
            <p>Get started with the easiest and most secure platform to exchange cryptocurrencies</p>
        </div>
        <div className={styles.img}>
            <img src={exchange} alt='Exchange' />
        </div>
    </section>
    <section className={styles.company}>
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
    <section className={styles.how}>
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
    <section className={styles.advantages}>
        <div className='container'>
            <div className={styles.block}>
                <div>
                    <img src={limitless} alt="Limitless-exchange" />
                    <h3>Limitless Exchange</h3>
                    <p>Begin today with as little as $2 with no limits on the number of cryptocurrencies you can exchange. Begin exchanging cryptocurrencies today through Meltswap's limitless exchange! </p>
                </div>
                <div>
                    <img src={defi} alt="DeFi-based" />
                    <h3>DeFi-based</h3>
                    <p>Meltswap offers its users access to both Uniswap and Pancakeswap. Access decentralized liquidity through the Meltswap platform today!</p>
                </div>
                <div>
                    <img src={platform} alt="Non-custodial-platform"/>
                    <h3>Non-custodial platform</h3>
                    <p>To maintain your right to privacy and guarantee the security of your assets, Meltswap remains a non-custodial exchange service. We do NOT hold your cryptocurrencies on your behalf.</p>
                </div>
            </div>
            <a href="/" className='button'>Learn MORE</a>
        </div>
    </section>
    <section className={styles.application}>
        <div className='container'>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <h2>Mobile management application </h2>
                    <a href='/' className='button'>Coming soon</a>
                </div>
                <div className={styles.image}>
                    <img src={phone} alt="phone" />
                </div>
            </div>
        </div>
    </section>

    </>
};
 