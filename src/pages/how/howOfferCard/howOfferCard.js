import React from 'react';
import styles from './howOfferCard.module.scss'

export const HowOfferCard = ({props}) => {

    return <div className={styles.card}>
        <div className={styles.svg} dangerouslySetInnerHTML={{__html: props.svg}}/>
        <div>
            <h3 className={styles.title}>{props.title}</h3>
            <div className={styles.text} dangerouslySetInnerHTML={{__html: props.text}}/>
        </div>
    </div>
};
