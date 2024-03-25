const express = require('express')
const router = express.Router()
const Course = require('../models/course')
const Student = require('../models/student')
const Class = require('../models/class')

router.get('/:id', async (req, res) => {
    const { id } = req.params

    try{
        const course = await Course.find({_id : id})
        res.json(course)
    }
    catch(error){
        res.status(500).json({ error_message: error.message })
    }

})

router.post('/:parentId', async (req, res) => {
    const { parentId } = req.params
    const payload = req.body
    payload.parentId = parentId
    const course = new Course(payload)

    try{
        const id = (await course.save())._id
        const student = await Student.findById(parentId)
        const newStudentCourses = [ ...student.courses, id ]

        await Student.findByIdAndUpdate(parentId, {
            $set: {
                courses : newStudentCourses
            }
            
        })
        res.json({ message: "create courses success" })
    }
    catch(error){
        console.log('error message: ', error.message)
        res.status(500).json({
            error: 'create course fail'
        })
    }

})

router.put('/:id' , async (req, res) => {
    const {id} = req.params
    const payload = req.body
    
    try{
        await Course.findByIdAndUpdate( id , {
            $set : payload
        })
        res.json({ message: "update courses success" })
    }
    catch(error){
        console.log('error message: ', error.message)
        res.status(500).json({
            error: 'update course fail'
        })
    }
    
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params

    try{
        const deletedCourse = await Course.findByIdAndDelete(id)
        const parentStudent = await Student.findById(deletedCourse.parentId)
        const updatedCourse = parentStudent.courses.filter((course) => {
            return course._id != id
        })
        await Student.findByIdAndUpdate(deletedCourse.parentId, {
            $set:{ courses: updatedCourse }
        }) 
        await Class.deleteMany({
            _id: { $in: deletedCourse.classes }
        })
    }
    catch(error){
        console.log('error message: ', error.message)
        res.status(500).json({
            error: 'delete course fail'
        })
    }
})

module.exports = router