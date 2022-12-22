import React, { useRef} from 'react';
import styles from './header.module.scss'

import logo from "media/logo.svg"
import {Burger} from "../burger/burger";
import {useOpen} from "../../../hooks/useOpen";
import {Nav} from "./nav/nav";
import {Link, useLocation} from "react-router-dom";
import {ROUTES} from "../../../constanst/routes";
import classNames from "classnames";
import {useOnClickOutside} from "../../../hooks/useOnClickOutside";
import {useNoScroll} from "../../../hooks/useNoScroll";




export const Header = () => {
    const {isOpen , onToggle , onClose} = useOpen();
    const headerRef= useRef();
    useOnClickOutside(headerRef, onClose)
    useNoScroll(isOpen)
    const location = useLocation()
    const isHome = location.pathname===ROUTES.home.path;
        return <header ref={headerRef}  className={classNames( {[styles.isHome]:isHome} ,styles.header) }>
                <div className={styles.wrapper}>
                    <figure className={styles.logo}>
                        <Link onClick={onClose} to={ROUTES.home.path}>
                            <img src={logo} alt="Melt swap logo"/>
                        </Link>
                    </figure>
                    <Nav isOpen={isOpen } onClose={onClose}  />

                    <Burger isOpen={isOpen} onToggle={onToggle}/>
                </div>
        </header>
};
 