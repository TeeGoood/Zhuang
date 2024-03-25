
const express = require('express')
const router = express.Router()
const Student = require('../models/student')
const Course = require('../models/course')
const Class = require('../models/class')

router.get('/', async (req, res) => {
    try{
        const students = await Student.find({})
        res.json(students)
    }
    catch(error){
        console.log('error message: ', error.message)
        res.status(500).json({
            error: 'cannot found student'
        })
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params

    try{
        const student = await Student.findById(id)
        res.json(student)
    }
    catch(error){
        console.log('error message: ', error.message)
        res.status(500).json({
            error: `cannot found student ${id}`
        })
    }
})

router.post('/', async (req, res) => {
    const payload = req.body
    const student = new Student(payload)

    try{
        await student.save()
        res.json({ message: 'create student succesfull' })
    }
    catch(error){
        console.log('error message: ', error.message)
        res.status(500).json({
            error: `cannot create student`
        })
    }

})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    const payload = req.body

    try{
        await Student.findByIdAndUpdate(id, {
            $set : payload
        })

        res.json({ message: 'create student succesfull' })
    }
    catch(error){
        console.log('error message: ', error.message)
        res.status(500).json({
            error: `cannot update student${id}`
        })
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params

    try{
        const deleteStudent = await Student.findByIdAndDelete(id)
        for(const courseId of deleteStudent.courses){
            const deletedCourse = await Course.findByIdAndDelete(courseId)
            await Class.deleteMany({
                _id: { $in: deletedCourse.classes }
            })
        }
        res.json({ message: `delete student ${id} success` })
    }
    catch(error){
        console.log('error message: ', error.message)
        res.status(500).json({
            error: `cannot delete student${id}`
        })
    }
})



module.exports = router
