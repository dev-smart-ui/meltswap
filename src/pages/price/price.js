import React from 'react';
import styles from './price.module.scss'
import {Title} from "../../components/title";
import {Search} from "../../components/search/search";
import {Tabs} from "../../components/tabs/tabs";
import {DataPrices} from "../../components/priceItem/data";
import {PriceItem} from "../../components/priceItem/priceItem";

const tab1=()=> <>
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
{DataPrices.map((item,i)=> <PriceItem key={i} item={item}/>)}
</>

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
            <div className={styles.searchBlock}>
                <Search/>
            </div>
            <Tabs tabList={tabList}/>
        </div>
    </section>

};
 