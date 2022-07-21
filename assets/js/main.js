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
				slidesPerView: 6,
				spaceBetween: 70,
			},
		},
	});


	// WOW active
	new WOW().init();

	// InHover Active Js
	$('.hover-active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover-active').removeClass('active');
	});


	const ProgressOnScroll = () => {
		const d = document;
		const win = window;
		win.addEventListener('scroll', () => {
			const scroll = d.getElementById("scrollBarTop"),
				w = d.documentElement.scrollTop,
				h = d.body.scrollHeight,
				width = Math.ceil(w / (h - win.innerHeight) * 100);

			scroll.style.width = `${width}%`;
		});
	};

	ProgressOnScroll();


	// ------------ swiper sliders -----------
	$(document).ready(function () {

		// ------------ works sliders -----------
		var swiper = new Swiper('.screenshots-slider.style-4 .swiper-container', {
			slidesPerView: 4,
			spaceBetween: 0,
			centeredSlides: true,
			speed: 1000,
			pagination: false,
			navigation: false,
			mousewheel: false,
			keyboard: true,
			autoplay: {
				delay: 4000,
			},
			loop: true,
			breakpoints: {
				0: {
					slidesPerView: 2,
				},
				480: {
					slidesPerView: 2,
				},
				787: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				}
			}
		});

	});


	// CUSTOM CURSOR
	document.addEventListener("DOMContentLoaded", function (event) {
		var cursor = document.querySelector(".custom-cursor");
		var links = document.querySelectorAll(
			"a, .svg, .swiper-button-prev, .swiper-button-next, .swiper-pagination-bullet, h1, h2, img"
		);
		var initCursor = false;

		for (var i = 0; i < links.length; i++) {
			var selfLink = links[i];

			selfLink.addEventListener("mouseover", function () {
				cursor.classList.add("custom-cursor--link");
			});
			selfLink.addEventListener("mouseout", function () {
				cursor.classList.remove("custom-cursor--link");
			});
		}

		window.onmousemove = function (e) {
			var mouseX = e.clientX;
			var mouseY = e.clientY;

			if (!initCursor) {
				// cursor.style.opacity = 1;
				TweenLite.to(cursor, 0.3, {
					opacity: 1
				});
				initCursor = true;
			}

			TweenLite.to(cursor, 0, {
				top: mouseY + "px",
				left: mouseX + "px"
			});
		};

		window.onmouseout = function (e) {
			TweenLite.to(cursor, 0.3, {
				opacity: 0
			});
			initCursor = false;
		};
	});



	// TITLE AND GREEN DOT 

	jQuery(document).ready(function ($) {

		var text = ["Wróć do mnie ...", "... mam coś dla Ciebie!"];
		var pageTitle = $("title").text();
		var inicon = "img/favicon.png";
		var sadicon = "img/favicon.png";
		var counter = 0;
		var stop = 0;
		var intervaltime = 1000;

		function change() {
			if (stop == 1) {
				clearInterval(inst);
			} else {
				$("title").text(text[counter]);
				counter++;
				if (counter >= text.length) {
					counter = 0;
				}
			}
		}

		// Change page title on blur
		$(window).blur(function () {
			stop = 0;
			var inst = setInterval(change, intervaltime);
			$("#favicon").attr("href", sadicon);
		});

		// Change page title back on focus
		$(window).focus(function () {
			inst = null;
			stop = 1;
			$("#favicon").attr("href", inicon);
			$("title").text(pageTitle);

		});
	});


})(jQuery);
