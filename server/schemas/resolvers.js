const { AuthenticationError } = require('apollo-server-express');
const { Student, Project, Assignment, Image } = require('../models');

const resolvers = {
    Query: {
        students: async () => {
            return Student.find().populate('projects');
        },
        projects: async () => {
            return Project.find().populate('image').populate('teammates');
        },
        assignments: async () => {
            return Assignment.find().populate('image');
        },
        images: async () => {
            return Image.find();
        },
    }
};


module.exports = resolvers;