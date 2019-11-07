var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "benaimjacob@gmail.com",
    pass: "Jb100831792"
  }
});

var mailOptions = {
  from: "jacob.benaim@gmail.com",
  to: "benaimjacob@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!"
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
