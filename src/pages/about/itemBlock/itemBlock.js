import React from 'react';
import styles from './itemBlock.module.scss'

export const ItemBlock = ({props}) => {
    return <div className={styles.block}>
            <div className={styles.wrapImg}>
                <img src={props.img} alt={props.title}/>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{props.title}</h2>
                <div className={styles.context} dangerouslySetInnerHTML={{__html: props.context}}/>
            </div>
    </div>
};
 