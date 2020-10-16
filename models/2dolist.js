const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  List: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required:true
  }
},{timestamps:true});

const ToDoList = mongoose.model("ToDoList", ListSchema);

module.exports = ToDoList;
