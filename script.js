// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// var elem1=document.querySelector("#elem1");
// var elem2=document.querySelector("#elem2")
// var elem3=document.querySelector("#elem3")
// var elem4=document.querySelector("#elem4")
// var elem5=document.querySelector("#elem5")

function page4Animation() {
  var elemc = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");

  elemc.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  elemc.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });
  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-img");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

//  template  literals $

// elem2.addEventListener("mouseenter",function(){
//     var img=elem2.getAttribute("data-img")
//     fixed.style.backgroundImage=`url(${img})`
// //  template  literals $

// });
// elem3.addEventListener("mouseenter",function(){
//     var img=elem3.getAttribute("data-img")
//     fixed.style.backgroundImage=`url(${img})`
// //  template  literals $

// });
// elem4.addEventListener("mouseenter",function(){
//     var img=elem4.getAttribute("data-img")
//     fixed.style.backgroundImage=`url(${img})`
// //  template  literals $

// });
// elem5.addEventListener("mouseenter",function(){
//     var img=elem5.getAttribute("data-img")
//     fixed.style.backgroundImage=`url(${img})`
// //  template  literals $

// });
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    freeMode: true,
  });
}

function menuAnimation(){
  var menu=document.querySelector("#nav h3")
var full=document.querySelector("#fullscr")
var nav_img=document.querySelector("#nav img")
var flag= 0;
menu.addEventListener("click",function(){
  if(flag==0){
    full.style.top=0;
    nav_img.style.opacity=0;
    flag=1;
    
  }
  else{
    full.style.top="-100%";
    nav_img.style.opacity=1;
    flag=0;
  }
  
  
})
}


function text_design(){
  var load=document.querySelector("#loader")
setTimeout(function(){
load.style.top="-100%"
},4200)
}
swiperAnimation();
page4Animation() ;
menuAnimation();
text_design();
