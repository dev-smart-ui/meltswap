import React from 'react';
import styles from './status.module.scss'
import {Search} from "../../components/search/search";
import {SearchStatus} from "../../components/searchStatus/searchStatus";

import {Tabs} from "../../components/tabs/tabs";
import {TabFromTo} from "../../components/table/tableFromTo";

import {DataPair} from "./pair/pairData/dataPair";
import {PairHeader} from "./pair/pairHeader";
import {PairItem} from "./pair/pairItem";


const tab1=()=> <TabFromTo/>

const tab2=()=> <div>
<PairHeader/>
{DataPair.map((item,i)=> <PairItem key={i} item={item}/>)}
</div>

const tabList = [
    {  anchor:"Coin Status",  element :tab1   },
    {  anchor:"Pair Status",  element :tab2   },
]

export const Status = () => {
    return <> 
        <section className={styles.main}>
            <div className='container'>
               <h1 className={styles.title}>Status Page</h1>
               <SearchStatus/>
            </div>
        </section>
        <section className={styles.available}>
            <div className='container'>
                <div className={styles.wrap}>
                    <h2 className={styles.availableTitle}>Available Coins</h2>
                    <div className={styles.wrapper}>
                        <Search/>
                    </div>
                </div>
                
                <Tabs hideArrow={0} tabClass={styles.tabButton} tabList={tabList}/>
            </div>
        </section>
    </>
};
 