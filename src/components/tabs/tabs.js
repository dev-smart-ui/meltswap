import React, {useRef, useState} from 'react';
import styles from './tabs.module.scss'

import classNames from "classnames";
import {useOpen} from "../../hooks/useOpen";

export const Tabs = ({tabList} ) => {
    const [activeTab , setActiveTab] = useState(0);
    const {isOpen:isScrolled, onClose:onLeft, onOpen:onRight} = useOpen();
    const headerRef = useRef();
    const scrollHandler =()=>{
        if(isScrolled){
            headerRef.current.scrollBy(-1000,0);
        }else{
            headerRef.current.scrollBy(1000,0);
        }

    }
    const scrollChecker=(e)=>{
        if(e.target.scrollLeft>50){
            onRight()
        }else{
            onLeft()
        }

    }
    return <div className={styles.tabs}>
        <header onScroll={scrollChecker} ref={headerRef} className={styles.header}>
            {tabList.map((tab,i)=>(
                <button className={ classNames( styles.button , {[styles.active]:i===activeTab})}
                        key={i}
                        onClick={()=>setActiveTab(i)}>
                    {tab.anchor}
                </button>
            ))}
            <button onClick={scrollHandler} className={styles.arrow}>
                <svg style={{transform:isScrolled? "rotate(180deg)":"rotate(0)"}} width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M1 13L7 7L1 1" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </header>

        <div className={styles.body}>
            {tabList[activeTab].element()}
        </div>
    </div>
};
 