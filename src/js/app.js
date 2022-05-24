import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';


const swiper = new Swiper(".swiper", {
  // Optional parameters
  
  
  silulateTouch: true,
  touchRatio:1,
  touchAngle:45,
  grabCursor:true,
  slidesPerView:3,
  spaceBetween: 35,
  centeredSlides: true,
  initialSlide:1,
  width:1600,
 
  
});

console.log("hello");