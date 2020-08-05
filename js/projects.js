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
