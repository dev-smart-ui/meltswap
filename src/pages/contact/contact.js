import React from 'react';
import styles from './contact.module.scss'
import {Title} from "../../components/title";
import email from "./img/email.svg";
import adress from "./img/adress.svg";
import logo from "./img/contact-logo.svg";
import { useState } from 'react';

export const Contact = () => {
    const dataContact = window.dataContact;

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
    }

    return <section className={styles.contact}>
        <Title title={dataContact.title} subtitle={dataContact.subtitle}/>
        <div className={styles.wrap}>
            <div className={styles.left}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.input}>
                        <label>Full Name</label>
                        <input type='text' name='name' value={inputs.name || ""} placeholder="Your name" className={styles.field} onChange={handleChange}></input>
                    </div>
                    <div className={styles.input}>
                        <label>Email</label>
                        <input type='text' name='email' value={inputs.email || ""} placeholder="yourname@company.com" className={styles.field} onChange={handleChange}></input>
                    </div>
                    <div className={styles.input}>
                        <label>How can we help?</label>
                        <textarea type='text' name='message' value={inputs.message || ""} placeholder="Your message"  className={styles.field} onChange={handleChange}></textarea>
                    </div>
                    
                    <button type='submit' onChange={handleSubmit} className="btn">Submit</button>
                </form>
            </div>
            <div className={styles.right}>
                <div className={styles.block}>
                    <div className={styles.icon}>
                        <img src={email} alt="Email" />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoTitle}>
                            Email
                        </div>
                        <a href='mailto:support@meltswap.com' className={styles.infoEmail}>
                            support@meltswap.com
                        </a>
                    </div>
                </div>
                <div className={styles.block}>
                    <diiv className={styles.icon}>
                        <img src={adress} alt="Adress" />
                    </diiv>
                    <diiv className={styles.info}>
                        <div className={styles.infoTitle}>
                            Address
                        </div>
                        <div className={styles.infoText}>
                            Spaces V&A Waterfront <br/>
                            Dock Road Junction <br/>
                            Cnr of Dock Stanley Road Waterfront <br/>
                            Cape town 8001
                        </div>
                    </diiv>
                </div>
                <img src={logo} alt="Logo" className={styles.img} />
            </div>
        </div>
    </section>
};
 