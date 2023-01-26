import React from 'react';
import styles from './advantageBlock.module.scss'

export const AdvantageBlock = ({props}) => {
    return <div className={styles.advantegeBlock}>
        <div className={styles.wrapImg}>
            <figure className={"figure-webp"}>
                <img src={props.img} alt={props.title}/>
            </figure>
        </div>
        <h3>{props.title}</h3>
        <p>{props.context}</p>
    </div>
};
