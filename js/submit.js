$(function() {
  const form = document.querySelector("form");
  const displayAlert = data => {
    const { name, email, message } = data.body;
    const messageConfirmed = `<div> <br /> Message sent to ${email}.<br />  </div> <br /> <div>Message: <p> ${message} <br />  from ${name}.</p> </div> `;
    $("form").append(messageConfirmed);
  };

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formattedFormData = new FormData(form);
    postData(formattedFormData);
  });
  async function postData(formattedFormData) {
    const response = await fetch("../php/submit.php", {
      method: "POST",
      body: formattedFormData
    });
    const data = await response.text();

    const json = JSON.parse(data);
    displayAlert(json);
  }
});
