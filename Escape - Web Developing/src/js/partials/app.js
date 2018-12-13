$(document).ready(function () {
  $(window).scroll(function() {
    var nav = $('.navbar');
    if($(this).scrollTop() >= 10) {
      nav.removeClass('bg-transparent');
      nav.removeClass('container');
      nav.addClass('bg-dark');
      nav.addClass('container-fluid');
      
    }
    else{
      nav.removeClass('bg-dark');
      nav.removeClass('container-fluid');
      nav.addClass('container');
      nav.addClass('bg-transparent');
    }
  });  
});