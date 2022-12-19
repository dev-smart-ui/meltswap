import React from 'react';
import styles from './price.module.scss'
import bitcoin from './img/bitcoin.svg'
import {Tabs} from "../../../components/tabs/tabs";
import {DataPrices} from "./data";
import {PriceItem} from "./priceItem/priceItem";




const tab1=()=> { return <div>
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
};
const tab2=()=> <h2> tab2</h2>
const tab3=()=> <h2> tab3</h2>

const tabList = [
    {  anchor:"Top Cryptocurrencies",  element :tab1   },
    {  anchor:"Top Gainers",  element :tab2   },
    {  anchor:"Top Losers",  element :tab3   },
]

export const Price = () => {
    return <section className={styles.price}>
        <div className='container'>
            <h2 className={styles.title}>Price charts</h2>
            <Tabs tabList={tabList}/>
            {DataPrices.map((item,i)=> <PriceItem key={i} item={item}/>)}
            <a href='/' className='btn'>More assets</a>
        </div>
    </section>

};
 