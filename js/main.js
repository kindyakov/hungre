$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    speed: 400,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".slider-galerie").slick({
    arrows: false,
    slidesToShow: 1,
    dots: true,
    initialSlide: 1,
  });
});
$(document).ready(function () {
  $(".heder-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      { duration: 1000, esing: "swing" }
    );
  });
  $(".intro-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      { duration: 1200, esing: "swing" }
    );
  });
});

$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-burger,.header-menu,.header-wrapper-brg").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(function () {
  let header = $(".header");
  let headerH = header.height();
  let scrollPos = $(window).scrollTop("-200px");

  $(window).on("scroll load resize", function () {
    introH = header.innerHeight();
    scrollPos = $(this).scrollTop();
    if (scrollPos > headerH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });
  header.addClass("fixed");
});
