import React, {useState} from 'react';
import styles from './pair.module.scss'
import {exchangeMock} from "../../../components/exchangeForm/mockData";
import {PairSelect} from "./pairSelect/pairSelect";

import filter from '../img/filter.svg';
import transfer from '../img/transfer.svg';

export const PairHeader = () => {
    const [input , setInput] = useState(5);
    const [from , setFrom] = useState(exchangeMock[0]);
    const [to , setTo] = useState(exchangeMock[0]);

    const onSwitch=()=>{
        setTo(from);
        setFrom(to);
    }
    return <div className={styles.pairWrap}>
    <div className={styles.currencyBlock}>
        <PairSelect 
         selectValue={from}
         setSelect={setFrom}
         label={"From"}
         value={input}
         setValue={setInput}
        />
    </div>
    <div className={styles.pairArrow}>
        <button onClick={onSwitch}>
            <img src={transfer} alt="Arrow" />
        </button>
    </div>
    <div className={styles.currencyBlock}>
        <PairSelect 
         selectValue={to}
         setSelect={setTo}
         label={"To"}
         value={input}
         setValue={setInput}
        />
    </div>
    <div className={styles.statusBlock}>
        Status <img src={filter} className={styles.filterIcon} alt="Filter" />
    </div>
    <div className={styles.fixedRate}>
        Fixed Rate <img src={filter} className={styles.filterIcon} alt="Filter" />
    </div>
</div>
    
    
    

};
