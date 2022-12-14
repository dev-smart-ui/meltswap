
import {Contact} from "../pages/contact/contact";
import {Home} from "../pages/home/home";
import {How} from "../pages/how/how";
import {Faq} from "../pages/faq/faq";
import {Status} from "../pages/status/status";
import {About} from "../pages/about/about";

import facebook from "../media/facebook.svg";
import twitter from "../media/twitter.svg";
import instagram from "../media/instagram.svg";
import linkedIn  from "../media/in.svg";
import github  from "../media/github.svg";
import discord  from "../media/discord.svg";
import reddit  from "../media/reddit.svg";

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

    contact:{
        linkText:"Contact",
        path:"/contact",
        element:<Contact/>
    },

    policy:{
        linkText:"Privacy Policy",
        path:"/"
    },

    terms:{
        linkText:"Terms",
        path:"/"
    },

    aml:{
        linkText:"AML/KYC Policy",
        path:"/"
    },

    facebook:{
        linkText:"Facebook",
        path:"/",
        icon:facebook
    },

    twitter:{
        linkText:"Twitter",
        path:"/",
        icon:twitter
    },

    instagram:{
        linkText:"Instagram",
        path:"/",
        icon:instagram
    },

    linkedIn:{
        linkText:"LinkedIn",
        path:"/",
        icon:linkedIn
    },

    github:{
        linkText:"Github",
        path:"/",
        icon:github
    },

    discord:{
        linkText:"Discord",
        path:"/",
        icon:discord
    },

    reddit:{
        linkText:"Discord",
        path:"/",
        icon:reddit
    },

}


