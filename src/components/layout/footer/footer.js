import React from 'react';
import styles from './footer.module.scss'
import logo from "media/logo.svg"
import {Link} from "react-router-dom";
import {Nav} from "../header/nav/nav";
import {ROUTES} from "../../../constanst/routes";
const companyNav =  [
    ROUTES.how,
    ROUTES.status ,
    ROUTES.about ,
 ]
const supportNav =[
    ROUTES.contact,
    ROUTES.faq
]

const privacy =[
    ROUTES.policy,
    ROUTES.terms,
    ROUTES.aml
]

const socialNetwork =[
    ROUTES.facebook,
    ROUTES.twitter,
    ROUTES.instagram,
    ROUTES.linkedIn,
    ROUTES.github,
    ROUTES.discord,
    ROUTES.reddit
]

export const Footer = ({isOpen ,onClose}) => {

    return <footer className={styles.footer}>
        <div className='container'>
            <div className={styles.top}>
                <figure className={styles.logo}>
                    <Link onClick={onClose} to={ROUTES.home.path}>
                        <img src={logo} alt="Melt swap logo"/>
                    </Link>
                </figure>
                <div className={styles.menuPc}>
                    <Nav/>
                </div>
                <div className={styles.menuMobile}>
                    <div className={styles.block}>
                        <h3 className={styles.title}>Company</h3>
                        <ul className={styles.list}>
                            {companyNav.map((item, i)=>{
                                return <li className={styles.item} key ={i}>
                                    <Link onClick={onClose} to={item.path}>
                                        {item.linkText}
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </div>
                    
                    <div className={styles.block}>
                        <h3 className={styles.title}>Support</h3>
                        <ul className={styles.list}>
                            {supportNav.map((item, i)=>{
                                return <li className={styles.item} key ={i}>
                                    <Link onClick={onClose} to={item.path}>
                                        {item.linkText}
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.wrap}>
                    <p>© Copyright 2022 | All Rights Reserved</p>
                    <ul className={styles.privacy}>
                        {privacy.map((item, i)=>{
                            return <li className={styles.privacyItem} key ={i}>
                                <Link onClick={onClose} to={item.path}>
                                    {item.linkText}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
                
                <ul className={styles.socialNetwork}>
                    {socialNetwork.map((item, i)=>{
                        return <li className={styles.socialItem} key ={i}>
                            <Link onClick={onClose} to={item.path}>
                                <img src={item.icon} alt={item.linkText} />
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </footer>
};
 