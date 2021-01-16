var express = require("express");
var router = express.Router();
const productsControl = require("../controller/Product");

router.get("/toptrending", productsControl.TopTrending);
router.get("/find/:query",productsControl.searchName);

module.exports = router;

