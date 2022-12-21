import React from 'react';
import styles from './about.module.scss'
import {Title} from "../../components/title";
import {ItemBlock} from "./itemBlock/itemBlock";
import {dataAbout} from "./data";

export const About = () => {

    return <div className={styles.about}>
        <div className="container">
            <Title title={dataAbout.title}/>

            { dataAbout.card.map((item, id) => {
                return <ItemBlock key={id} props={item}/>
            })}
        </div>
    </div>
};
 