const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const Student = require('../models/student');

/* const course = new Course({
    name : "hsk 3",
    courseLength : 10,
    classTaken : 5,
    paid : 4,
    parentId : '65904f860963ef5326d3e520',
    classes : []
})

course.save().then(() => console.log("finished!!!")); */

router.get('/:parentId', async (req, res) => {
    const { parentId } = req.params;

    try{
        const student = await Course.find({parentId : parentId});
        const courses = student.courses
        res.json(courses);
    }
    catch(err){
        res.send("error :" + err);
    }

})

router.post('/:parentId', async (req, res) => {
    const { parentId } = req.params;
    const payload = req.body;
    payload.parentId = parentId;
    const course = new Course(payload);

    try{
        const student = await Student.findById(parentId);
        const courses = student.courses;
        const id = (await course.save())._id;
        courses.push(id);

        await Student.findByIdAndUpdate(parentId, {
            $set: {
                courses : courses
            }
        });

        res.status(201).send("post course success");
    }
    catch(err){
        res.send("err : " + err);
    }

})

router.put('/:id' , async (req, res) => {
    const {id} = req.params;
    const payload = req.body;
    
    try{
        await Course.findByIdAndUpdate( id , {
            $set : payload
        });
        res.send("update success");
    }
    catch(err){
        res.send("err : " + err);
    }
    
});


module.exports = router;