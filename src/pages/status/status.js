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
import {Title} from "../../components/title";
import {dataStatus} from "./data";


const tab1=()=> <div className={styles.coinWrap}>
<div className={styles.tabHeader}>
    <div className={styles.currencyBlock}>
        Currency
    </div>
    <div className={styles.statusBlock}>
        Status <img src={filter} className={styles.filterIcon} alt="Filter" />
    </div>
    <div className={styles.exchangeFrom}>
        Exchange From <img src={filter} className={styles.filterIcon} alt="Filter" />
    </div>
    <div className={styles.exchangeTo}>
        Exchange To <img src={filter} className={styles.filterIcon} alt="Filter" />
    </div>
    <div className={styles.fixedRate}>
        Fixed Rate <img src={filter} className={styles.filterIcon} alt="Filter" />
    </div>
</div>
{DataCoin.map((item,i)=> <ConstItem key={i} item={item}/>)}
</div>

const tab2=()=> <div className={styles.pair}>
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
               <Title className={styles.title} title={dataStatus.title}/>
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
                
                <Tabs tabList={tabList}/>
            </div>
        </section>
    </>
};
 