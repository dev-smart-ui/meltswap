import React from 'react';
import styles from './header.module.scss'

import logo from "media/logo.svg"
import {Burger} from "../burger/burger";
import {useOpen} from "../../../hooks/useOpen";
import {Nav} from "../nav/nav";



export const Header = () => {
    const {isOpen , onToggle} = useOpen();

        return <header className={styles.header}>
            <figure className={styles.logo}>
                <img src={logo} alt="Melt swap logo"/>
            </figure>
            <Nav isOpen={isOpen}  />

            <Burger isOpen={isOpen} onToggle={onToggle}/>
    </header>
};
 