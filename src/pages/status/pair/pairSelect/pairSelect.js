import Select from "react-select";
import {exchangeMock} from "../../../../components/exchangeForm/mockData";
import  styles from "../pair.module.scss"

export const PairSelect = ( {label, setSelect } )=>{
    const handleChange = e => {
        setSelect(e);
    }

    return <Select
    placeholder={label}
    className={styles.select}
    classNamePrefix={ "prefix"}
    options={exchangeMock}
    onChange={handleChange}
    getOptionLabel={e => (
        <div className={styles.option} >
            <img className={styles.icon }  width={40} height={40} src={e.icon} alt=""/>
            <span style={{ marginLeft: 5 }}>{e.value}</span>
        </div>
    )}
/>
}