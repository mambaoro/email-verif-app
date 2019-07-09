/* eslint-disable prettier/prettier */

const config = {
  auth: {
    user: "mam.baoro@outlook.fr",
    pass: process.env.OUTLOOK_PASS,
  }, from: 'mam.baoro@outlook.fr',
  to: 'receiver@gmail.com',
  subject: 'Hey you, awesome!',
  html: '<b>This is bold text</b>',
  text: 'This is text version!',
}

module.exports = config;
