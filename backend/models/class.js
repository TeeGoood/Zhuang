const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema(
    {
        date : Date,
        paid : Boolean,
        parentId : Schema.Types.ObjectId,
    },
    { timestamps: true, versionKey: false }
)


const Class = mongoose.model('class', ClassSchema);

module.exports = Class;


