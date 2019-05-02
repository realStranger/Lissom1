$( ".album1" ).hover(
  function() 
  {
    $( ".album2" ).css('opacity', '0');
    $( ".albumText1" ).css('opacity', '0');
    $( ".albumText2" ).css('opacity', '0');
    $( ".albumText1" ).css('visibility', 'hidden');
    $( ".albumText2" ).css('visibility', 'hidden');
    $( ".sectionHeader" ).text('Lissom');
    $( ".album1Cover" ).css('transform', 'perspective(850px) rotateY(15deg) translate3d(-450px,0,0)');
    $( ".album1Cover" ).css('box-shadow', '-10px 10px 18px 6px rgba(51,51,51,.2)');
    $( ".album1Description" ).css('transition-delay', '1s');
    $( ".album1Description" ).css('visibility', 'visible');
    $( ".album1Description" ).css('opacity', '1');
  },
  function() 
  {
    $( ".album2" ).css('opacity', '1');
    $( ".albumText1" ).css('opacity', '1');
    $( ".albumText2" ).css('opacity', '1');
    $( ".albumText1" ).css('visibility', 'visible');
    $( ".albumText2" ).css('visibility', 'visible');
    $( ".sectionHeader" ).text('Albums');
    $( ".album1Cover" ).css('transform', 'perspective(850px) rotateY(0) translate3d(0,0,0)');
    $( ".album1Cover" ).css('box-shadow', 'none');
    $( ".album1Description" ).css('transition-delay', '0s');
    $( ".album1Description" ).css('visibility', 'hidden');
    $( ".album1Description" ).css('opacity', '0');

  }
);


$( ".album1Description" ).hover(
  function() 
  {
    $( ".album2" ).css('opacity', '0');
    $( ".albumText1" ).css('opacity', '0');
    $( ".albumText2" ).css('opacity', '0');
    $( ".albumText1" ).css('visibility', 'hidden');
    $( ".albumText2" ).css('visibility', 'hidden');
    $( ".sectionHeader" ).text('Lissom');
    $( ".album1Cover" ).css('transform', 'perspective(850px) rotateY(15deg) translate3d(-450px,0,0)');
    $( ".album1Cover" ).css('box-shadow', '-10px 10px 18px 6px rgba(51,51,51,.2)');
    $( ".album1Description" ).css('transition-delay', '1s');
    $( ".album1Description" ).css('visibility', 'visible');
    $( ".album1Description" ).css('opacity', '1');
  },
  function() 
  {
    $( ".album2" ).css('opacity', '1');
    $( ".albumText1" ).css('opacity', '1');
    $( ".albumText2" ).css('opacity', '1');
    $( ".albumText1" ).css('visibility', 'visible');
    $( ".albumText2" ).css('visibility', 'visible');
    $( ".sectionHeader" ).text('Albums');
    $( ".album1Cover" ).css('transform', 'perspective(850px) rotateY(0) translate3d(0,0,0)');
    $( ".album1Cover" ).css('box-shadow', 'none');
    $( ".album1Description" ).css('transition-delay', '0s');
    $( ".album1Description" ).css('visibility', 'hidden');
    $( ".album1Description" ).css('opacity', '0');

  }
);

// $( ".album2" ).hover(
//   function() 
//   {
//     $( ".album1" ).css('opacity', '0');
//     $( ".albumText1" ).css('opacity', '0');
//     $( ".albumText2" ).css('opacity', '0');
//     $( ".albumText1" ).css('visibility', 'hidden');
//     $( ".albumText2" ).css('visibility', 'hidden');
//     $( ".sectionHeader" ).text('Lissom');
//     $( ".album2Cover" ).css('transform', 'perspective(850px) rotateY(-10deg) translate3d(50px,0,0)');
//     $( ".album2Cover" ).css('box-shadow', '10px 10px 18px 6px rgba(51,51,51,.2)');
//     $( ".album2Description" ).css('transition-delay', '1s');
//     $( ".album2Description" ).css('visibility', 'visible');
//     $( ".album2Description" ).css('opacity', '1');
    
//   },
//   function() 
//   {
//     $( ".album1" ).css('opacity', '1');
//     $( ".albumText1" ).css('opacity', '1');
//     $( ".albumText2" ).css('opacity', '1');
//     $( ".albumText1" ).css('visibility', 'visible');
//     $( ".albumText2" ).css('visibility', 'visible');
//     $( ".sectionHeader" ).text('Albums');
//     $( ".album2Cover" ).css('transform', 'perspective(850px) rotateY(0) translate3d(0,0,0)');
//     $( ".album2Cover" ).css('box-shadow', 'none');
//     $( ".album2Description" ).css('transition-delay', '0s');
//     $( ".album2Description" ).css('visibility', 'hidden');
//     $( ".album2Description" ).css('opacity', '0');
//   }
// );

$( ".c1" ).hover(
  function() 
  {
    $( ".c1" ).css('border', '7px solid white');
    $( ".c1" ).css('box-shadow', '1px 1px 3px 2px rgba(0,0,0,0.5)');
    $( ".c1" ).css('clip-path', 'polygon(0 0px, 0 100%, 100% 100%, 100% 0)');
    $( ".c1" ).css('z-index', '4');
    $( ".c1" ).css('transition', 'border 2s ease, clip-path 2s ease');
  },
  function() 
  {
    $( ".c1" ).css('clip-path', 'polygon(0 0, 0 100%, 100% 0px, 10% 0)');
    $( ".c1" ).css('transition', 'border 2s ease, clip-path 2s ease, z-index 0s 2s');
    $( ".c1" ).css('z-index', '1');
    $( ".c1" ).css('border', '0px solid white');
  }
);

$( ".c2" ).hover(
  function() 
  {
    $( ".c2" ).css('border', '7px solid white');
    $( ".c2" ).css('box-shadow', '1px 1px 3px 2px rgba(0,0,0,0.5)');
    $( ".c2" ).css('clip-path', 'polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)');
    $( ".c2" ).css('z-index', '4');
    $( ".c2" ).css('transition', 'border 2s ease, clip-path 2s ease');
  },
  function() 
  {
    $( ".c2" ).css('clip-path', 'polygon(100% 0%, 100% 100%, 80% 100%, 0% 100%)');
    $( ".c2" ).css('transition', 'border 2s ease, clip-path 2s ease, z-index 0s 2s');
    $( ".c2" ).css('z-index', '1');
    $( ".c2" ).css('border', '0px solid white');
  }
);


$(".main").onepage_scroll({
  sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
  pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
  loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true,                  // You can activate the keyboard controls
  responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                   // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                   // the browser's width is less than 600, the fallback will kick in.
  direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});