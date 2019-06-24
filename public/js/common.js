var btnToggle = $(".toggle-menu-mobile--js")
		menu = $(".menu-mobile--js")

jQuery(document).ready(function ($) {

 
	JSCCommon.magnificPopupCall();

	JSCCommon.tabscostume('tabs');
	JSCCommon.tabscostume('tabs2');
	JSCCommon.tabscostume('s-tabs');

	JSCCommon.mobileMenu(); 


	$(".aside-nav__fixed-mnu").stick_in_parent({
		parent: '.main-row',
		offset_top: $(".top-nav").height() + 30,
		inner_scrolling: true,
		// // recalc_every: 1,
		//  recalc_every: true,
	});

 
	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню
		$('header').height($(".top-nav").height());
		var topH = $("header ").innerHeight();

		$(".main-wrapper").css("paddingBottom", $('.footer').height());
		// конец добавил
		if (window.matchMedia("(min-width: 1200px)").matches) {

			btnToggle.removeClass("on");
			// $("body").removeClass("fixed");
			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
	} 

	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();
 
	// листалка по стр
	$("  .scroll-link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   }); 
 


	// $(".wow-wrap").each(function () {
	// var wowAnim = $(this).find(".s-dop__col," +
	//                 ".s-pick__col," +
	//                 ".s-condition__col");
	// wowAnim.each(function(i){

	// wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s");

	//    var wow = new WOW({ mobile: false });
	//         wow.init();

	// });
	// });
var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" ></path>';

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// карусель
	$('.slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 600,
		infinite: true,
		loop: true,
		arrows: true,
		// mobileFirst: true,
		adaptiveHeight: true,
		// centerMode: true,
		// focusOnSelect: true ,
		// variableWidth: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
	});
		 
});
JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy
	lazyShow: function (lazyLoad) {
		document.removeEventListener("scroll", lazyLoad);
		window.removeEventListener("resize", lazyLoad);
		window.removeEventListener("orientationchange", lazyLoad);
		window.addEventListener("DOMContentLoaded", lazyLoad);
	},
	LazyFunction: function () {
		// лэзи 
		document.addEventListener("DOMContentLoaded", function () {
			var lazyBg = [].slice.call(document.querySelectorAll(".lazy-bg"));
			var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
			var active = false;


			function lazyLoad() {
				if (active === false) {
					active = true;
					setTimeout(function () {

						lazyImages.forEach(function (lazyImage) {
							if (((lazyImage.getBoundingClientRect().top - lazyImage.closest(".block-with-lazy").clientHeight * 2) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.closest(".block-with-lazy").clientHeight * 2) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.src = lazyImage.dataset.src;
								// lazyImage.srcset = lazyImage.dataset.srcset;
								lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function (image) {
									return image !== lazyImage;
								});
								if (lazyImages.length === 0) {
									JSCCommon.lazyShow(lazyLoad)
								}
							}
						});
						lazyBg.forEach(function (lazyImage) {
							if (((lazyImage.getBoundingClientRect().top - lazyImage.closest(".block-with-lazy").clientHeight * 2) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.closest(".block-with-lazy").clientHeight * 2) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src + ')';
								lazyImage.src = lazyImage.dataset.src;
								lazyImage.classList.remove("lazy");
								lazyBg = lazyBg.filter(function (image) {
									return image !== lazyImage;
								});

								if (lazyBg.length === 0) {
									JSCCommon.lazyShow(lazyLoad)
								}
							}
						});
						active = false;
					}, 200);
				}
			};

			JSCCommon.lazyShow(lazyLoad)
		});

	},


	// /LazyFunction

	magnificPopupCall: function () {
		$('.popup-with-move-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in',
			tClose: 'Закрыть (Esc)',
		});

		// / modal window

		// modal галерея
		$(".gal").each(function () {

			$(this).find("a").magnificPopup({
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				tClose: 'Закрыть (Esc)',
				image: {
					verticalFit: true,
					// titleSrc: function(item) {
					//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
					// }

				},
				gallery: {
					enabled: true
				}
			});
		})
		// /modal галерея
	},
	// /magnificPopupCall
	mobileMenu: function () {
		// закрыть/открыть мобильное меню

		btnToggle.click(function () {

			btnToggle.toggleClass("on");
			// $("body").toggleClass("fixed");
			menu.toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
		});
		$('.menu-mobile--js ul li a').on('click', function () {
			$(".menu-mobile--js .toggle-mnu").click();
		});

		$(document).mouseup(function (e) {
			var container = $(".menu-mobile--js.active");
			if (container.has(e.target).length === 0) {
				btnToggle.removeClass("on");
				// $("body").toggleClass("fixed");
				menu.removeClass("active");
				$("body, html").removeClass("fixed");
			}
		});
		// закрыть меню при горизонтальном свайпе
 
		$(".aside-nav__toggle-mnu--js").click(function () {

			$(".aside-nav__toggle-mnu--js").toggleClass("on");
			// $("body").toggleClass("fixed");
		$(".aside-nav__fixed-mnu").toggleClass("active");
			// $("body, html").toggleClass("fixed");
			return false;
		});
		// $('.menu-mobile--js ul li a').on('click', function () {
		// 	$(".menu-mobile--js .toggle-mnu").click();
		// });

		// $(document).mouseup(function (e) {
		// 	var container = $(".menu-mobile--js.active");
		// 	if (container.has(e.target).length === 0) {
		// 		$(".aside-nav__toggle-mnu--js").removeClass("on");
		// 		// $("body").toggleClass("fixed");
		// 	$(".aside-nav__fixed-mnu").removeClass("active");
		// 		// $("body, html").removeClass("fixed");
		// 	}
		// });
		// закрыть меню при горизонтальном свайпе
 
	},
	// /mobileMenu

	// табы  . 
	tabscostume: function (tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	},
	// /табы  . 

  

};

JSCCommon.LazyFunction();
/***/

