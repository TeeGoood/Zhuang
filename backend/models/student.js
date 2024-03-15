const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema(
    {
        username : {
            type: String,
            required: true
        },
        note : {
            type: String,
            default: '' 
        },
        courses : {
           type: [Schema.Types.ObjectId],
           default: []
        }
    },
    { timestamps: true, versionKey: false }
)

const Student = mongoose.model('student', StudentSchema)

module.exports = Student


