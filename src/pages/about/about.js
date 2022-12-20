import React from 'react';
import styles from './about.module.scss'
import {Title} from "../../components/title";
import {ItemBlock} from "./itemBlock/itemBlock";

export const About = () => {
    const dataAbout = window.dataAbout;

    return <div className={styles.about}>
        <div className="container">
            <Title title={dataAbout.title} subtitle={dataAbout.subtitle}/>

            { dataAbout.card.map((item, id) => {
                return <ItemBlock key={id} props={item}/>
            })}
        </div>
    </div>
};
 