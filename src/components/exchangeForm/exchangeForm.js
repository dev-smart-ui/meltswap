import React, {useState} from 'react';
import styles from './exchangeForm.module.scss'
import {CombinedInput} from "./сombinedInput/combinedInput";
import {exchangeMock} from "./mockData";
import switchIcon from "./switch.svg"



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
                label={" you send"}
                value={input}
                setValue={setInput}/>

        <button onClick={onSwitch} className={styles.switch}> switch currency
            <img src={switchIcon} alt="switchIcon"/>
        </button>
            <CombinedInput
                selectValue={  to }
                setSelect={ setTo }
                label={" you get"}
                value={input*currency}  />
    </div>
};
