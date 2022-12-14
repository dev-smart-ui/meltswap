import React from 'react';
import styles from './price.module.scss'
import {Search} from "../../components/search/search";
import {Tabs} from "../../components/tabs/tabs";
import {Cryptocurrencies} from "../../components/priceItem/dataCryptocurrencies";
import {Lorens} from "../../components/priceItem/dataLorens";
import {PriceItem} from "../../components/priceItem/priceItem";
import {Pagination} from "../../components/pagination/pagination";

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
{Cryptocurrencies.map((item,i)=> <PriceItem key={i} counter={i} item={item}/>)}
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

const tab3=()=> <> 
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
{Lorens.map((item,i)=> <PriceItem key={i} counter={i} item={item}/>)}

</>

const tabList = [
    {  anchor:"Top Cryptocurrencies",  element :tab1   },
    {  anchor:"Top Gainers",  element :tab2   },
    {  anchor:"Top Losers",  element :tab3   },
]


export const Price = () => {

    return <section className={styles.price}>
        <div className='container'>
            <h1 className='title'>Price chart <span>Real-time currencies prices</span> </h1>
            <div className={styles.searchBlock}>
                <Search/>
            </div>
            <Tabs tabList={tabList}/>
            <Pagination length={5} active={1}/>
        </div>
    </section>

};
 