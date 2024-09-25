const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
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
    },
    image: {
        type: Schema.Types.ObjectId,
        ref: 'Image'
    },
    teammates: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;