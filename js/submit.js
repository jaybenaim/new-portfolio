const form = document.querySelector("form");
const displayAlert = (data) => {
  const { name, email, message } = data;

  const messageConfirmed = `<div> <br /> Message sent.<br />  </div> <br /> <div>Message: <p> ${message} </p>  from ${name} - ${email}<br /> </div> `;
  $("form").prepend(messageConfirmed);
};

$(function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = $(".email-form");
    const formattedFormData = validateForm(formData);

    postData(formattedFormData);
  });
});

async function postData(formattedFormData) {
  const response = await fetch(
    "https://jays-portfolio-backend.herokuapp.com/api/email",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedFormData),
    }
  );
  const data = await response.json();
  displayAlert(data);
}

const validateForm = (form) => {
  const name = form.find("#name").val();
  const email = form.find("#email").val();
  const message = form.find("#message").val();

  const regex = /<\w*/gm;
  const invalidName = name.match(regex);
  const invalidEmail = email.match(regex);
  const invalidMessage = message.match(regex);

  if (
    invalidName === null &&
    invalidEmail === null &&
    invalidMessage === null
  ) {
    return { name, email, message };
  } else {
    alert("Nice try!\n Hack on! ");
    window.location.href = "http://www.staggeringbeauty.com/";
  }
};
