import React from 'react';
import styles from './itemBlock.module.scss'

export const ItemBlock = ({props}) => {
    const sizePaddingBottom = ((props.height / props.width)  * 100);

    return <div className={styles.block}>
            <div className={styles.wrapImg}>
                <figure className={"figure-webp"}  style={{paddingBottom: `${sizePaddingBottom}%`}}>
                    <img src={props.img} alt={props.title}/>
                </figure>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{props.title}</h2>
                <div className={styles.context} dangerouslySetInnerHTML={{__html: props.context}}/>
            </div>
    </div>
};
 