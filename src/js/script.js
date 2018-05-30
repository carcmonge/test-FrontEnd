$(function () {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'packery'
  });

  $('.pricing__elements').slick({
    slidesToShow: 3,
    dots: false,
    speed: 1000,
    infinite: true,
    arrows: false,
    responsive: [{
      breakpoint: 950,
      settings: {
        slidesToShow: 1
      }
    },{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });

  $('.testimonials-container').slick({
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 1,
    dots: true,
    speed: 1000,
    prevArrow: ".pp-testimonials",
    nextArrow: ".nn-testimonials",
    responsive: [{
        breakpoint: 1100,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1
        }
      },{
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

});

$(".testimonials-container").on("init", function (event, slick) {
  $(".testiomonials__navigation__dots").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
});

$(".testimonials-container").on("afterChange", function (event, slick, currentSlide) {
  $(".testiomonials__navigation__dots").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
});