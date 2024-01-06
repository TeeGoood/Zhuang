const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const Student = require('../models/student');
const deleteMeFromParent = require('../functions/deletes');
const Class = require('../models/class');

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try{
        const course = await Course.find({_id : id});
        res.json(course);
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

router.delete('/:id', async (req, res) => {
    const {id} = req.params;

    try{
        const myObject = await Course.findByIdAndDelete(id);
        const parentId = myObject.parentId;
        const myArray = myObject.classes;
        const parentObject = await Student.findById(parentId);
        const parentArray = parentObject.courses;
        
        for(i = 0; i < parentArray.length; i++){
            if(parentArray[i].toString() === id){
                parentArray.splice(i, 1);
                break;
            }
        }

        await Student.findByIdAndUpdate(parentId, {
            $set : {
                courses : parentArray
            }
        });
        
        for(const childId of myArray){
            await Class.findByIdAndDelete(childId);
        }

        res.send("delete course succesfull");
    }
    catch(err){
        res.send(err);
    }
})

module.exports = router;