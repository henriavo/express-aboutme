var express = require("express");
var router = express.Router();

/* GET foods listing. */
router.get("/", function (req, res, next) {
  res.send("tacos");
});

module.exports = router;
