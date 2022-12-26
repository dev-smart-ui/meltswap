import React from 'react';
import styles from './status.module.scss'
import filter from './img/filter.svg';
import {Search} from "../../components/search/search";
import {SearchStatus} from "../../components/searchStatus/searchStatus";

import {Tabs} from "../../components/tabs/tabs";
import {DataCoin} from "./coins/dataCoin";
import {ConstItem} from "./coins/coinItem";

import {DataPair} from "./pair/pairData/dataPair";
import {PairHeader} from "./pair/pairHeader";
import {PairItem} from "./pair/pairItem";
import {Pagination} from "../../components/pagination/pagination";


const tab1=()=> <div>
<div className={styles.tabHeader}>
    <div className={styles.currencyBlock}>
        Currency
    </div>
    <div>
        Status <img src={filter} className={styles.filterIcon} alt="Filter" />
    </div>
    <div>
        Exchange From <img src={filter} className={styles.filterIcon} alt="Filter" />
    </div>
    <div>
        Exchange To <img src={filter} className={styles.filterIcon} alt="Filter" />
    </div>
    <div>
        Fixed Rate <img src={filter} className={styles.filterIcon} alt="Filter" />
    </div>
</div>
{DataCoin.map((item,i)=> <ConstItem key={i} item={item}/>)}
</div>

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
                <Pagination length={5} active={4}/>
            </div>
        </section>
    </>
};
 