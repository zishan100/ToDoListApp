const express = require("express");
const indexController = require('../controller/index');
const router = express.Router();
const List = require("../models/2dolist");
router.get("/",indexController.getList);



module.exports = router;
