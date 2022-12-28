import React from 'react';
import {dataAdvantages} from "./data";
import styles from './advantages.module.scss'
import {AdvantageBlock} from "./advantageBlock/advantageBlock";

export const Advantages = () => {

    return <section className={styles.advantages}>
        <div className='container'>
            <div className={styles.block}>
                { dataAdvantages.card.map((item, id) => {
                    return <AdvantageBlock key={id} props={item}/>
                })}
            </div>
            <a href="/how" className='button'>Learn MORE</a>
        </div>
    </section>
};
 