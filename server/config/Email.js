const MailGun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API,
  domain: process.env.MAILGUN_DOMAIN
});

const sendMail = (to, subject, html) => {
  return new Promise((resolve, reject) => {
    const recipientData = {
      from : "Support System <support@redeemertech.net>",
      to,
      subject,
      html
    };

    MailGun.messages().send(recipientData, (error, body) => {
      if(error){
        return reject({
          errorMsg: "Unable to send email",
          error
        });
      }

      resolve({
        msg: "Email Sent",
        body
      });
    });
  });
};

module.exports = sendMail;