$(function () {
  jQuery.htmlPrefilter = function (html) {
    return html;
  };
  $(".email-btn").click((e) => {
    e.preventDefault();
    sendEmailToGmail();
  });

  $(".phone-number-hidden, .phone-number, .call-btn").click(() => {
    window.open("tel:6476404714");
  });
  $(".phone-number-hidden").hide();
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
});

const sendEmailToGmail = () => {
  const subject = "Portfolio Contact Form";
  const body = "Hey Jacob, ";

  window.open(`mailto:benaimjacob@gmail.com?subject=${subject}&body=${body}`);
};
