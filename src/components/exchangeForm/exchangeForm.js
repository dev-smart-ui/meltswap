import React, {useState} from 'react';
import styles from './exchangeForm.module.scss'
import {CombinedInput} from "./сombinedInput/combinedInput";
import {exchangeMock} from "./mockData";
import switchIcon from "./switch.svg";
import time from "./time.svg"



export const ExchangeForm = () => {
        const [input , setInput] = useState(5);
        const [from , setFrom] = useState(exchangeMock[0]);
        const [to , setTo] = useState(exchangeMock[2]);

        const currency = from.currency/to.currency;
        const onSwitch=()=>{
            setTo(from);
            setFrom(to);
        }

    return <div   className={styles.form}>
        <CombinedInput
            selectValue={from}
            setSelect={setFrom}
            label={"You send"}
            value={input}
            setValue={setInput}/>

        <div className={styles.wrapper}>
            <div className={styles.info}>
                <span>No extra fees</span>
                <span>Estimated rate: 1 BTC ~ 16.065174 ETH  <img src={time} className={styles.time} alt="time"/>2:00</span>
            </div>
            <button onClick={onSwitch} className={styles.switch}>
                <img src={switchIcon} alt="switchIcon"/>
            </button>
        </div>    
        <CombinedInput
            selectValue={  to }
            setSelect={ setTo }
            label={"You Get"}
            value={input*currency}  />

        <button type='button' className={"btn " + [styles.btn]}>Exchange</button>
    </div>
};
