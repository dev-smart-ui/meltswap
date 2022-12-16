import React from 'react';
import styles from './price.module.scss'
import {Tabs} from "../../../components/tabs/tabs";


const tab1=()=> <h2> tab1</h2>
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
            <a href='/' className='btn'>More assets</a>
        </div>
    </section>

};
 