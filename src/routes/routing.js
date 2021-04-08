const express = require('express');
const router = express.Router();
const Student = require('../models/students');
//GET DATA FROM DB
router.get('/students',async (req,res)=>{
    try{
        //console.log(req.params);
    let result = await Student.find();
    res.send(result);
    }
    catch(err){
        res.send(err);
    }
})


router.get('/students/:id',async (req,res)=>{
    try{
        //console.log(req.params);
    const _id = req.params.id;
    //console.log(_id);
    let result = await Student.findOne({_id});
    if(!result){
        return res.status(404).send();
    }
    else{
        res.send(result);
    }
    
    }
    catch(err){
        res.send(err);
    }
})
//CREATE A NEW STUDENTS
router.post("/students",(req,res)=>{

    console.log(req.body);
    const stud = new Student(req.body);
    stud.save().then(()=>{
        res.status(201).send("Added to Database");
    }).catch((err)=>{
        res.status(400).send(err);

    })


})

//UPDATE THE STUDENTS BY ID
router.put('/students/:id',async (req,res)=>{
    try{
    //console.log(req.params);
    const _id = req.params.id;
    let result = await Student.findByIdAndUpdate(_id,req.body,{new : true});
    res.send(result);
       
    }
    catch(err){
        res.status(404).send(err);
    }
})

router.delete('/students/:id',async (req,res)=>{
    try{
    //console.log(req.params);
    const _id = req.params.id;
    let result = await Student.findByIdAndDelete(_id);
    if(!result){
        return res.status(400).send();
    }
    res.send(result);  
       
    }
    catch(err){
        res.status(500).send(err);
    }
})


module.exports = router;