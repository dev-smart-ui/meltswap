import React from 'react';
import styles from './faq.module.scss'
import {Accordion} from "./accordion/accordion";
import {GetInTouch} from "./getInTouch/getInTouch";
import {Title} from "../../components/title";

export const Faq = () => {
    const dataFaq = window.dataFaq;

    return (
        <div className={styles.faq}>
            <div className="container">
                <Title title={dataFaq.title} subtitle={dataFaq.subtitle}/>

                <div className={styles.wrapAccardion}>
                    { dataFaq?.faq?.map((item, id) => {
                        return  <Accordion key={id} props={item} />})}
                </div>

                <GetInTouch props={dataFaq.getInTouch}/>
            </div>
        </div>
    )
};



 