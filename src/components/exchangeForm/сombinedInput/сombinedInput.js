import Select from "react-select";
import {useState} from "react";
import {exchangeMock} from "../mockData";
import  styles from "./сombinedInput.module.scss"

export const CombinedInput = ( {label ,value , setValue } )=>{


    const [selectedOption, setSelectedOption] = useState(exchangeMock[0]);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }
    const changeHandler = (e)=>{
        if(!setValue) return;
        setValue(e.target.value)
    }
    return <div>
        <label  >
           <span>
          {label}
           </span>
            <input  disabled={!setValue} value={value||0} onChange={changeHandler} type="number"/>
            <Select
                placeholder="Select Option"
                value={selectedOption}
                options={exchangeMock}
                onChange={handleChange}
                getOptionLabel={e => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img className={styles.icon + "her"}  width={40} height={40} src={e.icon} alt=""/>
                        <span style={{ marginLeft: 5 }}>{e.name}</span>
                    </div>
                )}
            />
        </label>
    </div>
}