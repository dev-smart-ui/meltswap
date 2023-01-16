import {useState, useEffect, useMemo} from 'react';
// Подключаем датагрид
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {Table} from "../../components/table/table";
import {AgGridReact} from 'ag-grid-react';

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

    
const [rowData, setRowData] = useState();
// Создаем список колонок ( последняя наша кнопка, которая выводится через компонент Table )
const [columnDefs] = useState([
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' }, 
    { cellRenderer: Table},
]);

// Подключаем данные с api 
useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  }, []);

// Подключаем филтрацию
  const defaultColDef = useMemo( ()=> ( {
    sortable: true, 
    filter: true      
}), []);



    return <section className={styles.price}>
        <div className='container'>
            <h1 className='title'>Price chart <span>Real-time currencies prices</span> </h1>
            <div className={styles.searchBlock}>
                <Search/>
            </div>

            <div className="ag-theme-alpine" style={{height: 200}}>
                {/* Выводим нашу таблицу */}
                <AgGridReact 
                    pagination={true}
                    animateRows={true} 
                    defaultColDef={defaultColDef} 
                    rowData={rowData} 
                    columnDefs={columnDefs}        
                />
            </div>

            <Tabs tabList={tabList}/>
            <Pagination length={5} active={1}/>
        </div>
    </section>

};
 