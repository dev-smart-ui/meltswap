import whoWeAre from './images/who-we-are.jpeg';
import ourService from './images/our-service.jpeg';
import ourGoal from './images/our-goal.jpeg';

export const dataAbout = {
    title: 'About Us',
    card: [
        {
            title: 'Who we are',
            context: 'Founded in 2022, Meltswap is a South African fintech company responsible for developing the Meltswap cryptocurrency exchange. Without compromising its service, Meltswap intends to provide its customers with the most competitive cryptocurrency trading prices.',
            img: whoWeAre,
            width: 523,
            height: 380,
        },
        {
            title: 'Our Service',
            context: 'Our intuitively designed platform provides even the most inexperienced traders with the opportunity to effortlessly navigate the cryptocurrency markets. Our service will allow users to exchange their favourite cryptocurrencies at the most competitive rates. Welcome to the world of cryptocurrencies!',
            img: ourService,
            width: 412.18,
            height: 357,

        },
        {
            title: 'Our Goal',
            context: 'We aim to improve upon the cryptocurrency trading experience through our commitment to transparency. Our competitive pricing models and the intuitive design of our trading platform provide users with a seamless trading experience.',
            img: ourGoal,
            width: 450.42,
            height: 342.06,
        }
    ]
}