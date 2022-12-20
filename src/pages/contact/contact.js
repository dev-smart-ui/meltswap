import React from 'react';
import styles from './contact.module.scss'
import {Title} from "../../components/title";
import {Form} from "./form/form";
import email from "./img/email.svg";
import adress from "./img/adress.svg";
import logo from "./img/contact-logo.svg";

export const Contact = () => {
    const dataContact = window.dataContact;

    return <section className={styles.contact}>
        <Title title={dataContact.title} subtitle={dataContact.subtitle}/>
        <div className={styles.wrap}>
            <div className={styles.left}>
                <Form/>
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
 