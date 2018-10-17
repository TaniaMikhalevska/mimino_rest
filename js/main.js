'use strict';


/*var data = [
    {img:'images/hotel/new/10.jpg', title: 'ЛЮКС'},
    {img:'images/hotel/new/11.jpg', title: 'ЛЮКС'},
    {img:'images/hotel/new/12.jpg', title: 'СТАНДАРТ'},
    {img:'images/hotel/new/13.jpg', title: 'ЛЮКС'},
    {img:'images/hotel/new/14.jpg', title: 'ПОЛУЛЮКС'},
    {img:'images/hotel/new/15.jpg', title: 'СТАНДАРТ'},
           ],*/
var data = [
    {img:'images/hotel/new/10.jpg', title: 'ЛЮКС'},
    {img:'images/hotel/new/11.jpg', title: 'ЛЮКС'},
    {img:'images/hotel/new/12.jpg', title: 'СТАНДАРТ'},
    {img:'images/hotel/new/13.jpg', title: 'ЛЮКС'},
    {img:'images/hotel/new/14.jpg', title: 'ПОЛУЛЮКС'},
    {img:'images/hotel/new/15.jpg', title: 'СТАНДАРТ'},
           ],
    newBtn = document.getElementById('new'),
    editableRow =document.getElementById('editableRow');
    
if (newBtn) {
    newBtn.addEventListener('click', hideBtn);
    newBtn.addEventListener('click', addItem);
    newBtn.addEventListener('click', returnBtn);
    newBtn.addEventListener('click', cutData);
}


function hideBtn() {
    newBtn.style="display: none";
}

if (data.length ==0) {
     hideBtn();
}
function returnBtn() {
    newBtn.style="display: block";
    editableRow.appendChild(newBtn); 
}
function cutData() {
    data.splice(0,3);
}

function addItem() {
    var length = data.length < 3 ? data.length : 3;
    for (var i = 0; i < length; i++) {
    var item = document.createElement('div');
    item.className = 'col-12 col-sm-6 col-xl-4 col-gallery';
    item.innerHTML = `  <a data-fancybox="gallery" href=                               ${data[i].img} class="section__link">
                        <div class="section__item"><img src=${data[i].img} alt="" class="section__img"></div>
                        <p class="section__item-title">
                        ${data[i].title}
                        </p>
                    </a>`;
    
    editableRow.appendChild(item);
        
        
        }
}

if (data.length < 1) {
     hideBtn();
}






(function($){
	$(document).ready(function() {
        //include
           $(function(){
    var includes = $('[data-include]');
    $.each(includes, function(){
      var file = 'include/'+$(this).data('include') + '.html';
      $(this).load(file);
    });
  });
		//slider
        $('.hotel__slider').slick({
            infinite: true,
            prevArrow: '<div class="hotel__arrow--prev hotel__arrow"></div>',
            nextArrow: '<div class="hotel__arrow hotel__arrow--next"></div>',
        });
        //btn-top
        var $btnTop =$(".btn--top");
        $(window).on("scroll", function() {
            if ($(window).scrollTop() >= 20) {
               $btnTop.fadeIn(); 
            }
            else {
               $btnTop.fadeOut(); 
            }
        })
        //scrolling
    $btnTop.on("click", function() {
        $("html, body").animate({scrollTop:0}, 900)
    }); 
      
        
        //burger menu
          $(document).on('click', '.nav__link--min', function(){
            $('.nav__wrapper').toggleClass('nav__wrapper--active')
        });
       
        
        
        
 
        
    })

})(jQuery);





    