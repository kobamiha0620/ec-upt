
const block = document.getElementById('uptshoplist__area');
const btn = document.getElementById('uptshoplist__area').children;
const li = block.querySelectorAll("li");
const btns = document.getElementById('uptshoplist__area').querySelectorAll("li");


// jsonデータの書き出し　-------------
const hokkaiArea = document.getElementById('hokkaidoList');
const kantoArea = document.getElementById('kantoList');
const chubuArea = document.getElementById('chubuList');
const kinkiArea = document.getElementById('kinkiList');
const chugokuArea = document.getElementById('tyugokuList');
const kyushuArea = document.getElementById('kyushuList');

const hokkaidoDetails = document.getElementById('hokkaido__ditails');

function formatJSON(data){
    const hokkaido = [];
    for(let i in data){
        if(data[i].area == "北海道・東北地方"){
            hokkaiArea.insertAdjacentHTML('beforeend', '<li><p class="uptshoplist__shoplist--pre">' + data[i].prefecture + '</p><p class="uptshoplist__shoplist--name">'+ data[i].shopname + '</p></li>');

            // if(data[i].prefecture){
            //     console.log(data[i].prefecture);

            //     return data[i].prefecture;
            // }
            // return data[i].prefecture = true;
            // // hokkaidoDetails.insertAdjacentHTML('before', '<a href="" class="ken_details">' +  data[i].prefecture + '</a>');

        }else if(data[i].area === "関東地方"){
            kantoArea.insertAdjacentHTML('beforeend', '<li><p class="uptshoplist__shoplist--pre">' + data[i].prefecture + '</p><p class="uptshoplist__shoplist--name">'+ data[i].shopname + '</p></li>');
        }else if(data[i].area === "中部地方"){
            chubuArea.insertAdjacentHTML('beforeend', '<li><p class="uptshoplist__shoplist--pre">' + data[i].prefecture + '</p><p class="uptshoplist__shoplist--name">'+ data[i].shopname + '</p></li>');
        }else if(data[i].area === "近畿地方"){
            kinkiArea.insertAdjacentHTML('beforeend', '<li><p class="uptshoplist__shoplist--pre">' + data[i].prefecture + '</p><p class="uptshoplist__shoplist--name">'+ data[i].shopname + '</p></li>');
        }else if(data[i].area === "中国・四国地方"){
            chugokuArea.insertAdjacentHTML('beforeend', '<li><p class="uptshoplist__shoplist--pre">' + data[i].prefecture + '</p><p class="uptshoplist__shoplist--name">'+ data[i].shopname + '</p></li>');
        }else if(data[i].area === "九州地方・沖縄"){
            kyushuArea.insertAdjacentHTML('beforeend', '<li><p class="uptshoplist__shoplist--pre">' + data[i].prefecture + '</p><p class="uptshoplist__shoplist--name">'+ data[i].shopname + '</p></li>');
        }else{
            alert('データエラー');
        }
        
    }

}


// //メニュー下線 ------------------------
// function menuLine(){
//     //アンカー
//     for(i= 0; i < li.length; i++){
//         li[i].addEventListener('click', function(e){
//             removeClass();
//             this.classList.add('is-active');
//         });
//     }
// }

// menuLine();




//要素までの距離
function distance(){
    //フッター
    const footer = document.getElementById('uptfootersns');
    const footDistance = footer.getBoundingClientRect().top + window.scrollY;
    //画面高さ
    const wHeight = window.innerHeight; 
    //画面高さを引く（スクロール量）
    const footerD = (footDistance - wHeight) + 100;
    const shopListanchor = document.getElementById('uptshoplist__area');

    const array = ["hokkaido", "kanto", "tyubu", "kinki", "chugoku", "kyushu"];
    let distanceNum = [];

    for(i = 0; i < array.length; i++){
        const name = document.getElementById(array[i]);
        const nameDistance = name.getBoundingClientRect().top+ window.scrollY;
        const obj = {
            areaName: array[i],
            areaDistance: nameDistance
        }
        distanceNum.push(obj);
    }
    
    return {
        footerD,
        shopListanchor,
        distanceNum,
    };

    
}
function removeClass(){
    btns.forEach(btn => btn.classList.remove("is-active"));
}

function hideFooter(){
    let y = window.scrollY;

    //フッター行ったら、表示しないよ
    if(y >= distance().footerD){
        distance().shopListanchor.classList.add('hide');
    }else{
        distance().shopListanchor.classList.remove('hide');
    }
    

    if(y <= distance().distanceNum[1].areaDistance){
        removeClass();
        block.children[0].classList.add('is-active');    
    }else{
        block.children[0].classList.remove('is-active');    
    }

    if(y >= distance().distanceNum[1].areaDistance){
        removeClass();
        block.children[1].classList.add('is-active');    
    }else{
        block.children[1].classList.remove('is-active');    
    }


    if(y >= distance().distanceNum[2].areaDistance){
        removeClass();
        block.children[2].classList.add('is-active');    
    }else{
        block.children[2].classList.remove('is-active');    
    }


    if(y >= distance().distanceNum[3].areaDistance){
        removeClass();
        block.children[3].classList.add('is-active');    
    }else{
        block.children[3].classList.remove('is-active');    
    }


    if(y >= distance().distanceNum[4].areaDistance){
        removeClass();
        block.children[4].classList.add('is-active');    
    }else{
        block.children[4].classList.remove('is-active');    
    }

    if(y >= distance().distanceNum[5].areaDistance){
        removeClass();
        block.children[5].classList.add('is-active');    
    }else{
        block.children[5].classList.remove('is-active');    
    }
             
}

window.addEventListener('scroll', hideFooter);





// function menuAncor(){
//     menu = document.getElementById('menuArea'),
//     anchor = document.querySelectorAll('a:not(.mScroll):not([target=\"_blank\"])');
    
// }


//非同期処理
func = async() =>{
    await getData();
    await distance();
};

//データを取る
getData = () => {
    return new Promise(resolve => {
        const url = './assets/shoplist.json';
        fetch(url)
		.then( response => response.json())
		.then( data => formatJSON(data));
        resolve();
    });
};

///非同期処理
func();

