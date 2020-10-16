const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const port = 7700;
const bodyParser = require('body-parser');
const app = express();
const Models = require("./models/2dolist");
const IndexRouter = require('./router/index');
const userRouter = require('./router/user');

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST, PUT ,DELETE ,PATCH");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
//   next();
// });
app.use(express.static("Assets"));

app.use("/", IndexRouter);
app.use("/user",userRouter);




mongoose.connect("mongodb+srv://Zishan111:Jiu0kCiDLZOZLMW5@cluster0.5tkyb.mongodb.net/ToDoListDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log("MongoDB Connect Successfully!")
    app.listen(port, function(err) {
      if (err) {
        console.log("Error in Server", err);
        return;
      }
      console.log("Server is Running up on port", port);
    });


  }).catch(error =>console.log("Error Occured!",error))





