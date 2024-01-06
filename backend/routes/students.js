const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Course = require('../models/course');

router.get('/', async (req, res) => {
    try{
        const students = await Student.find({});
        res.json(students);
    }
    catch(err){
        res.send("error : " + err);
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;

    try{
        const student = await Student.find({ _id : id});
        res.json(student);
    }
    catch(err){
        res.send("error : " + err);
    }
})

router.post('/', async (req, res) => {
    const payload = req.body;
    const student = new Student(payload);
    console.log("student create");

    try{
        await student.save();
        res.status(201).send("post succesfull");
    }
    catch(err){
        res.send("error : " + err);
    }

});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;

    try{
        const myObject = await Student.findByIdAndDelete(id);
        const myArray = myObject.courses;
        
        for(const childId of myArray){
            await Course.findByIdAndDelete(childId);
        }

        res.send("delete course succesfull");
    }
    catch(err){
        res.send(err);
    }
})



module.exports = router;