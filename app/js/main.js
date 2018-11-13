$(document).ready(function(){
  // Выезжающее меню 
  $('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.left_side').toggleClass('left_side-active');
    $(this).toggleClass('menu-btn-active');
  });

  // Анимация кнопки меню
  $('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('arrow');
  });


  


});