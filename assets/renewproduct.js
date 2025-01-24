
//TOPページのみ
const toppage = () =>{
    document.body.classList.add('renewPage');
 }
 toppage();

document.addEventListener('DOMContentLoaded', () => {

const prescriptionBtn = document.querySelectorAll('.prescription__blc');

prescriptionBtn.forEach(element => {
    const summary = element.querySelector('.prescription__blc--small');
    const content = element.querySelector('.prescription__sblc');

    summary.addEventListener('click', e => {
      e.preventDefault();
      if (element.open) {
        const openDetails = content.animate(
          {
            opacity: [1, 0],
            height: [content.offsetHeight + 'px', 0],
          },
          {
            duration: 300,
            easing: 'ease-out',
          }
        );
        openDetails.onfinish = () => {
          element.removeAttribute('open');
        }
        element.classList.remove('show');
      } else {
        element.setAttribute('open', 'true');
        element.classList.add('show');
        const openDetails = content.animate(
          {
            opacity: [0, 1],
            height: [0, content.offsetHeight + 'px'],
          },
          {
            duration: 300,
            easing: 'ease-out',
          }
        );
      }
    });
  });
});




window.addEventListener("load", () => {
  const tabname = document.getElementById('itemsKikaku');
  const tabs = document.querySelectorAll(".item__details--colorlist");
  const variantId = document.getElementById('variant-id');
  
  const soldout = document.getElementById('js-soldout');
  const btnAdd = document.getElementById('btn-add');
  const tabDataSoludOut = document.getElementById('dataSoldOut');
  tabs.forEach(function(tab) {
      tab.addEventListener("click", function() {
        let txtNeme = tab.dataset.name;
        let txtID = tab.dataset.masterid;
        console.log(txtNeme);
        tabname.innerHTML= txtNeme;
        variantId.value = txtID;
        // tabname.innerHTML = `${document.documentElement.innerHTML.replace(
        // )}`;

        //追記部分 --売り切れ対応ここを消す
        if(tabDataSoludOut){
          if( txtID == 20){
            soldout.innerHTML = 'SOLD OUT';
            btnAdd.classList.add('disable');
            btnAdd.disabled = "disabled";
           }else{
             btnAdd.classList.remove('disable');
             soldout.innerHTML = '購入はこちら';
             btnAdd.disabled = false;
           }
        }



        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
  });

});




  // document.querySelectorAll(".item__details--colorlist").forEach((e) => {
  //   const absoluteTop = e.getBoundingClientRect().top;
  //   const relativeTop = window.pageYOffset;
  //   const winHeight = window.innerHeight;
  //   if (absoluteTop <= relativeTop + winHeight) { window.setTimeout(() => {
  //       e.classList.add("--active");
  //     }, e.dataset.time);
  //   }
  // });
