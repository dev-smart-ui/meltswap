import React from 'react';
import styles from './how.module.scss'
import {Title} from "../../components/title";
import {HowWorksCard} from "./howWorksCard/howWorksCard";

import imgMobile from "./img-mobile-how.png";
export const How = () => {
    const dataHow = window.dataHow;

    return <div className={styles.how}>
            <div className="container">
                <Title title={dataHow.title}/>

                <div className={styles.wrapper}>
                    <div className={styles.wrapImg}>
                        <img src={imgMobile} alt="imgMobile"/>
                    </div>

                    <div className={styles.wrapHowWorksCard}>
                        { dataHow.howWorksCard?.map((item, id) => {
                            return <HowWorksCard className={styles.howWorksCard} key={id} props={item}/>
                        })}
                    </div>
                </div>
                <div className={styles.wrapper}>

                </div>
            </div>
    </div>
};
 