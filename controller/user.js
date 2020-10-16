const { json } = require('body-parser');
const CreateList = require('../models/2dolist');
exports.createList = (req,res,next) => {
    const list = req.body.list;    
    const Category = req.body.category;
    const date = req.body.date;
    console.log(list, Category, date);
    const createlist = new CreateList({
        List: list,
        Category:Category,
        date: date,
        createdAt: new Date()
    })  
    if (!list)
    {
        console.log('Error Occured in create List') 
        return;     
    }
      createlist.save()
        .then(result => {
           console.log("List is Created",result);
            return res.redirect("/");    
        })
        .catch(err => {
            console.log('Error Occured!',err);
        }) 

    
}
/* delete request:/user/deletelist */
exports.deleteList =async (req,res,next) => {
const Arrayvalue =req.body.ArrayValue;      
    
    // console.log(Arrayvalue.length);
    let ObjectId;
    let i = 0;

    let deleteList = [];
    

    Arrayvalue.forEach(Arrayvalue => {
        i++;
        ObjectId = Arrayvalue.toString();  
        CreateList.deleteOne({ _id:ObjectId })
            .then(result => {
                console.log('Deleted ', result);
        })
        
    })

    return res.status(200).json({message:'Deleted Succesfully',})
}
