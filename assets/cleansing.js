//TOPページのみ
$(function () {


    function accordion() {

        const accBtn04 = $('#js-accordion-wash li');
        accBtn04.on('click', function () {
            console.log('wash');
            $(this).children('.cleandingblc__setitem--list-txt').slideToggle();
            $(this).toggleClass("active");
            //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.uptproduct__setitem--list-txtを閉じる
           accBtn04.not($(this)).children('.cleandingblc__setitem--list-txt').slideUp();
           accBtn04.not($(this)).removeClass("active");
        });
        
    }
    accordion();


});



var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView:3,
    freeMode: true,
    watchSlidesProgress: true,

  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 0,
    slidesPerView:1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    thumbs: {
      swiper: swiper,
    },
  });
