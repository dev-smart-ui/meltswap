import React from 'react';
import styles from './howWorksCard.module.scss'

export const HowWorksCard = ({props}) => {

    return <div className={styles.card}>
        <div className={styles.svg} dangerouslySetInnerHTML={{__html: props.svg}}/>
        <div>
            <h3 className={styles.title}>{props.title}</h3>
            <div className={styles.content} dangerouslySetInnerHTML={{__html: props.content}}/>
        </div>
    </div>
};
