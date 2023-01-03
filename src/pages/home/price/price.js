import React from 'react';
import styles from './price.module.scss'
import {Tabs} from "../../../components/tabs/tabs";
import {Cryptocurrencies} from "../../../components/priceItem/dataCryptocurrencies";
import {Gainers} from "../../../components/priceItem/dataGainers";
import {Lorens} from "../../../components/priceItem/dataLorens";
import {PriceItem} from "../../../components/priceItem/priceItem";




const Tab1=()=> <>
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
    {Cryptocurrencies.slice(0,10).map((item,i)=> <PriceItem key={i} counter={i} item={item}/>)}
</>

const Tab2=()=> <>
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
    {Gainers.slice(0,10).map((item,i)=> <PriceItem key={i} counter={i} item={item}/>)}
</>

const Tab3=()=> <> 
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
{Lorens.slice(0,10).map((item,i)=> <PriceItem key={i} counter={i} item={item}/>)}

</>

const tabList = [
    {  anchor:"Top Cryptocurrencies",  element :Tab1   },
    {  anchor:"Top Gainers",  element :Tab2   },
    {  anchor:"Top Losers",  element :Tab3   },
]

export const Price = () => {
    return <section className={styles.price}>
        <div className='container'>
            <h2>Price charts</h2>
            <Tabs hideArrow={560} tabList={tabList}/>
            <a href='/price' className='button'>More assets</a>
        </div>
    </section>
};
 