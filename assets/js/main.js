(function ($) {
	"use strict";

	// Meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});

	/* ----------------------------
	    Tilt Animation 
	-------------------------------*/
	$('.js-tilt').tilt({
		base: window,
		reset: true,
		scale: 1.02,
		reverse: true,
		max: 15,
		perspective: 3e3,
		speed: 4e3
	});



	
	// Mobile Side Menu
	$('.side-toggle').on('click', function () {
		$('.side-info').addClass('info-open');
		$('.offcanvas-overlay').addClass('overlay-open');
	})

	$('.side-info-close,.offcanvas-overlay').on('click', function () {
		$('.side-info').removeClass('info-open');
		$('.offcanvas-overlay').removeClass('overlay-open');
	})

	// Sticky Header Js
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("sticky");
		} else {
			$("#header-sticky").addClass("sticky");
		}
	});

	// Data-background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});

	// Preloader
	var win = $(window);
	win.on('load', function () {
		$('#pre-loader').delay(350).fadeOut('slow');
		$('body').delay(350).css({
			'overflow': 'visible'
		});
	})

	// Counter
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});

	// MagnificPopup Video View
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	// Isotop
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});

		// filter items on button click
		$('.portfolio__menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
	});

	// for menu active class
	$('.portfolio__menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});


	// Testimonial Slider Js
	var swiper = new Swiper(".testimonials__slider", {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		},
	});


	// Brand Slider Js
	var swiper = new Swiper(".brand__slider", {
		slidesPerView: 5,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			0: {
				slidesPerView: 2,
				spaceBetween: 50,
			},
			576: {
				slidesPerView: 3,
				spaceBetween: 50,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 60,
			},
			992: {
				slidesPerView: 7,
			},
		},
	});


	// WOW active
	new WOW().init();

	// InHover Active Js
	$('.hover-active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover-active').removeClass('active');
	});


})(jQuery);