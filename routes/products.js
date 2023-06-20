var express = require("express");
var router = express.Router();
const productsCtrl = require("../controllers/products");

router.get("/new", productsCtrl.new);
router.post("/", productsCtrl.create);

module.exports = router;
