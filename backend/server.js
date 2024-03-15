const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
const MONGODB_URL = process.env.MONGODB_URL
const PORT = process.env.PORT
mongoose.connect(MONGODB_URL)

app.use(express.json())
app.use(cors())

const studentRouter = require('./routes/students')
const courseRouter = require('./routes/courses')
const classRouter = require('./routes/classes')

app.use('/students', studentRouter)
app.use('/courses', courseRouter)
app.use('/classes', classRouter)

app.listen(PORT , () => {
    console.log(`go to http://localhost:${PORT}`)
})


