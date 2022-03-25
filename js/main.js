const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'vertical',
	loop: true,
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
 });



// 
var button = document.getElementById('myButton')
var bsButton = new bootstrap.Button(button)

var buttons = document.querySelectorAll('.btn')
buttons.forEach(function (button) {
  var button = new bootstrap.Button(button)
  button.toggle()
})