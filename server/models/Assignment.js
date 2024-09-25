const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    link: {
        type: String
    },
    github: {
        type: String
    },
    technologies: {
        type: String
    }
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;