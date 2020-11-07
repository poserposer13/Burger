const express = require("express");

const router = express.Router();



router.get("/", function (req, res) {
    // burgers.all(function (data) {
    //   const hbsObject = {
    //     burgers: data
    //   };
    //   console.log(hbsObject);
      res.render("index");
    // });
  });


  module.exports = router;