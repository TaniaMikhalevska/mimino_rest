'use strict';

(function($){
	$(document).ready(function() {
		/* slick
        $('.header__slider').slick({
        infinite: true,
        arrows: false,
        speed: 4000,
        fade: true,
        cssEase: 'linear',
        //autoplay: true
  });*/

        $('.hotel__slider').slick({
            infinite: true,
            prevArrow: '<div class="hotel__arrow--prev hotel__arrow"></div>',
            nextArrow: '<div class="hotel__arrow hotel__arrow--next"></div>',
        });
        
        var $btnTop =$(".btn--top");
        $(window).on("scroll", function() {
            if ($(window).scrollTop() >= 20) {
               $btnTop.fadeIn(); 
            }
            else {
               $btnTop.fadeOut(); 
            }
        })
    $btnTop.on("click", function() {
        $("html, body").animate({scrollTop:0}, 900)
    });    

        
	});
    
    
    
})(jQuery);
  
        