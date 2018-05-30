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
    infinite: false,
    prevArrow: ".pp-testimonials",
    nextArrow: ".nn-testimonials",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]

    });

    // Get the video
    var video = $("#video");
    
});

function videoPlay() {
  // Get the button
  if (video.paused) {
    video.play();
    $(".video__play").html("Pause");
    $(".video__play").fadeOut(1000);
  } else {
    video.pause();
    $(".video__play").html("Play");
  }
}

if ($("#video").length){
  $("#video").addEventListener('ended', myHandler, false);
  function myHandler(e) {
    $(".video__play").html("Play");
    $(".video__play").fadeIn(500);
  }

}

$(".testimonials-container").on("init", function (event, slick) {
  $(".testiomonials__navigation__dots").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
});

$(".testimonials-container").on("afterChange", function (event, slick, currentSlide) {
  $(".testiomonials__navigation__dots").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
});