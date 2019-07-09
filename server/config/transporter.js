/* eslint-disable prettier/prettier */
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", 
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587,
  tls: {
    ciphers:'SSLv3',
    rejectUnauthorized: false,
  },
  auth: {
    user: 'mam.baoro@outlook.fr',
    pass: process.env.OUTLOOK_PASS,
  },
});

module.exports = transporter;
