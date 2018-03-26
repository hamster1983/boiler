$(document).ready(function(){

	//проверяем на IE и подсовываем другой блок партнёров
	var browser = function() {
		if (!!navigator.userAgent.match(/Trident\/7\./) || $.browser.msie) {
			$('.infopart .wrap').css('display', 'none');
			$('.infopart .ie-wrap').css('display', 'block');
		}
		else if (!navigator.userAgent.match(/Trident\/7\./) || !$.browser.msie) {
			$('.infopart .ie-wrap').css('display', 'none');
		}
	}();
	
	new WOW().init();
	
	//вращаем кнопку меню в мобильной версии
	/*$('button.navbar-toggle').click(function(){
		$('button.navbar-toggle img').toggleClass('rotate');
	});*/
	
	
	/*(function(){
			var date_start = new Date("november,21,2017,10:00:00");
			var one_day = 1000 * 60 * 60 * 24;
			var date_now = new Date();
			var diff = Math.abs(date_start.getTime() - date_now.getTime());
			var num_days = Math.round(diff/one_day).toString();
			var day;
		    if (num_days.substr(-1) == 1 && num_days.substr(-2) != 11) { day = 'день';}
		    else if (num_days.substr(-1) == 2 && num_days.substr(-2) != 12) { day = 'дня';}
		    else if (num_days.substr(-1) == 3 && num_days.substr(-2) != 13) { day = 'дня';}
		    else if (num_days.substr(-1) == 4 && num_days.substr(-2) != 14) { day = 'дня';}
		    else { day = 'дней';}
		$('.aside .counter .num').text(num_days);
		$('.aside .counter .days').append(day);
	}());*/
	
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
	
	/*$('.partkonk').hover(
	function(){
	  $(this).attr('src', 'img/hover-part.png');
	},
	function(){
	  $(this).attr('src', 'img/part.png');
	});
	
	$('.kong').hover(
	function(){
	  $(this).attr('src', 'img/hover-kong.png');
	},
	function(){
	  $(this).attr('src', 'img/kong.png');
	});
	
	$('.watch-foto').hover(
	function(){
	  $(this).attr('src', 'img/hover-watch-foto.png');
	},
	function(){
	  $(this).attr('src', 'img/watch-foto.png');
	});*/
	
	
	//убираем фокус с баннеров инфорпартнеров при клике на них
	$('.cube a').click(function(){
		$(this).blur();
	});
	
});


//слик-слайдер
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
	
	/*$('.opp-items').slick({
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 30000,
	  speed: 2000,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  dots: false,
	  cssEase: 'linear'
	});*/
	
	$('.mob-items').slick({
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 30000,
	  speed: 2000,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  dots: false,
	  cssEase: 'linear'
	});
	
	/*$('.foto-items').slick({
	  infinite: true,
	  autoplay: false,
	  speed: 2000,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	});*/
	
	var partside = [$('.front'), $('.back'), $('.top'), $('.bottom')];
	
	for(var j = 0; j < partside.length; j++) {
		
		if(j == 0 || j == 1) {
			partside[j].slick({
				  rtl: true,
				  arrows: false,
				  dots: false,
				  infinite: true,
				  autoplay: true,
				  autoplaySpeed: 1500,
				  speed: 1500,
				  slidesToShow: 3,
				  slidesToScroll: 1,
				  responsive: [
					{
					  breakpoint: 767,
					  settings: {
						slidesToShow: 2,
					  }
					},
					{
					  breakpoint: 550,
					  settings: {
						slidesToShow: 1,
					  }
					}
				  ]
			});
		}
		
		else {
			partside[j].slick({
			  arrows: false,
			  dots: false,
			  infinite: true,
			  autoplay: true,
			  autoplaySpeed: 1500,
			  speed: 1500,
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  responsive: [
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 550,
				  settings: {
					slidesToShow: 1,
				  }
				}
			  ]
			});
		}
	}
	
	$('.ie-wrap').slick({
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