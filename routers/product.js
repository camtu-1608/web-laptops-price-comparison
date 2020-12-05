var express = require("express");
var router = express.Router();
const productsModel = require("../controller/Product");

router.get("/toptrending", productsModel.TopTrending);
router.get("/webname/:id", productsModel.filterByWebName);
router.get("/findById/:id", productsModel.findById);
router.get("/find/:query",productsModel.searchName);

module.exports = router;