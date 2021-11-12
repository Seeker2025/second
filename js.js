$(function(){
	$('.work__image').hover(function(){
		$(this).children().stop().animate({marginTop: '100%', opacity: 0}, 800);
	},function(){
		$(this).children().stop().animate({marginTop: '0%', opacity: 1}, 800);
	});
});