$(document).ready(function(){ //запуск скриптов после загрузки документа

//выезжающее меню
	$('.left-sidebar_menu-btn').click(function(){ //находим кнопку, ставим обработчик при клике
		$('.left-sidebar_menu-links').slideToggle(400); //при клике на кнопку выезжает меню
	}); //end click()

//добавляем метод для validate()
$.validator.addMethod("latin", function(value, element) {
    return this.optional(element) || /^[a-zA-Z ]+$/i.test(value);
}, "Используйте пожалуйста латиницу"); //end addMethod(latin)
  
// Валидация формы
	$("#details").validate({
	  rules: { //правила для input'ов
	    card_number1: { //поиск по имени input'a
	    	required: true, //обязательное поле
	    	rangelength: [4, 4], //длина не менее и не более 4 символов
	    	onfocusout: false, //при потере фокуса сразу проверяет корректность заполнения
	    	digits: true, //только цифры
	  	},
	    card_number2: {
	    	required: true,
	    	rangelength: [4, 4],
	    	onfocusout: false,
	    	digits: true,
	  	},
	    card_number3: {
	    	required: true,
	    	rangelength: [4, 4],
	    	onfocusout: false,
	    	digits: true,
	  	},
	    card_number4: {
	    	required: true,
	    	rangelength: [4, 4],
	    	onfocusout: false,
	    	digits: true,
	  	},
	    card_owner: {
	      required: true,
	      minlength: 4, //минимальная длина символов в поле
	      onfocusout: false,
	      latin: "",
	    },
	    cvc: {
	    	required: true,
	    	rangelength: [3, 3],
	    	onfocusout: false,
	    	digits: true,
	    }
	  }, //end rules
	 submitHandler: function(){
	 	alert('Данные отправлены'); //при успешной отправке появляется сообщение об отправлении
	 }, //end submitHandler
	 errorElement: "span", //меняет тег с текстом вывода ошибок на span
	}); //end validate(...)

	$('select').styler(); //подключение функции для кастомизации <select>

	//функция для запрета ввода символов кроме цифр
	$(".only_digits").keydown(function(event) {
    // Разрешаем: backspace, delete, tab и escape
    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
    // Разрешаем: Ctrl+A
    (event.keyCode == 65 && event.ctrlKey === true) || 
    // Разрешаем: home, end, влево, вправо
    (event.keyCode >= 35 && event.keyCode <= 39)) {
      // Ничего не делаем
      return;
    }
    else {
	    // Убеждаемся, что это цифра и останавливаем событие keypress
	    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
    }
  }); //end keydown(...)

	//функция для переноса фокуса при заполнении строки инпута
	$('.card-number').keyup(function(){
  		if($(this).val().match(/^\d{4}$/)){
    	$(this).next('.card-number').focus();
  		}
  		else{
    		$(this).val();
  		}
	}); //end keyup(...)

}); //end ready(...)