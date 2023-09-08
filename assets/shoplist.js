
//フッターまでの距離
const footer = document.getElementById('uptfootersns');
let footDistance = footer.getBoundingClientRect().top + window.scrollY;


//各位置の距離
// const areas = ['kanto', 'tyubu', 'kinki', 'chugoku', 'kyushu'];
// let area0 = document.getElementById(areas[0]);
// let areaDist0 = (area0.getBoundingClientRect().top + window.scrollY) - area0Height;


//メニュー



//メニューの表示。非表示
const shopListanchor = document.getElementById('uptshoplist__area');
// const anchorH = document.documentElement.shopListanchor;


//画面高さ
let wHeight = window.innerHeight; 

//画面高さを引く（スクロール量）
let footerD = (footDistance - wHeight) + 100;

// const li = document.querySelectorAll('#uptshoplist__area li');


window.addEventListener("scroll", function(){
    

    // 現在の縦方向のスクロール位置を変数 y に格納
    let y = window.scrollY;
    console.log(y);

    //フッター行ったら、表示しないよ
    if(y >= footerD){
        shopListanchor.classList.add('hide');
    }else{
        shopListanchor.classList.remove('hide');
    }

    // if(y >= areaDist0){
    //     li[0].classList.add('areaActive');
    // }

});



