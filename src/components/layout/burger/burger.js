import React from 'react';
import styles from './burger.module.scss'
import classNames from "classnames";

export const Burger = ({isOpen , onToggle}) => {

    return <button aria-label={"open menu"} onClick={onToggle} className={classNames( styles.burger , { [styles.active]:isOpen}) }>
     <span className={styles.l} />
     <span className={styles.l} />
     <span className={styles.l} />
    </button>
};
 