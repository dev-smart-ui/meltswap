import React, {useState} from 'react';
import styles from './exchangeForm.module.scss'
import {CombinedInput} from "./сombinedInput/сombinedInput";
import {exchangeMock} from "./mockData";





export const ExchangeForm = () => {
        const [send , setSend] = useState();
        const [sendSelected , setSendSelected] = useState(exchangeMock[0]);
        const [getSelected , setGetSelected] = useState(exchangeMock[2]);

        const currency = 2;

    return <div   className={styles.form}>
            <CombinedInput label={" you send"} value={send} setValue={setSend}/>
            <CombinedInput label={" you get"} value={send*currency}  />
    </div>
};
