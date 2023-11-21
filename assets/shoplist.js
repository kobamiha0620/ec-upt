const block = document.getElementById('uptshoplist__area');
const spBlock = document.getElementById('uptshoplist__areasp');
const btn = document.getElementById('uptshoplist__area').children;
const li = block.querySelectorAll("li");
const btns = document.getElementById('uptshoplist__area').querySelectorAll("li");


// jsonデータの書き出し　-------------


const mainAreas = [];
const mainArea = []; //6地域名
const mainAreaLast = [];



const hokkaidoDetails = document.getElementById('hokkaido__ditails');

function formatJSON(data) {
    const map1 = new Map();
    const prefecture = []; //都道府県名
    

    //各配列の定義
    const area = [];

    let area1 = [];
    let areaname1 = [];
    let area2 = [];
    let areaname2 = [];
    let area3 = [];
    let areaname3 = [];
    let area4 = [];
    let areaname4 = [];
    let area5 = [];
    let areaname5 = [];
    let area6 = [];
    let areaname6 = [];


    let kenarea = [];


    
    for (let i in data) {
        mainAreas.push(data[i].areaID); //地域IDの配列を作成

        if (data[i].areaID == ('area-1')) {
            area1.push(data[i].prefectureID);
            areaname1.push(data[i].prefecture);

        }else if(data[i].areaID == ('area-2')) {
            area2.push(data[i].prefectureID);
            areaname2.push(data[i].prefecture);
        }else if(data[i].areaID == ('area-3')) {
            area3.push(data[i].prefectureID);
            areaname3.push(data[i].prefecture); 
        }else if(data[i].areaID == ('area-4')) {
            area4.push(data[i].prefectureID);
            areaname4.push(data[i].prefecture); 
        }else if(data[i].areaID == ('area-5')) {
            area5.push(data[i].prefectureID);
            areaname5.push(data[i].prefecture); 
        }else if(data[i].areaID == ('area-6')) {
            area6.push(data[i].prefectureID);
            areaname6.push(data[i].prefecture); 
        }
    }



   
    const mainArea = Array.from(new Set(mainAreas));
    const mainAreaCount = mainArea.length;

    for (j = 1; j < (mainAreaCount + 1); j++) {
        //各地域IDからHTMLから各地域のIDをGETs
        mainAreaLast.push(document.getElementById("area-" + j));
        kenarea.push(document.getElementById("kenarea" + j));

    }

    

    const areaid01 = Array.from(new Set(area1)); //重複しない都道府県
    const allArea01 = Array.from(new Set(areaname1));
    const areaid02 = Array.from(new Set(area2)); //重複しない都道府県
    const allArea02 = Array.from(new Set(areaname2));
    const areaid03 = Array.from(new Set(area3)); //重複しない都道府県
    const allArea03 = Array.from(new Set(areaname3));
    const areaid04 = Array.from(new Set(area4)); //重複しない都道府県
    const allArea04 = Array.from(new Set(areaname4));
    const areaid05 = Array.from(new Set(area5)); //重複しない都道府県
    const allArea05 = Array.from(new Set(areaname5));
    const areaid06 = Array.from(new Set(area6)); //重複しない都道府県
    const allArea06 = Array.from(new Set(areaname6));

    
    let n = 0;
    let x = 1;
    while (n < mainAreaCount) {
        //地域別　> 都道府県
        for(j = 0; j < eval('areaid0' + x).length; j++){
            mainAreaLast[n].insertAdjacentHTML('beforeend', '<li><a class="uptshoplist__shoplist--pre" href="#'+ eval('areaid0' + x)[j] + '">' + eval('allArea0' + x)[j] + '</a></li>');
        }
      n++;
      x++;

    }

    for (let i in data) {
        if(data[i].areaID == "area-1"){
            kenarea[0].insertAdjacentHTML('beforeend', '<li id="'+ data[i].prefectureID + '"><span class="prefecture__ttl">' + data[i].prefecture + '</span><span class="prefecture__name">' +  data[i].shopname + '</span></li>');
        }else if(data[i].areaID == "area-2"){
            kenarea[1].insertAdjacentHTML('beforeend', '<li id="'+ data[i].prefectureID + '"><span class="prefecture__ttl">' + data[i].prefecture + '</span><span class="prefecture__name">' +  data[i].shopname + '</span></li>');
        }else if(data[i].areaID == "area-3"){
            kenarea[2].insertAdjacentHTML('beforeend', '<li id="'+ data[i].prefectureID + '"><span class="prefecture__ttl">' + data[i].prefecture + '</span><span class="prefecture__name">' +  data[i].shopname + '</span></li>');
        }else if(data[i].areaID == "area-4"){
            kenarea[3].insertAdjacentHTML('beforeend', '<li id="'+ data[i].prefectureID + '"><span class="prefecture__ttl">' + data[i].prefecture + '</span><span class="prefecture__name">' +  data[i].shopname + '</span></li>');
        }else if(data[i].areaID == "area-5"){
            kenarea[4].insertAdjacentHTML('beforeend', '<li id="'+ data[i].prefectureID + '"><span class="prefecture__ttl">' + data[i].prefecture + '</span><span class="prefecture__name">' +  data[i].shopname + '</span></li>');
        }else if(data[i].areaID == "area-6"){
            kenarea[5].insertAdjacentHTML('beforeend', '<li id="'+ data[i].prefectureID + '"><span class="prefecture__ttl">' + data[i].prefecture + '</span><span class="prefecture__name">' +  data[i].shopname + '</span></li>');
        }





    }
}



//要素までの距離
function distance() {
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

    for (i = 0; i < array.length; i++) {
        const name = document.getElementById(array[i]);
        const nameDistance = name.getBoundingClientRect().top + window.scrollY;
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

function removeClass() {
    btns.forEach(btn => btn.classList.remove("is-active"));
}

function hideFooter() {
    let y = window.scrollY;

    //フッター行ったら、表示しないよ
    if (y >= distance().footerD) {
        distance().shopListanchor.classList.add('hide');
        spBlock.classList.remove('active');
    } else {
        distance().shopListanchor.classList.remove('hide');
        spBlock.classList.add('active');
    }


    if (y <= distance().distanceNum[1].areaDistance) {
        removeClass();
        block.children[0].classList.add('is-active');
    } else {
        block.children[0].classList.remove('is-active');
    }

    if (y >= distance().distanceNum[1].areaDistance) {
        removeClass();
        block.children[1].classList.add('is-active');
    } else {
        block.children[1].classList.remove('is-active');
    }


    if (y >= distance().distanceNum[2].areaDistance) {
        removeClass();
        block.children[2].classList.add('is-active');
    } else {
        block.children[2].classList.remove('is-active');
    }


    if (y >= distance().distanceNum[3].areaDistance) {
        removeClass();
        block.children[3].classList.add('is-active');
    } else {
        block.children[3].classList.remove('is-active');
    }


    if (y >= distance().distanceNum[4].areaDistance) {
        removeClass();
        block.children[4].classList.add('is-active');
    } else {
        block.children[4].classList.remove('is-active');
    }

    if (y >= distance().distanceNum[5].areaDistance) {
        removeClass();
        block.children[5].classList.add('is-active');
    } else {
        block.children[5].classList.remove('is-active');
    }

}

window.addEventListener('scroll', hideFooter);




//非同期処理
func = async () => {
    await getData();
    await distance();
};

//データを取る
getData = () => {
    return new Promise(resolve => {
        const url = 'https://d2w53g1q050m78.cloudfront.net/uptofficialjp/uploads/themes/theme_after1year_20231115143131/ec_force/assets/shoplist.json';
        fetch(url)
            .then(response => response.json())
            .then(data => formatJSON(data));
        resolve();
    });
};

///非同期処理
func();


