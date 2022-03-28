// const { default: Swiper } = require("swiper");

// const swiper = new Swiper('.swiper', {
// 	// Optional parameters
// 	direction: 'vertical',
// 	loop: true,
 
// 	// If we need pagination
// 	pagination: {
// 	  el: '.swiper-pagination',
// 	},
 
// 	// Navigation arrows
// 	navigation: {
// 	  nextEl: '.swiper-button-next',
// 	  prevEl: '.swiper-button-prev',
// 	},
 
// 	// And if we need scrollbar
// 	scrollbar: {
// 	  el: '.swiper-scrollbar',
// 	},
//  });



SWIPER
//  var Swiper = new Swiper ('.image-slider', {
// 	navigator: {
// 		nextEl: ".swiper-button-next",
//     	prevEl: ".swiper-button-prev",
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		type: 'fraction',
// 		renderFraction: function (currentClass, totalClass) {
// 			return 'photo <span class="' + currentClass + '"></span>' +
// 			' из ' + '<span class="' + totalClass + '"></span>';
// 		},
// 	},
	
//  });

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
	interval: false
 });
 
 // for every slide in carousel, copy the next slide's item in the slide.
 // Do the same for the next, next item.
 $('.multi-item-carousel .item').each(function(){
	var next = $(this).next();
	if (!next.length) {
	  next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));
	
	if (next.next().length>0) {
	  next.next().children(':first-child').clone().appendTo($(this));
	} else {
		$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	}
 });
