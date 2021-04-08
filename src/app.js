require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./db/conn');

const Student = require('./models/students');
app.use(express.json());


const routerName = require('./routes/routing');

app.use(routerName);
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})



//GET DATA FROM DB
// app.get('/students',async (req,res)=>{
//     try{
//         //console.log(req.params);
//     let result = await Student.find();
//     res.send(result);
//     }
//     catch(err){
//         res.send(err);
//     }
// })


// app.get('/students/:id',async (req,res)=>{
//     try{
//         //console.log(req.params);
//     const _id = req.params.id;
//     //console.log(_id);
//     let result = await Student.findOne({_id});
//     if(!result){
//         return res.status(404).send();
//     }
//     else{
//         res.send(result);
//     }
    
//     }
//     catch(err){
//         res.send(err);
//     }
// })
// //CREATE A NEW STUDENTS
// app.post("/students",(req,res)=>{

//     console.log(req.body);
//     const stud = new Student(req.body);
//     stud.save().then(()=>{
//         res.status(201).send("Added to Database");
//     }).catch((err)=>{
//         res.status(400).send(err);

//     })


// })

// //UPDATE THE STUDENTS BY ID
// app.put('/students/:id',async (req,res)=>{
//     try{
//     //console.log(req.params);
//     const _id = req.params.id;
//     let result = await Student.findByIdAndUpdate(_id,req.body,{new : true});
//     res.send(result);
       
//     }
//     catch(err){
//         res.status(404).send(err);
//     }
// })

// app.delete('/students/:id',async (req,res)=>{
//     try{
//     //console.log(req.params);
//     const _id = req.params.id;
//     let result = await Student.findByIdAndDelete(_id);
//     if(!result){
//         return res.status(400).send();
//     }
//     res.send(result);  
       
//     }
//     catch(err){
//         res.status(500).send(err);
//     }
// })

