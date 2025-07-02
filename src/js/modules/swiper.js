import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Thumbs,
  EffectFade,
  Controller,
  Autoplay,
  Mousewheel,
  EffectCreative,
} from "swiper/modules";

const homeSpecialOffersSwiper = new Swiper(".home-special-offers__swiper", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    prevEl: ".home-special-offers-prev",
    nextEl: ".home-special-offers-next",
  },
});
