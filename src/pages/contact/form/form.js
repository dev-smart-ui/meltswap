import React from 'react';
import styles from './form.module.scss'

export const Form = () => {
    return <form>
        <div className={styles.input}>
            <label>Full Name</label>
            <input type='text' name='name'  placeholder="Your name" className={styles.field} ></input>
        </div>
        <div className={styles.input}>
            <label>Email</label>
            <input type='text' name='email' placeholder="yourname@company.com" className={styles.field} ></input>
        </div>
        <div className={styles.input}>
            <label>How can we help?</label>
            <textarea type='text' name='message' placeholder="Your message"  className={styles.field} ></textarea>
        </div>
        
        <button type='submit' className={"button " + styles.button}>Submit</button>
    </form>
};
 