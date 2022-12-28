import Select from "react-select";
import {exchangeMock} from "../mockData";
import  styles from "./сombinedInput.module.scss"

export const CombinedInput = ( {label ,value , setValue , setSelect , selectValue} )=>{


    const handleChange = e => {
        setSelect(e);
    }
    const changeHandler = (e)=>{
        if(!setValue) return;
        setValue(e.target.value)
    }
    return <div className={styles.wrap}>
        <label>
           <span className={styles.label}>
                 {label}
           </span>
            <input  className={styles.input} disabled={!setValue} value={value||0} onChange={changeHandler} type="number"/>

        </label>
            <Select
                placeholder="Select Option"
                value={selectValue}
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

    </div>
}