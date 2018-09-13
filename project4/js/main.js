$(document).ready(function(){

	//initialize swiper
    var mySwiper = new Swiper ('.swiper-main-container', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-main-button-next',
        prevEl: '.swiper-main-button-prev',
      },
      pagination: {
        el: '.swiper-main-pagination',
        dynamicBullets: true,
        clickable: true,
      }
    });

    //меню для телефонов
    $('.menu_btn').click(function() {
    	$(".links").slideToggle(400); 
    });

    //прилипается меню
    // var HeaderTop = $('.menu').offset().top;        
    // $(window).scroll(function(){
    //         if( $(window).scrollTop() > HeaderTop ) {
    //                 $('.menu').css({position: 'fixed', top: '0px', right: '0px', left: '0px'}).fadeIn(400);
    //         } else {
    //                 $('.menu').css({position: 'static'});
    //         }
    // });

    // бегунок для фильтра
    $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1000,
      max: 100000,
      step: 1000,
      values: [ 20000, 80000 ],
      slide: function( event, ui ) { //магия прокрутки, отображает значение в инпутах
        $( "#min-value" ).val( ui.values[ 0 ]);
        $( "#max-value" ).val( ui.values[ 1 ]);
      }          
    });
      $( "#min-value" ).val( $( "#slider-range" ).slider( "values", 0 ));
      $( "#max-value" ).val( $( "#slider-range" ).slider( "values", 1 ));

      // магия введения числа, при введении бегунок перемещается
      $("#min-value").change(function(){
        var value1=$("#min-value").val();
        var value2=$("#max-value").val();

        if (value1 < 1000) { value1 = 1000; $("#min-value").val(1000)}

          if(parseInt(value1) > parseInt(value2)){
          value1 = value2;
          $("#min-value").val(value1);
        }
        $("#slider-range").slider("values",0,value1);  
      });

  
      $("#max-value").change(function(){
        var value1=$("#min-value").val();
        var value2=$("#max-value").val();
        
        if (value2 > 100000) { value2 = 100000; $("#max-value").val(100000)}

        if(parseInt(value1) > parseInt(value2)){
          value2 = value1;
          $("#max-value").val(value2);
        }
        $("#slider-range").slider("values",1,value2);
      });
    } );

    // Кнопки фильтра
    $('.btn-filter').click(function() {
      $(this).next().slideToggle('fast'); 
    });

    //фильтр для телефонов
    $('.mobile-filter_btn').click(function() {
      $(".left-menu_filter").slideToggle(400); 
    });

    // слайдер для карточки товара
   $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
      nextArrow: '<svg class="slick-next slick-arrow" xmlns="http://www.w3.org/2000/svg viewBox="0 0 27 44" width="10" ><path transform="rotate(180 12.050000190734863,22) " id="svg_1" fill="#093E8C" d="m0,22l22,-22l2.1,2.1l-19.9,19.9l19.9,19.9l-2.1,2.1l-22,-22z"/></svg>',
      prevArrow: '<svg class="slick-prev slick-arrow" xmlns="http://www.w3.org/2000/svg viewBox="0 0 27 44" width="10" ><path d="M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z" fill="#093E8C"/></svg>',
    // centerMode: true,
    focusOnSelect: true,
    });

    //навигация карточки товара
    // $('.nav-link').click(function() {
    //   $('.nav-link').removeClass('active')
    //   $(this).addClass('active');
    //   // $(this).find('info-area-text')
    // });

    // $('.description').click(function() {
    //     $('.description-text').css({display: 'block'})
    //     $('.char-text').css({display: 'none'})
    //     $('.feedback-text').css({display: 'none'})
    //   });

    // $('.char').click(function() {
    //     $('.char-text').css({display: 'block'})
    //     $('.description-text').css({display: 'none'})
    //     $('.feedback-text').css({display: 'none'})
    //   });
      
    // $('.feedback').click(function() {
    //   $('.feedback-text').css({display: 'block'})
    //   $('.char-text').css({display: 'none'})
    //     $('.description-text').css({display: 'none'})
    //   });

    $('.nav-link').click(function() {
    var _this = $(this),
          links = _this.parents('.info-area').find('.nav-tabs .nav-link'),
          texts = _this.parents('.info-area').find('.tabs-text .info-area-text'),
          active_item = _this.index(links);

    links.removeClass('active');
      _this.addClass('active');
      texts.removeClass('active');
    texts.eq(active_item).addClass('active');
    });

});
