/* eslint-disable prettier/prettier */
const nodemailer = require('nodemailer');
const MailgunTransport = require('mailgun-nodemailer-transport');
 
const transporter = nodemailer.createTransport(new MailgunTransport({
  auth: {
    domain: 'emailverificationapp.mambaoro.com',
    apiKey: process.env.MAILGUN_API_KEY,
  },
}));

module.exports = transporter;
