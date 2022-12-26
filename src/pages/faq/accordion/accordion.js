import React from 'react';
import styles from './accordion.module.scss'

export const Accordion = ({props}) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`} onClick={() => setOpen(!isOpen)}>
            <div className={styles.wrap}>
                <div className={styles.title}>
                    {props.title}
                </div>
            </div>


            <div className={styles.content}>{props.text}</div>
        </div>
    );
};

