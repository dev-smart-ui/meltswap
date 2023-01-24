import React from 'react';
import styles from './price.module.scss'
import {Tabs} from "../../../components/tabs/tabs";
import {TabCryptocurrencies} from "../../../components/table/tableCryptocurrencies";
import {TabGainers} from "../../../components/table/tableGainers";
import {TabLorens} from "../../../components/table/tableLorens";

const Tab1=()=> <>
    <TabCryptocurrencies/>
</>

const Tab2=()=> <>
    <TabGainers/>
</>

const Tab3=()=> <> 
    <TabLorens/>
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
 