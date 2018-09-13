$(document).ready(function(){


  // fancybox
   $('[data-fancybox]').fancybox({
    buttons: [
          "zoom",
          "thumbs",
          "close"
        ],
        clickOutside: "close",
        loop: true,
    });

// Валидация формы
  $(function(){
     $('#issues-form').validate({
      rules: {
       tel: {
       required: true,
       rangelength: [11, 11],
       digits: true,
       },
       question:{
        required: true,
        minlength: 15
       }
      },
      messages: {
       tel: {
       required: "Это поле обязательно к заполнению",
       digits: "В поле должны быть только цифры",
       rangelength: "Введите 11 цифр номера с восьмеркой",
       },
       question: {
       required: "Это поле обязательно к заполнению",
       minlength: "Минимальное количество символов 15" 
       },
        }
     });
  });

// Устанавливаем обработчик потери фокуса для всех полей ввода текста
     $('input#tel, textarea#message').unbind().blur( function(){

        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
         var id = $(this).attr('id');
         var val = $(this).val();

       // После того, как поле потеряло фокус, перебираем значения id, совпадающие с id данного поля
       switch(id)
       {
        // Проверка поля "Имя"
          case 'tel':
            if(val.length >= 10 && val != '')
            {
               $(this).addClass('not_error');                   
            }

            else
            {
               $(this).removeClass('not_error').addClass('error');
            }
          break;

        // Проверка поля "Сообщение"
        case 'message':
          if(val != '' && val.length < 5000)
          {
             $(this).addClass('not_error');
          }
          else
          {
             $(this).removeClass('not_error').addClass('error');
          }
        break;

       } // end switch(...)

     }); // end blur()

  $('form#issues-form').submit(function(e){
       // Запрещаем стандартное поведение для кнопки submit
       e.preventDefault();
       if($('.not_error').length == 2)
       {
           $.ajax({
                  url: 'send.php',
                  type: 'post',
                  data: $(this).serialize(),

                  beforeSend: function(xhr, textStatus){ 
                       $('form#issues-form :input').attr('disabled','disabled');
                  },

                 success: function(response){
                      $('form#issues-form :input').removeAttr('disabled');
                      $('form#issues-form :text, textarea').val('').removeClass().next('.error-box').text('');
                      alert(response);
                 }
          }); // end ajax({...})
      }
     else
     {
        return false;
     }

   }); // end submit()



});

