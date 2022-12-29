import React from 'react';
import styles from './getInTouch.module.scss'

export const GetInTouch = ({props}) => {
    return (
        <div className={styles.getInTouch}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.content} dangerouslySetInnerHTML={{__html: props.context}}/>
            <a href="/contact" className={"button"}>{props.button.name}</a>
        </div>
    );
};

