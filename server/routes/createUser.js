/* eslint-disable no-unused-expressions */
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const nodeoutlook = require('nodejs-nodemailer-outlook');
const User = require('../models/User');

// eslint-disable-next-line consistent-return
router.post('/createUser', async (req, res) => {
  try {
    await User.sync();
    const exists = await User.findOne({
      where: { isVerified: true, email: req.body.email },
    });
    if (exists) {
      return res.send({ isVerified: true });
    }
    const [userInstance] = await User.findOrCreate({
      where: {
        username: req.body.username,
        email: req.body.email,
        isVerified: false,
      },
    });
    const token = await jwt.sign(
      {
        id: userInstance.id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' },
    );
    const url = `https://emailverificationapp.mambaoro.com/confirmation/${token}`;
    await nodeoutlook.sendEmail({
      auth: {
        user: 'mam.baoro@outlook.fr',
        pass: process.env.OUTLOOK_PASS,
      },
      secure: true,
      from: 'mam.baoro@outlook.fr',
      to: userInstance.email,
      subject: 'Email Confirmation',
      html: `Please, confirm your email by clicking the following link: <a href=${url}>${url}</a>`,
    });
    res.send({ accepted: true });
  } catch (e) {
    res.status(400).send({ accepted: false });
  }
});

module.exports = router;
