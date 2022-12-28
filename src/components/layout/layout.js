import React from 'react';
import styles from './layout.module.scss'
import {Header} from "./header/header";
import {Footer} from "./footer/footer";
import {Outlet} from "react-router-dom";
import {ScrollTop} from "../../components/scrollToTop";

export const Layout = (props) => {
    return <div className={styles.layout}>
        <ScrollTop/>
        <Header/>
        <main className={styles.main}>
                <Outlet/>
        </main>
        <Footer/>
    </div>
};
 