const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
    {
        username : {
            type : String,
            required : true
        },
        fname : {
            type : String,
            required : true
        },
        lname : {
            type : String,
            required : true
        },
        courses : [Schema.Types.ObjectId]
    },
    { timestamps: true, versionKey: false }
);

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;


