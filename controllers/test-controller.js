var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.send("Hey!!! This is a test route!");
});

module.exports = router;

router.get("/about", function(req, res) {
  res.send("This is an about route"); //4
});

router.get("/contact", function(req, res) {
  res.send({ user: "kenn", email: "kenn@beastmode.com" });
});

router.get("/projects", function(req, res) {
  res.send(["Project 1", "Project 2"]);
});

router.get("/mycontacts", function(req, res) {
  res.send([
    { user: "quincy", email: "kenn@beastmode.com" },
    { user: "aaron", email: "aaron@beastmode.com" },
    { user: "quincy", email: "quincy@beastmode.com" },
    { user: "tom", email: "tom@beastmode.com" }
  ]);
});
