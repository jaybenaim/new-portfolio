$(function() {
  $(".about-slider").slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000
  });
  $(".slick-prev").on("click", function() {
    $(".about-slider").slick("slickPrev");
  });
  $(".slick-next").on("click", function() {
    $(".about-slider").slick("slickNext");
  });
  $(
    "#slick-slide-control00, #slick-slide-control01, #slick-slide-control02"
  ).html("");
});
