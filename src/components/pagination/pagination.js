import React from 'react';
import styles from './pagination.module.scss'
import classNames from "classnames";

const Btn =({i, active})=> {
    return(
        <button type='button' className={classNames(styles.dots , {"active": active}) }>{i + 1}</button>
        )

}

export const Pagination = ({active , length}) => {

    const list =Array(length).fill("f ")
    return <div className={styles.pagination}>
        {list.map((_, i )=> <Btn key={i} i={i} active={active===i+1}/>)}
    </div>
};
