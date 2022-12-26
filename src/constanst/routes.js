
import {Contact} from "../pages/contact/contact";
import {Home} from "../pages/home/home";
import {How} from "../pages/how/how";
import {Faq} from "../pages/faq/faq";
import {Status} from "../pages/status/status";
import {About} from "../pages/about/about";
import {Price} from "../pages/price/price";
import {Terms} from "../pages/policy/terms";
import {Aml} from "../pages/policy/aml";
import {Policy} from "../pages/policy/policy";

export const ROUTES = {
    home:{
        linkText:"home",
        path:"/",
        element:<Home/>
    },
    how:{
        linkText:"How it works",
        path:"/how",
        element:<How/>
    },
    status:{
        linkText:"Status Page",
        path:"/status",
        element:<Status/>
    },
    faq:{
        linkText:"FAQ",
        path:"/faq",
        element:<Faq/>
    },
    about:{
        linkText:"About Us",
        path:"/about",
        element:<About/>
    },
    price:{
        linkText:"Price chart",
        path:"/price",
        element:<Price/>
    },

    contact:{
        linkText:"Contact",
        path:"/contact",
        element:<Contact/>
    },

    policy:{
        linkText:"Privacy Policy",
        path:"/policy",
        element:<Policy/>
    },

    terms:{
        linkText:"Terms",
        path:"/terms",
        element:<Terms/>
    },

    aml:{
        linkText:"AML/KYC Policy",
        path:"/aml",
        element:<Aml/>
    },
}


