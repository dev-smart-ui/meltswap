import React from 'react';
import styles from './layout.module.scss'
import {Header} from "./header/header";
import {Footer} from "./footer/footer";
import {Outlet} from "react-router-dom";
import {useScrollTop} from "../../hooks/useScrollTop";

export const Layout = (props) => {
    useScrollTop()
    return <div className={styles.layout}>
        <Header/>
        <main className={styles.main}>
                <Outlet/>
        </main>
        <Footer/>
    </div>
};
 