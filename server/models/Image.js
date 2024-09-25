const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    assignment: {
        type: Schema.Types.ObjectId,
        ref: 'Assignment'
    }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;