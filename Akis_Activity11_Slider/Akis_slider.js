$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 540,
        slideMargin: 10,
        randomStart: true,
        moveSlides: 1,
        pause: 3000,
		pager: true,
		pagerType: 'short',
        pagerCustom: '#pager',
        captions:true

    });
});

