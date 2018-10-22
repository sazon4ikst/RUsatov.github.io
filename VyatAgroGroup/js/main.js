$(document).ready(function () {


// Swiper
var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      // effect: 'coverflow', //эффект перелистывания, убрал т.к. подтормаживал сайт
      loop: true,
    });

// jQuery Validation
$(".contactUs__form").validate({
	rules: {
		name:{
			required: true,
			minlength: 3,
			onfocusout: false, 
		},
		phone:{
			required: true,
			rangelength: [9, 11],
			onfocusout: false, 
			digits: true,
		},
		question:{
			required: true,
			minlength: 10,
		},
	},
	submitHandler: function(){
	 	alert('Данные отправлены'); //при успешной отправке появляется сообщение об отправлении
	 },
	errorPlacement: function(error,element) { //отключил сообщения об ошибках, по моему они лишние
    	return true;
  	}

});

// Popup
	$('.product__btn').magnificPopup({
        type: 'inline'
	});

// Кнопка "Меню" для мобильных устройств
$('.btn__menu').click(function() {
    	$(".nav-menu").slideToggle(400); 
    });
});