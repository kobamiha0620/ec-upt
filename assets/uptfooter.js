$(function(){

    //SNS
    function snslocate(){
        const $sns = $('#js-sns');
        const toFooter = $('.uptfootersns').offset().top; //フッターまでの距離
        let dispHeight02 = $(window).height(); // 表示領域の高さ
        let scroll02 = toFooter - dispHeight02; // homefvの高さを取得
        let point02 = window.pageYOffset; // 現在のスクロール地点 
    
        let $widthInner =  $(".uptplane__inner").outerWidth();     //=>65px
        let windowSize = $(window).width();
        $positionR =( windowSize - $widthInner) / 2;
        $Right =  $positionR - 38;
        $sns.css('right', $Right+ 'px' );
        if (point02 > scroll02) {
            $sns.addClass('hiden');
        }else{
            $sns.removeClass('hiden');
    
        }  
    }
    snslocate();

    $(window).on('resize scroll',function(event){
        snslocate();
    });
    //カーソル画像
    const cursor =$("#cursor");                // カーソルになる要素を指定
    $(document).on("mousemove",function(e){ // マウスカーソルが動いた時に実行
    let x=e.clientX - 11;                      // カーソルの横座標を取得
    let y=e.clientY - 11;                      // カーソルの縦座標を取得

    //  取得した座標をCSSに反映させる
    cursor.css({
        "top":y+"px",
        "left":x+"px"
    });
});


});