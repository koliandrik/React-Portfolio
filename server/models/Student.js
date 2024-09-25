const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    github: {
        type: String
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;