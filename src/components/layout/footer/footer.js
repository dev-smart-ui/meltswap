import React from 'react';
import styles from './footer.module.scss'
import logo from "media/logo.svg"
import {Link} from "react-router-dom";
import {ROUTES} from "../../../constanst/routes";
import {LINKS} from "../../../constanst/links";


const navList =  [
    ROUTES.how,
    ROUTES.status ,
    ROUTES.faq ,
    ROUTES.about ,
    ROUTES.contact,
    ROUTES.price ]

const companyNav =  [
    ROUTES.about ,
    ROUTES.how,
    ROUTES.price,
    ROUTES.status
 ]
const supportNav =[
    ROUTES.faq,
    ROUTES.contact
]

const privacy =[
    ROUTES.policy,
    ROUTES.terms,
    ROUTES.aml
]

const socialNetwork =[
    LINKS.facebook,
    LINKS.twitter,
    LINKS.instagram,
    LINKS.linkedIn,
    LINKS.github,
    LINKS.discord,
    LINKS.reddit
]

export const Footer = ({onClose}) => {

    return <footer className={styles.footer}>
        <div className='container'>
            <div className={styles.top}>
                <figure className={styles.logo}>
                    <Link onClick={onClose} to={ROUTES.home.path}>
                        <img src={logo} alt="Melt swap logo"/>
                    </Link>
                </figure>
                <div className={styles.menuPc}>
                    <ul className={styles.menuList}>
                        {navList.map((item, i)=>{
                            return <li className={styles.item} key ={i}>
                                <Link onClick={onClose} to={item.path}>
                                    {item.linkText}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
                <div className={styles.menuMobile}>
                    <div>
                        <h3 className={styles.title}>Company</h3>
                        <ul>
                            {companyNav.map((item, i)=>{
                                return <li className={styles.item} key ={i}>
                                    <Link onClick={onClose} to={item.path}>
                                        {item.linkText}
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className={styles.title}>Support</h3>
                        <ul>
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
                        return <li key ={i}>
                            <a href={item.path} target="blank">
                                <img src={item.icon} alt={item.linkText} />
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </footer>
};
 