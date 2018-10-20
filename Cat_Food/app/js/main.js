$(document).ready(function(){
  
  // Изменение цвета блока при клике
	$('.features__wrapper').click(function() {
		var _this = $(this);

		if (_this.hasClass('disabled')){ //условие для класса disabled
			return;
		}

		else {
			_this.toggleClass("features--border active"); //переключение классов у блока

			if (_this.hasClass('active')) {	//условие при переключении класса на active
				_this.parents('.features').find('.main--text').css({"display":"none"});
				_this.parents('.features').find('.active--text').css({"display":"block"});
		  }

		  else { //условие при переключении класса на features--border
		  	_this.parents('.features').find('.active--text').css({"display":"none"});
				_this.parents('.features').find('.main--text').css({"display":"block"});
		  }			
		}
	});

	// Клик на ссылку
	$('.features__link').click(function() {
		var _this = $(this);
		_this.parents('.features').find('.features__wrapper').addClass('active');
		_this.parents('.features').find('.features__wrapper').removeClass('features--border');
		_this.parents('.features').find('.main--text').css({"display":"none"});
		_this.parents('.features').find('.active--text').css({"display":"block"});
	});
	
	// Изменение текста для класса disabled
	$('.disabled').parents('.features').find('.main--text').css({"display":"none"});
	$('.disabled').parents('.features').find('.disabled--text').css({"display":"block"});

	// Изменение текста для класса active
	$('.active').parents('.features').find('.main--text').css({"display":"none"});
	$('.active').parents('.features').find('.active--text').css({"display":"block"});

});