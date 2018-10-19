$(document).ready(function(){

	$('.features__wrapper').click(function() {
		var _this = $(this);
		if (_this.hasClass('disabled')){
			return
		}
		else {
			_this.toggleClass("features--border active");
			if (!$(this).data('status')) {
		  	_this.parents(".features")
		  	.find('.features__ad')
		  	.html("<p>Печень утки разварная с артишоками.</p>");

		    $(this).data('status', true);
		  }
		  else {
		  	_this.parents(".features").find('.features__ad').html("<p class='features__ad'>Чего сидишь? Порадуй котэ, <a href='#' class='features__link'>купи.</a></p>");
		    $(this).data('status', false);
		  }
			
		}
	});

	$('.disabled').parents(".features").find('.features__ad')
.html("<p class='disabled--text'>Печалька, с курой закончился.</p>");



	// $('.features__wrapper').dblclick(function() {
	// 	var _this = $(this);
	// 	_this.removeClass("disabled"); 
	// 	_this.addClass("disabled"); 

	// });

});