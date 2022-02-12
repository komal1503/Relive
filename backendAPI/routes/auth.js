const express = require("express");
const router = express.Router();
const session = require('express-session');
const passport = require('passport');

const { auth, isLogedIn } = require('../Midelwares/auth.js');

const User = require("../models/user");


router.post("/login", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, (err) => {
    if(err){
      res.status(400).send(err);
    }else{
      passport.authenticate("local")(req, res, () => {
          res.status(200).send("Login Sucessfull");
      });
    }
  });
});

router.post("/register", (req, res) => {

  const reqUser = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  }

  User.register({username: reqUser.username}, reqUser.password, (err, user) => {
    if(err){
      res.atatus(400).send(err);
    }else{
      user.name = reqUser.name;
      user.save();

      passport.authenticate("local")(req, res, () => {
          res.status(200).send("User registored Sucessfully");;
      });
    }
  });
});

module.exports = router;
