$(function(){
	var mySwiper1 = new Swiper('.swiper-container1',{
		loop:true,
		/*autoplay: {
	        delay: 3000,
	        disableOnInteraction: false,
	  },*/
	  pagination: {
	      el: '.swiper-pagination1',
	      clickable :true,
	   }
	});
	var mySwiper2 = new Swiper('.swiper-container2', {
      pagination: {
        el: '.swiper-pagination2',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
    });
})
