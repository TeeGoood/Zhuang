const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        name: String,
        courseLength : Number,
        paid : Number,
        parentId : Schema.Types.ObjectId,
        classes : [Schema.Types.ObjectId] 
    },
    { timestamps: true, versionKey: false }
);

const Course = mongoose.model('course', CourseSchema);

module.exports = Course;


