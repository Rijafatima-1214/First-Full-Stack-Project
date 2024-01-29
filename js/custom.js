$(window).on('load', function(){
	// Code ? When the page finished loading.

	// call init()
	/*$("#loading").fadeOut();*/
	init();





});
function init(){
  wow(); 
  popup();
  smoothScroll();
  owlslider();
  isotope();
}

var fselector = 0;
var work_grid = $("#work-grid, #isotope");

function isotope(){
    (function($){
     "use strict";
     var isotope_mode;
     if (work_grid.hasClass("masonry")){
         isotope_mode = "masonry";
     } else{
         isotope_mode = "fitRows"
     }
     
     $(".filter").click(function(){
         $(".filter").removeClass("active");
         $(this).addClass("active");
         fselector = $(this).attr('data-filter');
         
         work_grid.isotope({
             itemSelector: '.current',
             layoutMode: isotope_mode,
             filter: fselector
         });
         return false;
     });
        
     if (window.location.hash) {
         $(".filter").each(function(){
             if ($(this).attr("data-filter") == "." + window.location.hash.replace("#", "")) {
                 $(this).trigger('click');
                 
                 $("html, body").animate({
                     scrollTop: $("#portfolio").offset().top
                 });
                 
             }
         });
     }

     work_grid.imagesLoaded(function(){
         work_grid.isotope({
             itemSelector: '.current',
             layoutMode: isotope_mode,
             filter: fselector
         });
     });
        
        
    })(jQuery);
}

function mixitup () {
  $("#protfolio-box").mixItUp({
    animation: {
      duration: 580,
      effects: 'fade stagger(34ms) translateZ(560px)',
      easing: 'cubic-bezier(0.39, 0.575, 0.565, 1)'
    }
  });
}

// swiper function
function swiper () {
var mySwiper = $('.swiper-container').swiper({
    //Your options here:
    mode:'horizontal',
    loop: true,
   
    //etc..
  });


  $('.right').on('click', function  () {
    mySwiper.swipeNext();
  })
  $('.left').on('click', function  () {
    mySwiper.swipePrev();
  })

  // mySwiper.enableKeyboardControl();
}
// wow for on scroll animations
function wow(){
  new WOW().init();
}
//Magnific Pop up 
function popup(){
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Waseem Barcha</small>';
      }
    }
  });
  $('.popup-gallery-blog').magnificPopup({
    delegate: 'span',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    }
  });

}


/* Owl Carousel */

function owlslider(){
  $("#owl-team").owlCarousel({
    itemsCustom : [
        [0, 1],
        [600, 2],
        [1000, 3]
      ],
    slideSpeed : 500,
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    autoHeight : false,
    navigation:true,
    navigationText: [
      "<i class='fa fa-angle-left fa-2x'></i>",
      "<i class='fa fa-angle-right fa-2x'></i>"
      ],
  });
  $(".owl-rewiew").owlCarousel({
    itemsCustom : [
        [0, 1],
        [700, 2]
      ],
    slideSpeed : 500,
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    autoHeight : false,
    navigation:false
  });

  $("#owl-clients3").owlCarousel({
   items : 4,
    autoPlay: 5000,
    slideSpeed : 1000,
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    autoHeight : false,
    navigation:false,
  });
  $("#img-slider").owlCarousel({
  autoPlay: 5000,
  items : 1,
  slideSpeed : 1000,
  singleItem:true,
    navigation:true,
    navigationText: [
      "<i class='fa fa-angle-left fa-2x'></i>",
      "<i class='fa fa-angle-right fa-2x'></i>"
      ],
  });
}




// smooth scroll
function smoothScroll () {	
	$(".smooth-scroll").smoothScroll({
		speed: 1500,
		offset: -60,
	});	
	
}




$('car-slider').carousel();
$('a[data-slide="prev"]').click(function () {
    $('#car-slider').carousel('prev');
});

$('a[data-slide="next"]').click(function () {
    $('#car-slider').carousel('next');
});

// ********************************************
// 
// 
//  carouesl slider customuzation  
// 
// 
// ********************************************






$(document).ready( function () {
    $('#car-slider').owlCarousel({
        // Other options go here
        // ...,
        
        items: 1,

      itemsDesktop : [1199, 1],
      itemsDesktopSmall : [979, 1],
      itemsTablet : [768, 1],
      itemsMobile : [479, 1],
    navigationText : ['<i class="fa fa-angle-left" style="font-size:20px;line-height:45px"></i>','<i class="fa fa-angle-right" style="font-size:20px;line-height:45px"></i>'],
    autoPlay: true,
    responsive: true,
    responsiveRefreshRate:100,
    responsiveBaseWidth: window,
    autoHeight: false,
    pagination:true,
    navigation : true,
    singleItem : true,
    stopOnHover: true,

    slideSpeed: 600,
    // transitionStyle : true,
    transitionStyle : "fade",
    beforeInit: function(){
          var wow = new WOW(
        {
          boxClass:     'slider-wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
        }
      );
      wow.init();

    },

        onInitialized: function() {
            if ($('#car-slider').children().length == 1) {
                 $('#car-slider').trigger('autoplay.stop.owl');
            }

       
        },

        addClassActive: true,
      afterMove: function(){
          var wow = new WOW(
        {
          boxClass:     'slider-wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
        }
      );
      wow.init();
      }

    });
});
