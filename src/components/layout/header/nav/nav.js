import React from 'react';
import styles from './nav.module.scss'
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../constanst/routes";
import classNames from "classnames";
import {LangSelect} from "../langSelect/langSelect";

const navList =  [
    ROUTES.how,
    ROUTES.status ,
    ROUTES.faq ,
    ROUTES.about ,
    ROUTES.contact ]
export const Nav = ({isOpen ,onClose}) => {
    const heightAnimation ={
        maxHeight:isOpen? navList.length*60+100:0
    }
    return <nav style={heightAnimation} className={classNames(styles.nav , {[styles.active]:isOpen}) }>

            <ul className={styles.list}>
                {navList.map((item, i)=>{
                    return <li className={styles.item} key ={i}>
                        <Link onClick={onClose} to={item.path}>
                            {item.linkText}
                        </Link>
                    </li>
                })}
                  <LangSelect/>
            </ul>

    </nav>
};
 