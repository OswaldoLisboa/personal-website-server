const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const personalEmail = process.env.EMAIL;
const myName = process.env.NAME;

const sendEmail = (name, email, message) => {
  sgMail.send({
    to: personalEmail,
    from: personalEmail,
    subject: `${name} contacted you in your website.`,
    text: `Hey ${myName}.

${name} sent you a message at your website. Here is the message:

${message}

Reply to ${email}.
    `
  });
}

module.exports = sendEmail;
