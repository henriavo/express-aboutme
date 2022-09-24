var express = require("express");
var router = express.Router();

/* GET foods listing. */
router.get("/foods", function (req, res, next) {
  res.send("tacos");
});

module.exports = router;
