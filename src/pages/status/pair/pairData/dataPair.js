import bitcoin from '../../img/bitcoin.svg';
import ethereum from '../../img/ethereum.svg';
import tether from '../../img/tether.svg';

export const DataPair = [
    {
        from: {
            name:"ETH",
            currency:"Ethereum",
            icon: ethereum,
        },

        to: {
            name:"USDT",
            currency:"Tether (OMNI)",
            icon: tether,
        }
    },
    {
        from: {
            name:"USDT",
            currency:"Tether (OMNI)",
            icon: tether,
        },

        to: {
            name:"BTC",
            currency:"Bitcoin",
            icon: bitcoin,
        }
    },
]