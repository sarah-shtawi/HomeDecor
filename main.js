const navbar = document.querySelectorAll(".navbar:not(.collapse)");
const headerContentSpan = document.querySelector('.header-content span');
const scrollTop = document.querySelector('.scrollTop');
const product = document.querySelector('.product');
const loading = document.querySelector('.loading');

window.addEventListener("scroll", function () {
    if (window.scrollY > product.offsetTop)
        scrollTop.classList.remove("opacity-0", "invisible");
    else
        scrollTop.classList.add("opacity-0", "invisible");
})

scrollTop.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})


window.addEventListener('load', function () {
    setTimeout(function () {
        loading.classList.add('opacity-0', 'invisible')
        document.body.style.overflow = 'auto'
    }, 2000)
})




// start var and event on selecter2 class 
const selecter2Img = document.getElementById('selecter2-default');

const selecter2Beige = document.getElementById('selecter2Beige');
const selecter2Black = document.getElementById('selecter2Black');
const selecter2White = document.getElementById('selecter2White');
const selecter2Red = document.getElementById('selecter2Red');
selecter2Beige.addEventListener('click', function () {
    selecter2Img.setAttribute('src', 'assets/img/table1.webp')
})
selecter2Black.addEventListener('click', function () {
    selecter2Img.setAttribute('src', 'assets/img/drawers-black-brown__.webp')
})
selecter2White.addEventListener('click', function () {
    selecter2Img.setAttribute('src', 'assets/img/malm-chest-of-3-drawers-white.webp')
})
selecter2Red.addEventListener('click', function () {
    selecter2Img.setAttribute('src', 'assets/img/malm-chest-of-3-drawers-brown-stained-a.webp');
})
const selecter2ImgDrawer = document.getElementById('Drawer-default1');

const feetselecter23 = document.getElementById('feetselecter23');
const feetselecter25 = document.getElementById('feetselecter25');
feetselecter23.addEventListener('click', function () {
    selecter2ImgDrawer.setAttribute('src', 'assets/img/table3.webp');
    feetselecter23.style.cssText = `background-color:#5d6e70;`;
    feetselecter25.style.cssText = `background-color:transparent;`;

})

feetselecter25.addEventListener('click', function () {
    selecter2ImgDrawer.setAttribute('src', 'assets/img/table33.webp');
    feetselecter25.style.cssText = `background-color: #5d6e70;`;
    feetselecter23.style.cssText = `background-color:transparent;`;
})

const selecter2Img2 = document.getElementById('selecter2-default2');

const Black2selector2 = document.getElementById('Black2selector2');
const Beige2selector2 = document.getElementById('Beige2selector2');
Black2selector2.addEventListener('click', function () {
    selecter2Img2.setAttribute('src', 'assets/img/AnaiseCaneNighstand3QSSF20_3D-removebg-preview_600x600.webp');
})
Beige2selector2.addEventListener('click', function () {
    selecter2Img2.setAttribute('src', 'assets/img/CortezFloatingNightstdNtrlAwebp.webp');
})
// end var and event on selecter2 class   
// start var and event on bed-table class 
// start carousel-item one
const bedTableImg = document.getElementById('bedTableImg');

const bedTableBeige = document.getElementById('bedTableBeige');
const bedTableBlack = document.getElementById('bedTableBlack');
const bedTableWhite = document.getElementById('bedTableWhite');
const bedTableRed = document.getElementById('bedTableRed');
bedTableBeige.addEventListener('click', function () {
    bedTableImg.setAttribute('src', 'assets/img/table1.webp')
})
bedTableBlack.addEventListener('click', function () {
    bedTableImg.setAttribute('src', 'assets/img/drawers-black-brown__.webp')
})
bedTableWhite.addEventListener('click', function () {
    bedTableImg.setAttribute('src', 'assets/img/malm-chest-of-3-drawers-white.webp')
})
bedTableRed.addEventListener('click', function () {
    bedTableImg.setAttribute('src', 'assets/img/malm-chest-of-3-drawers-brown-stained-a.webp');
})

const sofaImgBedTable = document.getElementById('sofa-default2');

const bedTableBeige2 = document.getElementById('bedTableBeige2');
const bedTableBlack2 = document.getElementById('bedTableBlack2');
bedTableBeige2.addEventListener('click', function(){
    sofaImgBedTable.setAttribute('src' ,'assets/img/sofa.webp');
});
bedTableBlack2.addEventListener('click', function(){
    sofaImgBedTable.setAttribute('src' ,'assets/img/friheten-corner-sofa-bed-with-.webp');
});

const bedImgBedTable = document.getElementById('bed-defult1');
const bedTableWhite2 = document.getElementById('bedTableWhite2');
const bedTableRed2 = document.getElementById('bedTableRed2');
bedTableWhite2.addEventListener('click',function(){
    bedImgBedTable.setAttribute('src','assets/img/bed.webp');
})
bedTableRed2.addEventListener('click',function(){
    bedImgBedTable.setAttribute('src','assets/img/nodeland-bed-frame-black-brown-.webp');
})
const ChairBedTableImg = document.getElementById('chair-default2');
const BedTableGray = document.getElementById('BedTableGray');
const BedTableWhite3 = document.getElementById('BedTableWhite3');
const BedTableBlue = document.getElementById('BedTableBlue');
const BedTableLavender = document.getElementById('BedTableLavender');
BedTableGray.addEventListener('click',function(){
    ChairBedTableImg.setAttribute('src','assets/img/chair.webp');
})
BedTableWhite3.addEventListener('click',function(){
    ChairBedTableImg.setAttribute('src','assets/img/chairHover.webp');
})
BedTableBlue.addEventListener('click',function(){
    ChairBedTableImg.setAttribute('src','assets/img/bergmund-chair-cover-kvillsfors-dark-blue-blue.webp');
})
BedTableLavender.addEventListener('click',function(){
    ChairBedTableImg.setAttribute('src','assets/img/bergmund-chair-cover-rommele-dark-blue-white_emovebg-preview_600x600.webp');
})
// end carousel-item one
// start carousel-item two
const BedTableDesk = document.getElementById('desk-default');
const BedTableWhite4 = document.getElementById('BedTableWhite4');
const BedTableWhite5 = document.getElementById('BedTableWhite5');
BedTableWhite4.addEventListener('click',function(){
    BedTableDesk.setAttribute('src','assets/img/tablee.webp');
})
BedTableWhite5.addEventListener('click',function(){
    BedTableDesk.setAttribute('src','assets/img/courbe-curved-wood-desk-removeb.webp');
});
const BedTableImgBed = document.getElementById('bed-defult3');
const bedTableRed3 = document.getElementById('bedTableRed3');
const bedTableBlack3 = document.getElementById('bedTableBlack3');
bedTableRed3.addEventListener('click',function(){
    BedTableImgBed.setAttribute('src','assets/img/bed1.webp');
})
bedTableBlack3.addEventListener('click',function(){
    BedTableImgBed.setAttribute('src','assets/img/nodeland-bed-frame-with-2-storage-boxes-black-brown.webp');
});
const BedTableLamp = document.getElementById('lamp-default2');
const bedTableWhite6 = document.getElementById('bedTableWhite6');
const BedTableGray2 = document.getElementById('BedTableGray2');
bedTableWhite6.addEventListener('click', function(){
    BedTableLamp.setAttribute('src','assets/img/lamp1.webp');
})
BedTableGray2.addEventListener('click', function(){
    BedTableLamp.setAttribute('src','assets/img/ikea-ps-2014-pendant-lamp-white-silver-colour__600x600.webp');
})
// end carousel-item two
// start carousel-item Three
const bedTableLamp3Img= document.getElementById('lamp-default3');
const bedTableBlack4= document.getElementById('bedTableBlack4');
const bedTableWhite7= document.getElementById('bedTableWhite7');
bedTableBlack4.addEventListener('click',function(){
    bedTableLamp3Img.setAttribute('src','assets/img/lamp2.webp');
})
bedTableWhite7.addEventListener('click',function(){
    bedTableLamp3Img.setAttribute('src','assets/img/3_b408d29d-507c-480x600.webp');
})
const bedTablechairImg = document.getElementById('chair-default3');

const bedTableyellow = document.getElementById('bedTableyellow');
const BedTableGray3 = document.getElementById('BedTableGray3');
const bedTableBlack5 = document.getElementById('bedTableBlack5');
const bedTableGreen = document.getElementById('bedTableGreen');
const bedTableBeige3 = document.getElementById('bedTableBeige3');

bedTableyellow.addEventListener('click',function(){
    bedTablechairImg.setAttribute('src', 'assets/img/chair2.webp');
})
BedTableGray3.addEventListener('click',function(){
    bedTablechairImg.setAttribute('src', 'assets/img/chairHover1.webp');
})
bedTableBlack5.addEventListener('click',function(){
    bedTablechairImg.setAttribute('src', 'assets/img/chairblack.webp');
})
bedTableGreen.addEventListener('click',function(){
    bedTablechairImg.setAttribute('src', 'assets/img/chairgreen.webp');
})
bedTableBeige3.addEventListener('click',function(){
    bedTablechairImg.setAttribute('src', 'assets/img/strandmon-wing-chair-beige_.webp');
})
// end carousel-item Three
// start carousel-item four
const BedImg = document.getElementById('bedTableBed');
const size5 = document.getElementById('size5');
const size6 = document.getElementById('size6');

size5.addEventListener('click' , function(){
    BedImg.setAttribute('src', 'assets/img/bedwhite.webp');
    size6.style.cssText=`
    background-color:transparent; 
    color:#5d6e70;`;
    size5.style.cssText=`
    background-color:#5d6e70; 
    color:white;`;
});
size6.addEventListener('click' , function(){
    BedImg.setAttribute('src', 'assets/img/revival-oak-wood-platform-bed-with-_600x600.webp');
    size6.style.cssText=`
    background-color:#5d6e70; 
    color:white;`;
    size5.style.cssText=`
    background-color:transparent;
    color:#5d6e70 !important;
    `;
});
const bedSizeDefault = document.getElementById('bedSize-default');
const size56 = document.getElementById('size56');
const size67 = document.getElementById('size67');
size56.addEventListener('click', function(){
    bedSizeDefault.setAttribute('src', 'assets/img/1_600x600.webp');
    size56.style.cssText=`background-color:#5d6e70;`
    size67.style.cssText=`background-color:transparent;`
});
size67.addEventListener('click', function(){
    bedSizeDefault.setAttribute('src', 'assets/img/bedhover2.webp');
    size67.style.cssText=`background-color:#5d6e70;`
    size56.style.cssText=`background-color:transparent;`
});
const lamp = document.getElementById('lamp-default4');
const lampWhite = document.getElementById('lampWhite');
const lampYellow = document.getElementById('lampYellow');
lampWhite.addEventListener('click', function(){
    lamp.setAttribute('src', 'assets/img/lamp.webp');
})
lampYellow.addEventListener('click', function(){
    lamp.setAttribute('src', 'assets/img/3_7bdce0f5-b6ff-4271600x600.webp');
})
// end carousel-item four
// end var and event on bed-table  class   
// start var and event on living-room class   
const livingRoomChair = document.querySelector('.living-room .button-5');
const livingRoomChairDefault = document.querySelector('.living-room .button-3');
const chairlivingRoomImg = document.querySelector('.living-room  .img-default');
livingRoomChair.addEventListener('click', function () {
    chairlivingRoomImg.setAttribute('src', 'assets/img/chair3.webp');
})

livingRoomChairDefault.addEventListener('click', function () {
    chairlivingRoomImg.setAttribute('src', 'assets/img/Chair_Desk_Class_Act_WH_LL-removebg-preview_600x600.webp');
})

const livingRoomSofaDefault = document.getElementById('yellowliving-room');
const livingRoomSofa = document.getElementById('grayliving-room');
const livingRoomSofablack = document.getElementById('blackliving-room');
const livingRoomSofagreen = document.getElementById('greenliving-room');
const livingRoomSofaBeige = document.getElementById('beigeliving-room');

const SofalivingRoomImg = document.getElementById('chair-default');
livingRoomSofaDefault.addEventListener('click', function () {
    SofalivingRoomImg.setAttribute('src', 'assets/img/chair2.webp');
});
livingRoomSofa.addEventListener('click', function () {
    SofalivingRoomImg.setAttribute('src', 'assets/img/chairHover1.webp');
})
livingRoomSofablack.addEventListener('click', function () {
    SofalivingRoomImg.setAttribute('src', 'assets/img/chairblack.webp');
})
livingRoomSofagreen.addEventListener('click', function () {
    SofalivingRoomImg.setAttribute('src', 'assets/img/chairgreen.webp');
})
livingRoomSofaBeige.addEventListener('click', function () {
    SofalivingRoomImg.setAttribute('src', 'assets/img/strandmon-wing-chair-beige_.webp');
})
// end var and event on living-room class   

//start  var and event on livingroom2  class 
const SofaLivingRoom2 = document.getElementById('sofa-default');
const whiteLivigRoom2 = document.getElementById('white-livigRoom2');
const redLivigRoom2 = document.getElementById('red-livigRoom2');
const grayLivigRoom2 = document.getElementById('gray-livigRoom2');
const blueLivigRoom2 = document.getElementById('blue-livigRoom2');

whiteLivigRoom2.addEventListener('click', function () {
    SofaLivingRoom2.setAttribute('src', 'assets/img/sofawhite.webp');
})
redLivigRoom2.addEventListener('click', function () {
    SofaLivingRoom2.setAttribute('src', 'assets/img/sofared.webp');
})
grayLivigRoom2.addEventListener('click', function () {
    SofaLivingRoom2.setAttribute('src', 'assets/img/sofagray.webp');
})
blueLivigRoom2.addEventListener('click', function () {
    SofaLivingRoom2.setAttribute('src', 'assets/img/ormaryd-3-seat-sofa-dark-blue.webp');
})
//end var and event on livingroom2  class 
//start  var and event on Interiors  class 
const lampInteriors = document.getElementById('lamp-default');
const whiteInteriors = document.getElementById('white-Interiors');
const yellowInteriors = document.getElementById('yellow-Interiors');
whiteInteriors.addEventListener('click', function () {
    lampInteriors.setAttribute('src', 'assets/img/lamp.webp');
})
yellowInteriors.addEventListener('click', function () {
    lampInteriors.setAttribute('src', 'assets/img/lamp6.webp');
})
const InteriorsImg = document.getElementById('Drawer-default');
const BtnSize3 = document.getElementById('3feet');
const BtnSize5 = document.getElementById('5feet');

BtnSize3.addEventListener('click', function () {
    InteriorsImg.setAttribute('src', 'assets/img/table3.webp');
    BtnSize3.style.cssText=`
    background-color:#5d6e70;
    color:white !important;`;
    BtnSize5.style.cssText=`
    background-color:transparent;
    color:#5d6e70;
    `;
})

BtnSize5.addEventListener('click', function () {
    InteriorsImg.setAttribute('src', 'assets/img/table33.webp');
    BtnSize5.style.cssText=`
    background-color:#5d6e70;
    color:white !important;`;
    BtnSize3.style.cssText=`
    background-color:transparent;
    color:#5d6e70 !important;
    `;
})
//end var and event on Interiors  class










