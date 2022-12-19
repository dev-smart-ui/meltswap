import React from 'react';
import styles from './price.module.scss'
import {Title} from "../../components/title";
import bitcoin from './img/bitcoin.svg';
import search from './img/search.svg';
import {Tabs} from "../../components/tabs/tabs";


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
const tab2=()=> { return <div>
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
        <div className={styles.blank}>Currency not found</div>
    </div>
    </div>
};  

const tab3=()=> <h2> tab3</h2>

const tabList = [
    {  anchor:"Top Cryptocurrencies",  element :tab1   },
    {  anchor:"Top Gainers",  element :tab2   },
    {  anchor:"Top Losers",  element :tab3   },
]


export const Price = () => {
    const dataPrice = window.dataPrice;
    return <section className={styles.price}>
        <div className='container'>
            <Title title={dataPrice.title} subtitle={dataPrice.subtitle}/>
            <form className={styles.search}>
                <button type="submit" className={styles.submit}><img src={search} alt="Search" /></button>
                <input type="text" className={styles.field} placeholder="Search the coin"/>               
            </form>
            <Tabs tabList={tabList}/>
        </div>
    </section>

};
 