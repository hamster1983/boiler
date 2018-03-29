$(document).ready(function(){
	
	new WOW().init();
	
	$('.main-btns .ticket').hover(
	function(){
	  $(this).attr('src', 'img/hover-ticket.png');
	},
	function(){
	  $(this).attr('src', 'img/ticket.png');
	});
	
	$('.main-btns .part').hover(
	function(){
	  $(this).attr('src', 'img/hover-part.png');
	},
	function(){
	  $(this).attr('src', 'img/part.png');
	});
	
	$('.main-btns .program').hover(
	function(){
	  $(this).attr('src', 'img/hover-program.png');
	},
	function(){
	  $(this).attr('src', 'img/program.png');
	});
	
	$('.main-btns .sponsor').hover(
	function(){
	  $(this).attr('src', 'img/hover-sponsor.png');
	},
	function(){
	  $(this).attr('src', 'img/sponsor.png');
	});
	
	$('.kongress').hover(
	function(){
	  $(this).attr('src', 'img/hover-kongress.png');
	},
	function(){
	  $(this).attr('src', 'img/kongress.png');
	});
	
	$('.konkurs').hover(
	function(){
	  $(this).attr('src', 'img/hover-konkurs.png');
	},
	function(){
	  $(this).attr('src', 'img/konkurs.png');
	});
	
});


//слик-слайдеры
$(window).load(function() {
	
	$('.single-item').slick({
	  infinite: true,
	  autoplay: true,
	  pauseOnHover: false,
	  speed: 2000,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  dots: true,
	  cssEase: 'linear'
	});
	$("ul.slick-dots").wrapAll("<div class='container visible-lg visible-md' style='width: 140px; position: relative'></div>");
	
	$('.sup-items').slick({
	  infinite: true,
	  autoplay: true,
	  speed: 1500,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 680,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ] 
	});
	
	$('.graf-items').slick({
	  infinite: true,
	  autoplay: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 2000,
	  autoplaySpeed: 7000
	});
	
	$('.opp-items').slick({
	  fade: true,
	  infinite: true,
	  autoplay: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 2000,
	  autoplaySpeed: 7000
	})
	
	$('.part-wrap').slick({
	  infinite: true,
	  autoplay: true,
	  speed: 1500,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 680,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ] 
	});
	
});