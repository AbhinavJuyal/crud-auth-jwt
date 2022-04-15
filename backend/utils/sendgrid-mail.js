const sgMail = require("@sendgrid/mail");

const sendEmail = async (to, hash, type) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to, // Change to your recipient
    from: "abhinavj462@gmail.com", // Change to your verified sender
    subject: `${type}: Email verification required`,
    text: "Please verify your email, by clicking on this link",
    html: `<strong>Please verify your email, by clicking on this link</strong>
          <a href="http://localhost:3000/api/verify/email/${hash}">Verify</a>
          `,
  };
  return new Promise(async (resolve, reject) => {
    try {
      const response = await sgMail.send(msg);
      resolve({ response, hash });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { sendEmail };
