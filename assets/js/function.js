// JavaScript Document
$(document).ready(function(e){
	$(".device-nav").click(function(){
		$(this).find('span').toggleClass('fa-times').toggleClass('fa-bars');
		$("nav").toggleClass("reveal");

		$('.navigation ul li a').click(function(){
			$('.device-nav').find('span').addClass('fa-bars').removeClass('fa-times');
			$("nav").removeClass("reveal");
		});
	});
	$('.navigation ul li a').smoothScroll();
	$('.start-arrows a').smoothScroll();
});

$(document).ready(function() {
	$('a[href*=#]').bind('click', function(e) {
			e.preventDefault();
			var target = $(this).attr("href");
			$('html, body').stop().animate({
					scrollTop: $(target).offset().top
			}, function() {
					location.hash = target;
			});
			return false;
	});
});
$(window).scroll(function() {
	var scrollDistance = $(window).scrollTop() + 75;
	$('.page-section').each(function(i) {
			if ($(this).position().top <= scrollDistance) {
					$('.navigation a.active').removeClass('active');
					$('.navigation a').eq(i).addClass('active');
			}
	});
}).scroll();
$(window).scroll(function(){
	var scroll=$(window).scrollTop();
	if(scroll>=100)
	{
		$('header').addClass('fixed')
	}
	else
	{
		$('header').removeClass('fixed')
	}
});