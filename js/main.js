'use strict';

(function($){
	$(document).ready(function() {
        
        
           $(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = $(this).data('include') + '.html';
      $(this).load(file);
    });
  });
		
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
        
        
          $('.nav__link--min').click(function(){
            $('.nav__wrapper').toggleClass('nav__wrapper--active')
        });
       
        
        
        
 
        
    })

})(jQuery);





    