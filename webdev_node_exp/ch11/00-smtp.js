const nodemailer = require("nodemailer");
require("dotenv").config();

const mailTransport = nodemailer.createTransport({
  service: "SendGrid",
  auth: {
    user: process.env.SENDGRID_USER,
    pass: process.env.SENDGRID_PASSWORD,
  },
});

console.log("SendGrid User:", process.env.SENDGRID_USER);
console.log(
  "SendGrid Password:",
  process.env.SENDGRID_PASSWORD ? "Exists" : "Missing"
);

async function go() {
  try {
    const result = await mailTransport.sendMail({
      from: '"Meadowlark Travel" <vincentdx18@gmail.com>',
      to: "vincentdx18@gmail.com",
      subject: "Your Meadowlark Travel Tour",
      html:
        "<h1>Meadowlark Travel</h1>\n<p>Thanks for booking your trip with " +
        "Meadowlark Travel. <b>We look forward to your visit!</b>" +
        '<img src="//meadowlarktravel.com/email/logo.png" alt="Meadowlark Travel Logo">',
      text:
        "Thank you for booking your trip with Meadowlark Travel. " +
        "We look forward to your visit!",
    });
    console.log("mail sent successfully: ", result);
  } catch (err) {
    console.log("could not send mail: " + err.message);
  }
}

go();
