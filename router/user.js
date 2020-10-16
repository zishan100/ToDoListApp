const express = require("express");

const router = express.Router();
const List = require("../models/2dolist");
const userController = require('../controller/user');
router.post("/ToDolist",userController.createList);

router.post("/delete-list",userController.deleteList);

module.exports = router;
