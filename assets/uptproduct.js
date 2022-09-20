//TOPページのみ
$(function () {
    const toFv = $('#js-prodcutFv').offset().top;
    const border = $('#js-border');
    border.css({height: 0});

	window.addEventListener('scroll', function () {

        let points = window.pageYOffset; // 現在のスクロール地点 
        let dispHeight = $(window).height(); // 表示領域の高さ
        let fvScroll = toFv - dispHeight; // スクロール値
        if(true){
            if (points > fvScroll) {
                border.animate({height:"100%"},1500);
                return false;
            }
        }
			
	});


    function accordion() {
        const accBtn = $('#js-accordion01 li');
        accBtn.on('click', function () {
            $(this).children('.uptproduct__setitem--list-txt').slideToggle();
            $(this).toggleClass("active");
            //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.uptproduct__setitem--list-txtを閉じる
           accBtn.not($(this)).children('.uptproduct__setitem--list-txt').slideUp();
           accBtn.not($(this)).removeClass("active");
        });

        const accBtn02 = $('#js-accordion02 li');
        accBtn02.on('click', function () {
            $(this).children('.uptproduct__setitem--list-txt').slideToggle();
            $(this).toggleClass("active");
            //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.uptproduct__setitem--list-txtを閉じる
           accBtn02.not($(this)).children('.uptproduct__setitem--list-txt').slideUp();
           accBtn02.not($(this)).removeClass("active");
        });

        const accBtn03 = $('#js-accordion03 li');
        accBtn03.on('click', function () {
            $(this).children('.uptproduct__setitem--list-txt').slideToggle();
            $(this).toggleClass("active");
            //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.uptproduct__setitem--list-txtを閉じる
           accBtn03.not($(this)).children('.uptproduct__setitem--list-txt').slideUp();
           accBtn03.not($(this)).removeClass("active");
        });
    }
    accordion();


});

