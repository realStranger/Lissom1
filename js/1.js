// $( ".burger" ).click(function() {
//   $( ".menu" ).toggle();
// });


//Burger click

var menu = $(".menu")[0];

$( ".burger" ).click(function() 
{
  if( $( ".menu" )[0].classList.contains('menu--active') ) {
    $( ".menu" )[0].classList.remove('menu--active');
    TweenLite.to(menu, 0.2, {opacity:0, visibility:"hidden"}); 
    TweenLite.to(menu, 0.2, {display:"none", delay:0.6}); 
    $( ".menuLine" ).css("opacity","1");
    $( ".menuLine" ).css("visibility","visible");
  }
  else
  {
    $( ".menu" )[0].classList.add('menu--active');
    TweenLite.to(menu, 0.2, {opacity:1, visibility:"visible"});
    $( ".menu" ).css("display","flex");
    $( ".menuLine" ).css("opacity","1");
    $( ".menuLine" ).css("visibility","visible");
  }
   
});

//Burger color change

// if ($(".main").scrollTop() == $(".albumSection").offset().top )
//   {
//     $(".rectangles").css("fill", "black");
//   }

window.onscroll = function() {
if (window.pageYOffset >= ($(".albumSection").offset().top || $(".toursSection").offset().top) )
  {
    $(".rectangles").css("fill", "black");
  }

  else if (window.pageYOffset >= $(".authorsSection").offset().top )
  {
    $(".rectangles").css("fill", "white");
  }

}

  // alert ($(".albumSection").offset().top);

// var scrolled;
// window.onscroll = function() {
//     scrolled = window.pageYOffset || document.documentElement.scrollTop;
//     if(scrolled > 400){
//       $(".rectangles").css("fill", "black");
//     }
//     if(400 > scrolled){
//       $(".rectangles").css("fill", "white");        
//     }

// }  

//Menu items anchors


$( ".menuItem:nth-child(1)" ).click(function(){
  var block = $(".nothing")[2];
  block.scrollIntoView(true);
  $( ".menu" )[0].classList.remove('menu--active');
    TweenLite.to($( ".menuLine" ), 1, {opacity:0});
    TweenLite.to($( ".menuLine" ), 0.1, {visibility:"hidden",delay:1});
    TweenLite.to(menu, 0.5, {opacity:0, visibility:"hidden", delay:1});
});

$( ".menuItem:nth-child(2)" ).click(function(){
  var block = $(".nothing")[3];
  block.scrollIntoView(true);
  $( ".menu" )[0].classList.remove('menu--active');
  TweenLite.to($( ".menuLine" ), 1, {opacity:0});
  TweenLite.to($( ".menuLine" ), 0.1, {visibility:"hidden",delay:1});
  TweenLite.to(menu, 0.5, {opacity:0, visibility:"hidden", delay:1});
});

$( ".menuItem:nth-child(3)" ).click(function(){
  var block = $(".nothing")[4];
  block.scrollIntoView(true);
  $( ".menu" )[0].classList.remove('menu--active');
  TweenLite.to($( ".menuLine" ), 1, {opacity:0});
  TweenLite.to($( ".menuLine" ), 0.1, {visibility:"hidden",delay:1});
  TweenLite.to(menu, 0.5, {opacity:0, visibility:"hidden", delay:1});
});

//Menu Items Hover
$( ".menuItem:nth-child(1)" ).hover(function(){
 $(this).css("padding-left","50px");
},

function(){
  $(this).css("padding-left","0");
}
);

//Tour Hover

$( ".tourWrap:nth-child(1)" ).hover(function(){
  $(".sectionHeader").css("color", "white");
  $(".tourBack").attr("src", "images/tours/rheine1.jpg");
  $(".tourBack").css("opacity", "1");
  $(".tourWrap").css("color", "white");
  $(".tourWrap").css("border-bottom", "1px solid white");},
  
  function(){
    $(".sectionHeader").css("color", "black");
    $(".tourBack").css("opacity", "0");
    $(".tourWrap").css("color", "black");
    $(".tourWrap").css("border-bottom", "1px solid black");}
);

$( ".tourWrap:nth-child(2)" ).hover(function(){
  $(".sectionHeader").css("color", "white");
  $(".tourBack").attr("src", "images/tours/hasselt.jpg");
  $(".tourBack").css("opacity", "1");
  $(".tourWrap").css("color", "white");
  $(".tourWrap").css("border-bottom", "1px solid white");},
  
  function(){
    $(".sectionHeader").css("color", "black");
    $(".tourBack").css("opacity", "0");
    $(".tourWrap").css("color", "black");
    $(".tourWrap").css("border-bottom", "1px solid black");}
);

$( ".tourWrap:nth-child(3)" ).hover(function(){
  $(".sectionHeader").css("color", "white");
  $(".tourBack").attr("src", "images/tours/utrecht.jpg");
  $(".tourBack").css("opacity", "1");
  $(".tourWrap").css("color", "white");
  $(".tourWrap").css("border-bottom", "1px solid white");},
  
  function(){
    $(".sectionHeader").css("color", "black");
    $(".tourBack").css("opacity", "0");
    $(".tourWrap").css("color", "black");
    $(".tourWrap").css("border-bottom", "1px solid black");}
);


// CD images

all_images = new Array (
  "images/cd1.jpg",
  "images/cd2.jpg",
  "images/cd3.jpg");
  var ImgNum = 0;
  var ImgLength = all_images.length - 1;
  var delay = 4500;
  var lock = false;
  var run;
  
  function chgImg(direction) {
   if (document.images) {
    ImgNum = ImgNum + direction;
    if (ImgNum > ImgLength) { ImgNum = 0; }
    if (ImgNum < 0) { ImgNum = ImgLength; }
    document.slide_show.src = all_images[ImgNum];
   }
  }
  
  function auto() {
   if (lock == true) {
    lock = false;
    window.clearInterval(run);
   }
   else if (lock == false) {
    lock = true;
    run = setInterval("chgImg(1)", delay);
   }
  }

  auto();