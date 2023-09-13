const mongoose = require('mongoose');



// Schema
const empSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    job_title: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },

}, 
{ timestamps: true });


const Emp = mongoose.model("employee", empSchema);

module.exports = Emp ;