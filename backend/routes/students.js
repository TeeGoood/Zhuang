const express = require('express');
const router = express.Router();
const Student = require('../models/student');

/* const student = new Student({
    username: "tee",
    fname: "chayapon",
    lname: "arpayatam",
    courses: []
})

student.save().then(() => console.log("finished!!!")); */

router.get('/', async (req, res) => {
    try{
        const students = await Student.find({});
        res.json(students);
    }
    catch(err){
        res.send("error : " + err);
    }
})

router.post('/', async (req, res) => {
    const payload = req.body;
    const student = new Student(payload);

    try{
        await student.save();
        res.status(201).send("post succesfull");
    }
    catch(err){
        res.send("error : " + err);
    }

});



module.exports = router;