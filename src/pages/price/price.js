
import styles from './price.module.scss'
import {Search} from "../../components/search/search";
import {Tabs} from "../../components/tabs/tabs";
import {TabCryptocurrencies} from "../../components/table/tableCryptocurrencies";
import {TabGainers} from "../../components/table/tableGainers";
import {TabLorens} from "../../components/table/tableLorens";

const tab1=()=> <>
    <TabCryptocurrencies pagination={true}/>
</>

const tab2=()=> <>
    <TabGainers pagination={true}/>
</>

const tab3=()=> <> 
    <TabLorens pagination={true}/>
</>

const tabList = [
    {  anchor:"Top Cryptocurrencies",  element :tab1},
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
            <style jsx="true">{`
              @media (max-width: 768px) {
                body .ag-header  {
                    display: none;
                }
              }
            `}
            </style>
            <Tabs tabList={tabList}/>
        </div>
    </section>
};
 