const express = require('express');
const router = express.Router();

// @route    GET api/campsites
// @desc     Get all campsites
// @access   Public
router.get('/', (req, res) => {
  res.send('Get all campsites');
});

module.exports = router;
