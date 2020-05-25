$(function () {
  const textContainer = $(".hidden-challenge-container");
  const hiddenText = $(".hidden-challenge-text");

  textContainer.hover(
    function () {
      $(this).find(hiddenText).show();
    },
    function () {
      $(this).find(hiddenText).hide();
    }
  );
});
$(".phone-number").hover(
  function () {
    $(".phone-number").hide();
    $(".phone-number-hidden").show();
    $(".phone-number-hidden").css("font-size", "1.6em");
  },
  function () {
    $(this).find("span").last().remove();
  }
);
