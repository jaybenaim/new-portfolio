$(function() {
  $(".email-btn").click(e => {
    e.preventDefault();
    sendEmailToGmail();
  });

  $(".phone-number").click(() => {
    window.open("tel:6476404714");
  });
});
const sendEmailToGmail = () => {
  const subject = "Portfolio Contact Form";
  const body = "Hey Jacob, ";

  window.open(`mailto:benaimjacob@gmail.com?subject=${subject}&body=${body}`);
};
