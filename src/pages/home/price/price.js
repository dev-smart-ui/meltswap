import React from 'react';
import styles from './price.module.scss'
import {Tabs} from "../../../components/tabs/tabs";
import {DataPrices} from "../../../components/priceItem/data";
import {PriceItem} from "../../../components/priceItem/priceItem";




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
            
            <a href='/' className='button'>More assets</a>
        </div>
    </section>

};
 