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
 var Swiper = new Swiper ('.image-slider', {
	navigator: {
		nextEl: ".swiper-button-next",
    	prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return 'photo <span class="' + currentClass + '"></span>' +
			' из ' + '<span class="' + totalClass + '"></span>';
		},
	},
	
 });
