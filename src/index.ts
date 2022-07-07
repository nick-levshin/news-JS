import App from './components/app/app';
import './global.css';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const app: App = new App();
app.start();

const swiper: Swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
        600: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    modules: [Navigation],
});
