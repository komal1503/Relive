const express = require("express");
const router = express.Router();

const Memory = require("../models/memories");

router.get("/", (req, res) => {
  Memory.find((err, foundMemories) => {
    res.status(200).json({foundMemories});
  });
});

router.get("/:memoryId", (req, res) => {
  const memoryId = req.params.memoryId;

  Memory.findOne({_id: memoryId}, (err, foundMemory) => {
    if(foundMemory){
      res.status(200).json({foundMemory});
    }else{
      res.send("Memory Not Found");
    }
  });
});

router.post("/creatnew", (req, res) => {

  if(req.isAuthenticated()){
    const newMemory = new Memory({
      userID: req.user._id,
      title: req.body.title,
      des: req.body.des,
      date: req.body.date,
      mediaURL: req.body.mediaURL
    });

    newMemory.save((err) => {
      if(err){
        res.send(400).send(err)
      }else{
        res.status(200).send("Memory Creaqted");
      }
    });
  }else{
    res.status(400).send("User is not logedin");
  }
});

module.exports = router
