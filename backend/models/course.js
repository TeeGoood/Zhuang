const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        name: {
            type : String,
            required : true
        },
        courseLength : {
            type : Number,
            required : true
        },
        paid : {
            type : Number,
            default : 0
        },
        parentId : {
            type : Schema.Types.ObjectId,
            required : true
        },
        classes : [Schema.Types.ObjectId] 
    },
    { timestamps: true, versionKey: false }
);

const Course = mongoose.model('course', CourseSchema);

module.exports = Course;


