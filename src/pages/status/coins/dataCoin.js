import bitcoin from '../img/bitcoin.svg';
import ethereum from '../img/ethereum.svg';
import tether from '../img/tether.svg';

export const DataCoin = [
    {
        name:"BTC",
        currency:"Bitcoin",
        icon: bitcoin,
        status:true,
        exchangeFrom:true,
        exchangeTo:true,
        fixedRate:true
    },
    {
        name:"ETH",
        currency:"Ethereum",
        icon: ethereum,
        status:false,
        exchangeFrom:false,
        exchangeTo:true,
        fixedRate:true
    },
    {
        name:"USDT",
        currency:"Tether (OMNI)",
        icon: tether,
        status:true,
        exchangeFrom:true,
        exchangeTo:false,
        fixedRate:true
    },  
]