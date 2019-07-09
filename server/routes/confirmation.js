/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.get('/getConfirmation/:token', async (req, res) => {
  try {
    const decoded = await jwt.verify(req.params.token, process.env.JWT_SECRET);
    const updatedUser = await User.update(
      { isVerified: true },
      { where: { id: decoded.id } },
    );
    const user = await User.findOne({ where: { id: decoded.id } });
    updatedUser[0] && res.send({ accepted: true, username: user.username });
  } catch (e) {
    res.status(400).send({ accepted: false });
  }
});

module.exports = router;
