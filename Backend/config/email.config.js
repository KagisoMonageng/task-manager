
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

var transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com', 
    auth: {
    user: "mercury.media@zohomail.com", //
    pass: "gRTciLEu9LBj", //
  },
});

transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email server ready to send email");
    }
  });

module.exports = transporter;