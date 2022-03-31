// SVIPER

let myImageSlider = new Swiper('.image-slider', {
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
	 pagination: {

	 },
	 touchRadio: 1,
	 touchAngle: 45,
	 grabCursor: true,
	 slideToClickedSlide: true,

	 hashNavigation: {
		 	watchState: true,
	 },
	 keyboard: {
		 enabled: true,
		 onlyInViewport: true,
		 pageUpDown: true,
	 },
	//  mousewheel: {
	// 	sensitivity: 1,
	// 	eventsTarget: ".image-slider"
	//  },
	 slidesPerView: 3,
	 spaceBetween: 80,
	 slidesPerGroup: 1,
	 centeredSlides: true,
	 loop: true,
	 loopFillGroupWithBlank: true,

	 breakpoints: {
		 320: {
			 slidesPerView: 1,
		 },
		 480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	 },
	 observer: true,
	 observerParents: true,
	 observerSlideChildren: true,
});

new Swiper('.text-slider', {
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
	 touchRadio: 1,
	 touchAngle: 45,
	 grabCursor: true,
	 slideToClickedSlide: true,

	 keyboard: {
		 enabled: true,
		 onlyInViewport: true,
		 pageUpDown: true,
	 },
	//  mousewheel: {
	// 	sensitivity: 1,
	// 	eventsTarget: ".text-slider"
	//  },
	 slidesPerView: 1,
	 slidesPerGroup: 1,
	 centeredSlides: true,
	 loop: true,
	 loopFillGroupWithBlank: true,

	 observer: true,
	 observerParents: true,
	 observerSlideChildren: true,
	 nasted: true,
})

myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;