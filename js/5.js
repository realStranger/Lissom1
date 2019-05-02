$(document).ready(function(){

//Source Click()

$(".appleSource").click(function(){
    $(".sources").css("opacity", "0");
    $(".sources").css("visibility", "hidden");
    $(".sources").css("position", "absolute");
    $(".sourceWrapUnder").css("visibility", "visible");
    $(".sourceWrapUnder").css("opacity", "1");
    $(".spotifyHolder").css("opacity", "0");
    $(".spotifyHolder").css("visibility", "hidden");
    $(".amazonHolder").css("opacity", "0");
    $(".amazonHolder").css("visibility", "hidden");
    $(".deezerHolder").css("opacity", "0");
    $(".deezerHolder").css("visibility", "hidden");
    $(".nav__item")[1].classList.remove('nav__item--current');
    $(".nav__item")[2].classList.remove('nav__item--current');
    $(".nav__item")[3].classList.remove('nav__item--current');
    $(".nav__item")[0].classList.add('nav__item--current');
  });

$(".spotifySource").click(function(){
    $(".sources").css("opacity", "0");
    $(".sources").css("visibility", "hidden");
    $(".sources").css("position", "absolute");
    $(".sourceWrapUnder").css("visibility", "visible");
    $(".sourceWrapUnder").css("opacity", "1");
    $(".appleHolder").css("opacity", "0");
    $(".appleHolder").css("visibility", "hidden");
    $(".amazonHolder").css("opacity", "0");
    $(".amazonHolder").css("visibility", "hidden");
    $(".deezerHolder").css("opacity", "0");
    $(".deezerHolder").css("visibility", "hidden");
    $(".nav__item")[0].classList.remove('nav__item--current');
    $(".nav__item")[2].classList.remove('nav__item--current');
    $(".nav__item")[3].classList.remove('nav__item--current');
    $(".nav__item")[1].classList.add('nav__item--current');
  });  

$(".amazonSource").click(function(){
    $(".sources").css("opacity", "0");
    $(".sources").css("visibility", "hidden");
    $(".sources").css("position", "absolute");
    $(".sourceWrapUnder").css("visibility", "visible");
    $(".sourceWrapUnder").css("opacity", "1");
    $(".appleHolder").css("opacity", "0");
    $(".appleHolder").css("visibility", "hidden");
    $(".spotifyHolder").css("opacity", "0");
    $(".spotifyHolder").css("visibility", "hidden");
    $(".deezerHolder").css("opacity", "0");
    $(".deezerHolder").css("visibility", "hidden");
    $(".nav__item")[0].classList.remove('nav__item--current');
    $(".nav__item")[1].classList.remove('nav__item--current');
    $(".nav__item")[3].classList.remove('nav__item--current');
    $(".nav__item")[2].classList.add('nav__item--current');
  });  

$(".deezerSource").click(function(){
    $(".sources").css("opacity", "0");
    $(".sources").css("visibility", "hidden");
    $(".sources").css("position", "absolute");
    $(".sourceWrapUnder").css("visibility", "visible");
    $(".sourceWrapUnder").css("opacity", "1");
    $(".appleHolder").css("opacity", "0");
    $(".appleHolder").css("visibility", "hidden");
    $(".spotifyHolder").css("opacity", "0");
    $(".spotifyolder").css("visibility", "hidden");
    $(".amazonHolder").css("opacity", "0");
    $(".amazonHolder").css("visibility", "hidden");
    $(".nav__item")[0].classList.remove('nav__item--current');
    $(".nav__item")[1].classList.remove('nav__item--current');
    $(".nav__item")[2].classList.remove('nav__item--current');
    $(".nav__item")[3].classList.add('nav__item--current');
    // alert($(".nav__item")[3].className);
  });  

//Nav Click()


$(".nav__item[aria-label='Item 0']").click(function(){
    $(".appleHolder").css("opacity", "1");
    $(".appleHolder").css("visibility", "visible");
    $(".spotifyHolder").css("opacity", "0");
    $(".spotifyHolder").css("visibility", "hidden");
    $(".amazonHolder").css("opacity", "0");
    $(".amazonHolder").css("visibility", "hidden");
    $(".deezerHolder").css("opacity", "0");
    $(".deezerHolder").css("visibility", "hidden");
  });

$(".nav__item[aria-label='Item 1']").click(function(){
    $(".spotifyHolder").css("visibility", "visible");
    $(".spotifyHolder").css("opacity", "1");
    $(".appleHolder").css("opacity", "0");
    $(".appleHolder").css("visibility", "hidden");
    $(".amazonHolder").css("opacity", "0");
    $(".amazonHolder").css("visibility", "hidden");
    $(".deezerHolder").css("opacity", "0");
    $(".deezerHolder").css("visibility", "hidden");
  });  

$(".nav__item[aria-label='Item 2']").click(function(){
    $(".amazonHolder").css("visibility", "visible");
    $(".amazonHolder").css("opacity", "1");
    $(".appleHolder").css("opacity", "0");
    $(".appleHolder").css("visibility", "hidden");
    $(".spotifyHolder").css("opacity", "0");
    $(".spotifyHolder").css("visibility", "hidden");
    $(".deezerHolder").css("opacity", "0");
    $(".deezerHolder").css("visibility", "hidden");
  });  

$(".nav__item[aria-label='Item 3']").click(function(){
    $(".deezerHolder").css("visibility", "visible");
    $(".deezerHolder").css("opacity", "1");
    $(".appleHolder").css("opacity", "0");
    $(".appleHolder").css("visibility", "hidden");
    $(".spotifyHolder").css("opacity", "0");
    $(".spotifyolder").css("visibility", "hidden");
    $(".amazonHolder").css("opacity", "0");
    $(".amazonHolder").css("visibility", "hidden");
  });  



    });

// Author Hover

$(".authorWrap:first-child").hover(function(){
  $(".juliPhoto").css("transform", "scale(1.2)");
  $(".juliPhoto1200").css("transform", "scale(1.2)");},
  function(){
    $(".juliPhoto").css("transform", "scale(1)");
    $(".juliPhoto1200").css("transform", "scale(1)");
});

$(".authorWrap:nth-child(2)").hover(function(){
  $(".edPhoto").css("transform", "scale(1.2)");
  $(".edPhoto1200").css("transform", "scale(1.2)");},
  function(){
    $(".edPhoto").css("transform", "scale(1)");
    $(".edPhoto1200").css("transform", "scale(1)");
});


//Buy Now Hover

$(".buy_now").hover(function(){
  $(".arrow").css("padding-left", "25px");},
  function(){
    $(".arrow").css("padding-left", "15px");
});

//Mouse Icon Hover

// $(".scroll").hover(function(){
//   $(".scroll").css("margin-bottom", "25px");},
//   function(){
//     $(".scroll").css("margin-bottom", "50px");
// });

//WOW

// new WOW().init();

// wow = new WOW(
//   {
//   boxClass:     'sourceWrap',// default
//   animateClass: 'slideInLeft', // default
//   offset:       0,          // default
//   mobile:       true,       // default
//   live:         true        // default
// }
// )
// wow.init();