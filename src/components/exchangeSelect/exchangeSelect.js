import React, {useState} from 'react';
import styles from './exchangeSelect.module.scss'
import {CombinedInput} from "./сombinedInput/combinedInput";
import {exchangeMock} from "./mockData";
import switchIcon from "./switch.svg";
import time from "./time.svg"



export const ExchangeSelect = () => {
        const [input , setInput] = useState(5);
        const [from , setFrom] = useState(exchangeMock[0]);
        const [to , setTo] = useState(exchangeMock[2]);

        const currency = from.currency/to.currency;
        const onSwitch=()=>{
            setTo(from);
            setFrom(to);
        }

    return <div>
        <CombinedInput
            selectValue={from}
            setSelect={setFrom}
            label={"You send"}
            value={input}
            setValue={setInput}/>
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div>No extra fees</div>
                <div> <span>Estimated rate: </span> 1 BTC ~ 16.065174 ETH  <img src={time} className={styles.time} alt="time"/>2:00</div>
            </div>
            <button onClick={onSwitch} className={styles.switch}>
                <img src={switchIcon} alt="switchIcon"/>
            </button>
        </div>    
        <div className={styles.wrapselect}>
            <CombinedInput
                selectValue={  to }
                setSelect={ setTo }
                label={"You Get"}
                value={input*currency}  />
        </div>
    </div>
};
