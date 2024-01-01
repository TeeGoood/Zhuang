const express = require('express');
const router = express.Router();
const Class = require('../models/class');
const Course = require('../models/course');

/* const classes = new Class({
    date: new Date(2024, 0, 1),
    paid: true,
    parentId : '659051bf9d2a9b167f00e7e1'
})

classes.save().then(() => console.log("finished!!!")); */

router.get('/:parentId', async (req, res) => {
    const { parentId } = req.params;

    try{
        const classes = await Class.find({parentId : parentId});
        res.json(classes);
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
        const deletedClass = await Class.findByIdAndDelete(id);
        const parentId = deletedClass.parentId;
        const course = await Course.findById(parentId);
        const classes = course.classes;

        for(i = 0; i < classes.length; i++){
            if(classes[i].toString() === id){
                classes.splice(i, 1);
                break;
            }
        }

        await Course.findByIdAndUpdate(parentId , {
            $set : {
                classes : classes
            }
        })

        res.send("delete succesfull");
        
    }catch(err){
        res.send("err : " + err);
    }
})

module.exports = router;