jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';
	
	var slid = jQuery('#home_slider');
		
	slid.owlCarousel({
		items: 3,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: true,
		mouseDrag: true, 
		margin: 5,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: false
			},
			479:{
				items: 1,
				dots: true,
				mouseDrag: true,
				autoplay: false
			},
			767:{
				items: 1,
				mouseDrag: true,
				dots: true,
				autoplay: false
			},
			991:{
				items: 1,
				mouseDrag: true
			},
			1099:{
				items: 3,
				mouseDrag: true
			}
		}
	});
	
	
	});


	$( document ).ready(function () {
		$(".moreBox").slice(0, 3).show();
		  if ($(".blogBox:hidden").length != 0) {
			$("#ShowMore").show();
		  }   
		  $("#ShowMore").on('click', function (e) {
			e.preventDefault();
			$(".moreBox:hidden").slice(0, 6).slideDown();
			if ($(".moreBox:hidden").length == 0) {
			  $("#ShowMore").fadeOut('slow');
			}
		  });
		});
