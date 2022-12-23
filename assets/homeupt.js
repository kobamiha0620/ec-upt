//TOPページのみ
$(function () {
    $('.uptheader').removeClass('bg__header');
    $('.js-logo').removeClass('active');
    let homefv = $('#js-uptHome').innerHeight(); // homefvの高さを取得
    let header = $('.l-header').innerHeight(); // homefvの高さを取得

    window.onscroll = function () {
        let point = window.pageYOffset; // 現在のスクロール地点 
        
        if (point > homefv - header - 100) { // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
            $('.uptheader').addClass('bg__header');
            $('.js-logo').addClass('active');

        } else {
            $('.uptheader').removeClass('bg__header');
            $('.js-logo').removeClass('active');
        }
        if (point > homefv - header -180) { // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
            $('.upthome__fv--logo').addClass('is-hidden'); //footerより下にスクロールしたらis-hiddenを追加
        } else {
            $('.upthome__fv--logo').removeClass('is-hidden'); //footerより上にスクロールしたらis-hiddenを削除
        }




        const toImg = $('.upthome__producer').offset();

        let points = window.pageYOffset; // 現在のスクロール地点 
        let dispHeight = $(window).height(); // 表示領域の高さ

        let homeProduce = toImg.top - dispHeight; // homefvの高さを取得
        let stp = points - homeProduce;

        let bgpPc = (stp / 3);
        let bgpTb = (stp / 7);
        let bgpSp = (stp / 8);

        // console.log('移動距離PC : '+ bgpPc);
        // console.log('移動距離PC : '+ bgpSp);

        // console.log('現在のスクロール地点 : '+ points);
        // // console.log('対象までの地点 : ' + toImg.top);
        // // console.log('表示領域の高さ : ' + dispHeight);

        // console.log('ここまでスクロールしたら : ' +  homeProduce);
        // console.log(bgp + 'bgp');
        if (points > homeProduce ){
            if (window.matchMedia && window.matchMedia('(max-device-width: 600px)').matches){
                $('.upthome__producer').css('background-position', 'center top -'+ bgpSp + 'px');

            } else if  (window.matchMedia && window.matchMedia('(max-device-width: 860px)').matches){
                $('.upthome__producer').css('background-position', 'center top -'+ bgpTb + 'px');

            } else {

                $('.upthome__producer').css('background-position', 'center top -'+ bgpPc + 'px');
            }

        }



    };

    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  
  // 日付がたったかどうかチェック
  function hasOneDayPassed(){
    // 今日の日付 
    var date = new Date().toLocaleDateString();
  
    // if there's a date in localstorage and it's equal to the above: 
    // inferring a day has yet to pass since both dates are equal.
    if( localStorage.yourapp_date == date ) 
        return false;
  
    // this portion of logic occurs when a day has passed
    localStorage.yourapp_date = date;
    return true;
  }
  
  function modal(){
    const modal = $('#js_modal');
    const bg = $('#modal_bg');
    modal.fadeIn();
    bg.fadeIn();

    $('#js_closemodal').on('click', function(){
      modal.fadeOut();
      bg.fadeOut();
    });
   bg.on('click', function(){
      modal.fadeOut();
      bg.fadeOut();
    });
    $('#modalcontents').on('click', function(){
      modal.fadeOut();
      bg.fadeOut();
      window.location.href = '/shop/products/';
    });
    $('#modalcontentsSp').on('click', function(){
      modal.fadeOut();
      bg.fadeOut();
      window.location.href = '/shop/products/';
    });

  }
  
  // some function which should run once a day
  function runOncePerDay(){
    if( !hasOneDayPassed() ) 
    // your code below
    return false;
    modal();


  }
  

  function Lpbnr(){
    $('#js-modallink-close').on('click', function(){
      $('#Lpbnr').fadeOut();

    });
  }
  
  runOncePerDay(); // run the code

  runOncePerDay(); // does not run the code
  
  Lpbnr();
    
});

  


// ------------------------------------------------------------------------------

const conceptLink = document.querySelector("[href='/shop#PRODUCER']")
conceptLink.onclick = () => {
  if (location.pathname == '/') {
    location = '/shop/index#PRODUCER'
  } else {
    location = '/shop/#PRODUCER'
  }
}
const aboutLink = document.querySelector("[href='/shop#ABOUT']")
aboutLink.onclick = () => {
  if (location.pathname == '/shop/') {
  location = '/shop/index#ABOUT'
  } else {
    location = '/shop/#ABOUT'
  }
}



// ------------------------------------------------------------------------------