import React from 'react';
import styles from './layout.module.scss'
import {Header} from "./header/header";
import {Footer} from "./footer/footer";
import {Outlet} from "react-router-dom";

export const Layout = (props) => {
    return <div className={styles.layout}>
        <Header/>
        <main className={styles.main}>
                <Outlet/>
        </main>
        <Footer/>
    </div>
};
 