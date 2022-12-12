import React from 'react';
import styles from './header.module.scss'
import {ROUTES} from "../../../constanst/routes";
import {Link} from "react-router-dom";
import logo from "media/logo.svg"



export const Header = () => {

    const navList =  [
        ROUTES.how,
        ROUTES.status ,
        ROUTES.faq ,
        ROUTES.about ,
        ROUTES.contact ]

        return <header className={styles.header}>
            <figure>
                <img src={logo} alt="Melt swap logo"/>
            </figure>
            <nav>
                <ul>
                    {navList.map((item, i)=>{
                        return <li key ={i}>
                            <Link to={item.path}>
                                {item.linkText}
                            </Link>
                        </li>
                    })}
                </ul>
            </nav>
    </header>
};
 