import React from 'react';
import styles from './how.module.scss'
import {Title} from "../../components/title";
import {HowWorksCard} from "./howWorksCard/howWorksCard";
import {dataHow} from "./data";
import imgMobile from "./img-mobile-how.png";
import {HowOfferCard} from "./howOfferCard/howOfferCard";

export const How = () => {
    const paddingBottomMobileImg = (535 / 265 * 100); // (height / width * 100)

    return <div className={styles.how}>
            <div className="container">
                <Title title={dataHow.title}/>

                <div className={styles.wrapper}>
                    <div className={styles.wrapImg}>
                        <figure className={"figure-webp"} style={{paddingBottom: `${paddingBottomMobileImg}%`}}>
                            <img src={imgMobile} alt="imgMobile"/>
                        </figure>
                    </div>

                    <div className={styles.wrapHowWorksCard}>
                        { dataHow.howWorksCard?.map((item, id) => {
                            return <HowWorksCard key={id} props={item}/>
                        })}
                    </div>
                </div>
                <div className={styles.wrapperOffer}>
                    <h2 className={styles.offerTitle}>{dataHow.offer?.title}</h2>
                    <div className={styles.wrapOfferCard}>
                        { dataHow.offer?.card?.map((item, id) => {
                            return <HowOfferCard key={id} props={item}/>
                        })}
                    </div>
                </div>
            </div>
    </div>
};
 