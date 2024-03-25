const express = require('express')
const router = express.Router()
const Class = require('../models/class')
const Course = require('../models/course')

router.get('/:id', async (req, res) => {
    const { id } = req.params

    try{
        const classData = await Class.find({ _id: id })
        res.json(classData)
    }
    catch(error){
        console.log('error message: ', error.message)
        res.status(500).json({
            message: `class ${id} not found`
        })
    }
})

router.post('/:parentId' , async (req, res) => {
    const { parentId } = req.params
    const payload = req.body
    payload.parentId = parentId
    payload.date = new Date()
    const newClass = new Class(payload)

    try{
        const parentCourse = await Course.findById(parentId)
        const parentClasses = parentCourse.classes
        const parentPaidClasses = parentCourse.paidClasses
        const classTaken = parentClasses.length
        const courseLength = parentCourse.courseLength

        if(classTaken >= courseLength){
            res.status(500).json({ error : "classes's full" })
            return
        }

        const id = (await newClass.save())._id
        parentClasses.push(id)
        if(payload.paid){
            parentPaidClasses.push(id)
        }

        await Course.findByIdAndUpdate(parentId, {
            $set: {
                classes : parentClasses,
                paidClasses: parentPaidClasses
            }
        })

        res.json({ message : 'insert class success' })
    }
    catch(error){
        console.log('error message: ', error.message)
        res.status(500).json({
            message: 'create class fail',
        })
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    const payload = req.body

    try{
        const updatedClass = await Class.findByIdAndUpdate(id, {
            $set: payload
        })
        const parentId = updatedClass.parentId
        const parentCourse = await Course.findById(parentId)
        let newPaidClasses = parentCourse.paidClasses

        if(payload.paid === true && !parentCourse.paidClasses.includes(id)){
            newPaidClasses = [...parentCourse.paidClasses, id]
        }
        else if(payload.paid === false){
            newPaidClasses = parentCourse.paidClasses.filter((classId) => {
                return classId.toString() != id
            })
        }

        await Course.findByIdAndUpdate(parentId,{ 
            $set:{
                paidClasses: newPaidClasses 
            }
        })

        res.json({
            message: 'update class successful',
        })
    }
    catch(error){
        console.log('error message: ', error.message)
        res.status(500).json({
            message: `update class ${id} fail`,
        })
    }

})

router.delete('/:id' , async (req, res) => {
    const {id} = req.params

    try{
        const myObject = await Class.findByIdAndDelete(id)
        const parentId = myObject.parentId
        const parentObj = await Course.findById(parentId)
        const parentClasses = parentObj.classes.filter((classId) => {
            return classId != id
        })
        const parentPaidClasses = parentObj.paidClasses.filter((classId) => {
            return classId != id
        })

        await Course.findByIdAndUpdate(parentId, {
            $set: {
                classes: parentClasses,
                paidClasses: parentPaidClasses
            }
        })

        res.json({ message: "delete class succesfull" })
    }
    catch(error){
        console.log('error message: ', error.message)
        res.status(500).json({
            message: `delete class ${id} fail`,
        })
    }
})

module.exports = router