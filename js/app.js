$('.slick-slider').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),

    appendArrows: $('.slider-buttons'),
    prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><img src="img/arrows/prev.svg"></button>',
    nextArrow: '<button id="next" type="button" class="btn btn-juliet"><img src="img/arrows/next.svg"></button>',

    centerMode: true,
    centerPadding: '68px',
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

