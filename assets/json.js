

// 起動時の処理
window.addEventListener("load", ()=>{
	fetch("./assets/shoplist.json")
    .then(response => {
        return response.json();
     })
	.then(data => formatJSON(data));
});


const hokkaiArea = document.getElementById('hokkaidoList');
const kantoArea = document.getElementById('kantoList');
const chubuArea = document.getElementById('chubuList');
const kinkiArea = document.getElementById('kinkiList');
const chugokuArea = document.getElementById('tyugokuList');
const kyushuArea = document.getElementById('kyushuList');

function formatJSON(data){
    console.log(data.area);
        for(let i in data){
            if(data[i].area == "北海道・東北地方"){
                hokkaiArea.insertAdjacentHTML('beforeend', '<li><p class="uptshoplist__shoplist--pre">' + data[i].prefecture + '</p><p class="uptshoplist__shoplist--name">'+ data[i].shopname + '</p></li>');
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
