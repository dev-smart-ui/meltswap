import React from 'react';
import defi from './img/DeFi-based.svg';
import platform from './img/Non-custodial-platform.svg';
import limitless from './img/Limitless-exchange.svg';

import styles from './advantages.module.scss'

export const Advantages = () => {

    return <section className={styles.advantages}>
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
};
 