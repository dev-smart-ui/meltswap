import React from 'react';
import styles from './accordion.module.scss'

export const Accordion = ({props}) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>

            <button className={`${styles.title}`}
                onClick={() => setOpen(!isOpen)}
            >
                {props.title}
            </button>
            <div className={styles.content}>{props.text}</div>
        </div>
    );
};

