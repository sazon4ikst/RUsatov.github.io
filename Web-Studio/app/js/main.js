$(function(){

  //для input date
  $( "#datepicker" ).datepicker();

  // Для поля range
  var slider = document.getElementById('slider-color');

  noUiSlider.create(slider, {
      start: [50],
      connect: [true, false],
      range: {
        'min': 0,
          '25%': 25,
          '50%': 50,
          'max': 100
    },
    snap: true,
  });

  var connect = slider.querySelectorAll('.noUi-connect');
  var classes = ['c-1-color'];  

  for (var i = 0; i < connect.length; i++) {
      connect[i].classList.add(classes[i]);
  }

  // Плавная прокрутка
  $("#collapsibleNavId").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });

});