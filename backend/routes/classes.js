const express = require('express');
const router = express.Router();
const Class = require('../models/class');
const Course = require('../models/course');

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try{
        const classData = await Class.find({_id : id});
        res.json(classData);
    }
    catch(err){
        res.send("error :" + err);
    }
})

router.post('/:parentId' , async (req, res) => {
    const { parentId } = req.params;
    const payload = req.body;
    payload.parentId = parentId;
    const newClass = new Class(payload);

    try{
        const course = await Course.findById(parentId);
        const classes = course.classes;
        const classTaken = classes.length;
        const courseLength = course.courseLength;

        if(classTaken >= courseLength){
            res.send("classes's full");
            return;
        }

        const id = (await newClass.save())._id;
        classes.push(id);

        await Course.findByIdAndUpdate(parentId, {
            $set: {
                classes : classes,
            }
        });

        res.status(201).send('insert class success');
    }
    catch(err){
        res.send("err : " + err);
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const payload = req.body;
    console.log(payload);

    try{
        await Class.findByIdAndUpdate(id, {
            $set: payload
        })
        res.send("updating class succesfull");
    }
    catch(err){
        res.send("error : " + err);
    }

})

router.delete('/:id' , async (req, res) => {
    const {id} = req.params;

    try{
        const myObject = await Class.findByIdAndDelete(id);
        const parentId = myObject.parentId;
        const parentObject = await Course.findById(parentId);
        const parentArray = parentObject.classes;
        
        for(i = 0; i < parentArray.length; i++){
            if(parentArray[i].toString() === id){
                parentArray.splice(i, 1);
                break;
            }
        }

        await Course.findByIdAndUpdate(parentId, {
            $set : {
                classes :parentArray
            }
        });

        res.send("delete class succesfull");
    }
    catch(err){
        res.send("err : " + err);
    }
})

module.exports = router;