const express = require("express");
const router = express.Router();

const GamblingController = require('../controllers/GamblingController');




router.get('/gambling/place/bet/:amount/:number',GamblingController.placeBet);

module.exports = router;