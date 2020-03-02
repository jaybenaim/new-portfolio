$(function() {
  $(".about-slider").slick({
    arrows: false
  });
  $(".slick-prev").on("click", function() {
    $(".about-slider").slick("slickPrev");
  });
  $(".slick-next").on("click", function() {
    $(".about-slider").slick("slickNext");
  });
});
