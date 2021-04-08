const mongoose = require('mongoose');

const validator = require('validator');

//CREATING A NEW STUDENT SCHEMA
const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    email : {
        type : String,
        required : true ,
        unique : [true, "Email Id Already Exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }

    },
    phone : {
        type : Number,
        unique : true ,
        min : 10,
        required : true

    },
    address : {
        type : String,
        required : true
    }


})



// CREATING A NEW MODEL

const Student = new mongoose.model("Student",studentSchema);

module.exports = Student;