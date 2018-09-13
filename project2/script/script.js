$(function() {
	$('.toggles button').click(function(){
		var get_id = this.id; /*вводим переменную, которая при клике отслеживает id*/
		var get_current = $('.posts .' + get_id); /*вводим переменную, которая добавляет к клссу .posts считанное id*/

		$('.post').not(get_current).hide(500); /*функция, которая прячет все ненужные id*/
		get_current.show(500); /*и отображает нужные*/
	});

	$('#showall').click(function() { /*функция для кнопки show all при клике*/
		$('.post').show(500); /*отображает всё*/
	});
})

$(document).ready(function(){
  $('.multiple-items').slick({
    infinite: true,
  	slidesToShow: 8,
  	slidesToScroll: 3,
  	prevArrow: '<button type="button" class="slick-prev"><img src="img/Left-arrow.png"></button>',
  	nextArrow: '<button type="button" class="slick-next"><img src="img/Right-arrow.png"></button>',
  	responsive: [
    {
      breakpoint: 1024,
      settings: {
      	infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
      	infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
      	infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
});


$(document).ready(function() { // Ждём загрузки страницы
	
	$(".image").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(300); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(300);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 300);
		});
	});
	
});