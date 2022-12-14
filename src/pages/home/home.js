import React from 'react';

import {Exchange} from "../home/exchange/exchange";
import {CompanySection} from "../home/companySection/companySection";
import {HowSection} from "../home/howSection/howSection";
import {Advantages} from "../home/advantages/advantages";
import {Application} from "../home/application/application";
import {Price} from "../home/price/price";

export const Home = () => {

    return <>
        <Exchange/>
        <CompanySection/>
        <Price/>
        <HowSection/>
        <Advantages/>
        <Application/>
    </>
};
 