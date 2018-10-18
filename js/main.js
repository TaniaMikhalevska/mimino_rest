'use strict';



var data = [
    {img:'images/hotel/new/10.jpg', title: '«СТАНДАРТ»'},
    {img:'images/hotel/new/11.jpg', title: '«СТАНДАРТ»'},
    {img:'images/hotel/new/12.jpg', title: '«СТАНДАРТ»'},
    {img:'images/hotel/new/13.jpg', title: '«ЛЮКС»'},
    {img:'images/hotel/new/14.jpg', title: '«ЛЮКС»'},
    {img:'images/hotel/new/15.jpg', title: '«ЛЮКС»'},
    {img:'images/hotel/new/16.jpg', title: '«Люкс 2-комнатный»'},
    {img:'images/hotel/new/17.jpg', title: '«Люкс 2-комнатный»'},
    {img:'images/hotel/new/18.jpg', title: '«Люкс 2-комнатный»'},
     {img:'images/hotel/new/19.jpg', title: '«Люкс 2-комнатный»'},
           ],
    newBtn = document.getElementById('new'),
    editableRow =document.getElementById('editableRow');
    
if (newBtn) {
    if ( data.length > 3) {
    newBtn.addEventListener('click', addItem);
    newBtn.addEventListener('click', cutData); 
   newBtn.addEventListener('click', returnBtn);}
    if ( data.length <= 3) {
       newBtn.addEventListener('click', addItem);
    newBtn.addEventListener('click', cutData); 
         newBtn.addEventListener('click', hideBtn); 
    }
}

function hideBtn() {
   $('#new').remove();
    /*
      newBtn.style="display: none";*/ 
}

function returnBtn() {
    editableRow.appendChild(newBtn); 
}
function cutData() {
    data.splice(0,3);
}

function addItem() {
    var length = data.length < 4 ? data.length : 3;
    for (var i = 0; i < length; i++) {
    var item = document.createElement('div');
    item.className = 'col-12 col-sm-6 col-xl-4 col-gallery';
    item.innerHTML = `  <a data-fancybox="gallery" href=${data[i].img} class="section__link">
                        <div class="section__item"><img src=${data[i].img} alt="" class="section__img"></div>
                        <p class="section__item-title">
                        ${data[i].title}
                        </p>
                    </a>`;

            
        }
        
     }


(function($){
	$(document).ready(function() {
        //include  
    var includes = $('[data-include]');
    $.each(includes, function(){
      var file = 'include/'+$(this).data('include') + '.html';
      $(this).load(file);
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
            if ($(window).scrollTop() >= 200) {
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

 


function initMap() {
           var center = {lat: 49.599323, lng: 34.525987},
               map  = new google.maps.Map(document.getElementById('map'), {
                          zoom: 15, 
                          center: center,
                          disableDefaultUI: true,
                          zoomControl: true,
                   append:true
                   
               }),
               marker = new google.maps.Marker({
                        title: 'Ресторан грузинской кухни "Мимино"',
                        position: {lat: 49.599323, lng: 34.525987},
                        icon: 'images/marker.png',
                        map: map
               }),
               infowindow =new google.maps.InfoWindow;
          
          google.maps.event.addListener(marker, 'click', (function(marker) {
           var info = '<div class="window">'+'<h1 class="window__title">' +marker.title+'</h1>'+'<p>'+'Добро пожаловать!'+'</p>'+'</div>';
           return function() {
           infowindow.setContent(info);
           infowindow.open(map, marker);
                    }})(marker));

               };
google.maps.event.addDomListener(window, 'load', initMap);  
//modal*/
google.maps.event.addDomListener(window, "resize", resizingMap());

$('#modal').on('show.bs.modal', function() {
 
   resizeMap();
})

function resizeMap() {
   if(typeof map =="undefined") return;
   setTimeout( function(){resizingMap();} , 2000);
}

function resizingMap() {
   if(typeof map =="undefined") return;
   var center = map.getCenter();
   google.maps.event.trigger(map, "resize");
   map.setCenter(center); 
}






    