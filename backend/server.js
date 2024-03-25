const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1/course-dashboard';
const PORT = process.env.PORT || 9000 ;

mongoose.connect(MONGODB_URL);

app.use(express.json());
app.use(cors());

const studentRouter = require('./routes/students');
const courseRouter = require('./routes/courses');
const classRouter = require('./routes/classes');

app.use('/students', studentRouter);
app.use('/courses', courseRouter);
app.use('/classes', classRouter);

app.listen(PORT , () => {
    console.log(`go to http://localhost:${PORT}`);
});