/* eslint-disable prettier/prettier */
const mailgun = require('mailgun-js');

const transporter = mailgun({
  domain: 'emailverificationapp.mambaoro.com',
  apiKey: process.env.MAILGUN_API_KEY,
});

module.exports = transporter;
