import React from 'react';
import styles from './footer.module.scss'
import {ROUTES} from "../../../constanst/routes";
const companyNav =  [
    ROUTES.how,
    ROUTES.status ,
    ROUTES.about ,
 ]
const supportNav =[
    ROUTES.contact,
    ROUTES.faq
]

// на то что разный порядок мобила/десктоп не смотри я думаю это ошибка дизайнера
export const Footer = () => {

    return <footer className={styles.footer}>

    </footer>
};
 