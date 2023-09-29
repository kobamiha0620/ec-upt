
//フッターまでの距離
const footer = document.getElementById('uptfootersns');
let footDistance = footer.getBoundingClientRect().top + window.scrollY;


//各位置の距離
let area = document.getElementsByClassName('uptshoplist__blc');
const len =  area.length;	
let areaPositions =[];

for (let i=0; i < len; i++) {
    let pos = area[i].getBoundingClientRect().top; 
    areaPositions.push(pos);
};

const btn = document.getElementById('uptshoplist__area').children;
const lists = Array.from(document.querySelectorAll("li"));

// btn.on('click', function() {
//     const index = btn.index(this);
//     $('html,body').animate({scrollTop: position[index]});
// });




console.log(areaPositions);
// const kanto = document.getElementById(areas[0]);
// let kantoH = kanto.getBoundingClientRect().top;




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



