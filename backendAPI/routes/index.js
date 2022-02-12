const express = require("express");
const router = express.Router();

const { isLogedIn } = require('../Midelwares/auth.js');

router.get("/", isLogedIn, (req, res) => {

  res.status(200).json({isLogedIn: req.isLogedIn});
});

module.exports = router
