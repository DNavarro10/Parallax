/* funcion para el parallax*/
$(document).ready(function(){
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion = barra * 0.25;

		$('body').css({
			'background-position': '0 -' + posicion + 'px'
		});
	});
});

/*  funcion para el mav*/
$(document).ready(function(){
	var altura = $('.menu').offset().top;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura) {
			$('.menu').addClass('menu-fixed');
		}else{
			$('.menu').removeClass('menu-fixed');
		}
	});
});