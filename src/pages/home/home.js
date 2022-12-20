import React from 'react';

import {Exchange} from "./exchange/exchange";
import {CompanySection} from "./companySection/companySection";
import {HowSection} from "./howSection/howSection";
import {Advantages} from "./advantages/advantages";
import {Application} from "./application/application";
import {Price} from "./price/price";

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
 