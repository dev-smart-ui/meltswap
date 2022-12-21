import React from 'react';
import styles from './advantageBlock.module.scss'

export const AdvantageBlock = ({props}) => {
    const sizePaddingBottom = ((props.height / props.width)  * 100);

    return <div>
        <div className={styles.wrapImg}>
            <figure className={"figure-webp"}  style={{paddingBottom: `${sizePaddingBottom}%`}}>
                <img src={props.img} alt={props.title}/>
            </figure>
        </div>
        <h3>{props.title}</h3>
        <p>{props.context}</p>
    </div>
};
