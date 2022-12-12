import React from 'react';
import styles from './nav.module.scss'
import {Link} from "react-router-dom";
import {ROUTES} from "../../../constanst/routes";
import classNames from "classnames";

const navList =  [
    ROUTES.how,
    ROUTES.status ,
    ROUTES.faq ,
    ROUTES.about ,
    ROUTES.contact ]
export const Nav = ({isOpen}) => {

    return <nav className={classNames(styles.nav , {[styles.active]:isOpen}) }>

            <ul className={styles.list}>
                {navList.map((item, i)=>{
                    return <li className={styles.item} key ={i}>
                        <Link  to={item.path}>
                            {item.linkText}
                        </Link>
                    </li>
                })}
            </ul>

    </nav>
};
 