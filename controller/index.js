

const List = require("../models/2dolist");
exports.getList = (req, res, next) => {
     
    List.find()
        .sort({createdAt:-1})
        .then(list => {
            if (!list)
            {
                console.log('Error in Finding List')
                return;    
            }    
           
            return res.render("2dolist", {
                title: "To Do List",
                ToDoList: list
              });        
         })
        .catch(err => {
            console.log('Error Occured', err);   
        })
}

