$(document).ready(function(){
    $('.feedback__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/next.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                }
            }
        ]
    });
});