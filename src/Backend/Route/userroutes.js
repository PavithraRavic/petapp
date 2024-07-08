const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /submit
router.post('/submit', async (req, res) => {
  const { name, email, phone, aadhar } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      phone,
      aadhar
    });

    await newUser.save();
    res.status(200).send('User details saved successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
