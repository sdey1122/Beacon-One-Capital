$(document).ready(() => {
  $(".slick-second").css({
    maxWidth: "800px",
    margin: "30px auto 0",
  });

  $(".slick-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: ".slick-second",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slick-second").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slick-slider",
    fade: true,
  });

  $(".slick-slider .slick-center").next().addClass("sl-next");
  $(".slick-slider .slick-center").prev().addClass("sl-prev");

  $(".slick-slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".slick-slider").find(".slick-center").next().removeClass("sl-next");
      $(".slick-slider").find(".slick-center").prev().removeClass("sl-prev");
    }
  );

  $(".slick-slider").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".slick-slider").find(".slick-center").next().addClass("sl-next");
      $(".slick-slider").find(".slick-center").prev().addClass("sl-prev");
    }
  );
  $(".prev-arrow").on("click", function () {
    $(".slick-slider").slick("slickPrev");
  });

  $(".next-arrow").on("click", function () {
    $(".slick-slider").slick("slickNext");
  });
});
