import React, {useState} from 'react';
import Select from "react-select";
import styles from "./langSelect.module.scss"

export const LangSelect = () => {
    const options = [{value: 'EN/USD', label: 'EN/USD'}, {value: 'UK/GBP', label: 'UK/GBP'}, {
        value: 'FR/EUR',
        label: 'FR/EUR'
    }]
    const [language, setLanguage] = useState(options[0]);
    const changeLangHandler = (l) => {
        setLanguage(l)
    }

    return <li className={styles.langSelect}>
        <Select
            className="ls"
            classNamePrefix="ls-prefix"
            value={language}
            onChange={changeLangHandler}
            options={options}/>
    </li>
};
 