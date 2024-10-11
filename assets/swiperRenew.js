
const swiperEye02 = new Swiper(".cosmeSwiper__thumb", {
  // デフォルトの設定
  loop: true,

  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,

});
const swiperEye01 = new Swiper(".cosmeSwiper", {
  loop: true,
  spaceBetween: 1,
  slidesPerView: 1,
  speed: 600,
  effect: 'fade',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    
  },
  watchSlidesProgress: true,
  thumbs: {
    swiper: swiperEye02,
  }

});



function click01() {
  swiperEye01.slideTo(1);
  swiperEye02.slideTo(1);

 }
 function click02() {
  swiperEye01.slideTo(3);
  swiperEye02.slideTo(3);
 }
 function click03() {
  swiperEye01.slideTo(5);
  swiperEye02.slideTo(5);
 }