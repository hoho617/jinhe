$(function(){
	var swiper1 = new Swiper(".swiper-container1",{
		initialSlide:2,
		effect:"coverflow",
		grabCursor:true,
		centeredSlides:true,
		slidesPerView:"auto",
		navigation: {
	    	nextEl: '.swiper-button-next1',
	    	prevEl: '.swiper-button-prev1',
	  	},
//		autoplay:3000,
		loop:true,
		coverflowEffect:{
			rotate:0,
			stretch:400,
			depth:300,
			modifier:1,
			slideShadows:false
		},
		pagination: {
	        el: '.swiper-pagination1',
	        clickable: true,
	    },
	});
})
