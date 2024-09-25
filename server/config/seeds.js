const db = require('./connection');
const { Project, Assignment, Student, Image } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    // Clear existing data
    await cleanDB('Project', 'projects');
    await cleanDB('Assignment', 'assignments');
    await cleanDB('Student', 'students');
    await cleanDB('Image', 'images');

    // Seed Projects
    const projects = await Project.insertMany([
        {
            name: 'Project 1',
            description: 'This is the first project.',
            link: 'https://project1.com',
            github: '',
            technologies: 'HTML, CSS, JavaScript',
            teammates: []
        },
        {
            name: 'Project 2',
            description: 'This is the second project.',
            link: 'https://project2.com',
            github: '',
            technologies: 'React, Node.js, Express, MongoDB',
            teammates: []
        },
        {
            name: 'Project 3',
            description: 'This is the third project.',
            link: 'https://project3.com',
            github: '',
            technologies: 'Angular, Express, MySQL',
            teammates: []
        }
    ]);

    console.log('projects seeded');

    // Seed Assignments

    const assignments = await Assignment.insertMany([
        {
            title: 'Assignment 1',
            description: 'This is the first assignment.',
            link: 'https://assignment1.com',
            github: '',
            technologies: 'HTML, CSS',
            image: null
        },
        {
            title: 'Assignment 2',
            description: 'This is the second assignment.',
            link: 'https://assignment2.com',
            github: '',
            technologies: 'JavaScript, jQuery',
            image: null
        },
        {
            title: 'Assignment 3',
            description: 'This is the third assignment.',
            link: 'https://assignment3.com',
            github: '',
            technologies: 'Node.js, Express, MongoDB',
            image: null
        },
        {
            title: 'Assignment 4',
            description: 'This is the fourth assignment.',
            link: 'https://assignment4.com',
            github: '',
            technologies: 'React, GraphQL',
            image: null
        },
        {
            title: 'Assignment 5',
            description: 'This is the fifth assignment.',
            link: 'https://assignment5.com',
            github: '',
            technologies: 'Angular, Express, MySQL',
            image: null
        },
        {
            title: 'Assignment 6',
            description: 'This is the sixth assignment.',
            link: 'https://assignment6.com',
            github: '',
            technologies: 'React, Node.js, Express, MongoDB',
            image: null
        },
        {
            title: 'Assignment 7',
            description: 'This is the seventh assignment.',
            link: 'https://assignment7.com',
            github: '',
            technologies: 'HTML, CSS, JavaScript',
            image: null
        },
        {
            title: 'Assignment 8',
            description: 'This is the eighth assignment.',
            link: 'https://assignment8.com',
            github: '',
            technologies: 'JavaScript, jQuery',
            image: null
        },
        {
            title: 'Assignment 9',
            description: 'This is the ninth assignment.',
            link: 'https://assignment9.com',
            github: '',
            technologies: 'Node.js, Express, MongoDB',
            image: null
        },
        {
            title: 'Assignment 10',
            description: 'This is the tenth assignment.',
            link: 'https://assignment10.com',
            github: '',
            technologies: 'React, GraphQL',
            image: null
        },
        {
            title: 'Assignment 11',
            description: 'This is the eleventh assignment.',
            link: 'https://assignment11.com',
            github: '',
            technologies: 'Angular, Express, MySQL',
            image: null
        },
        {
            title: 'Assignment 12',
            description: 'This is the twelfth assignment.',
            link: 'https://assignment12.com',
            github: '',
            technologies: 'React, Node.js, Express, MongoDB',
            image: null
        },
        {
            title: 'Assignment 13',
            description: 'This is the thirteenth assignment.',
            link: 'https://assignment13.com',
            github: '',
            technologies: 'HTML, CSS, JavaScript',
            image: null
        },
        {
            title: 'Assignment 14',
            description: 'This is the fourteenth assignment.',
            link: 'https://assignment14.com',
            github: '',
            technologies: 'JavaScript, jQuery',
        },
        {
            title: 'Assignment 15',
            description: 'This is the fifteenth assignment.',
            link: 'https://assignment15.com',
            github: '',
            technologies: 'Node.js, Express, MongoDB',
            image: null
        },
        {
            title: 'Assignment 16',
            description: 'This is the sixteenth assignment.',
            link: 'https://assignment16.com',
            github: '',
            technologies: 'React, GraphQL',
            image: null
        }
    ]);

    console.log('assignments seeded');

    // Seed Students

    const students = await Student.insertMany([
        {
            name: 'John Doe',
            email: '',
            projects: []
        },
        {
            name: 'Jane Doe',
            email: '',
            projects: []
        },
        {
            name: 'John Smith',
            email: '',
            projects: []
        },
        {
            name: 'Jane Smith',
            email: '',
            projects: []
        },
        {
            name: 'John Johnson',
            email: '',
            projects: []
        },
        {
            name: 'Jane Johnson',
            email: '',
            projects: []
        },
        {
            name: 'John Brown',
            email: '',
            projects: []
        },
        {
            name: 'Jane Brown',
            email: '',
            projects: []
        },
        {
            name: 'John White',
            email: '',
            projects: []
        },
        {
            name: 'Jane White',
            email: '',
            projects: []
        },
        {
            name: 'John Black',
            email: '',
            projects: []
        },
        {
            name: 'Jane Black',
            email: '',
            projects: []
        },
        {
            name: 'John Green',
            email: '',
            projects: []
        }
    ]);

    console.log('students seeded');

    // Seed Images

    const images = await Image.insertMany([
        {
            url: 'https://via.placeholder.com/150',
            description: 'Placeholder image',
            project: null,
            assignment: null
        },
        {
            url: 'https://via.placeholder.com/150',
            description: 'Placeholder image',
            project: null,
            assignment: null
        },
        {
            url: 'https://via.placeholder.com/150',
            description: 'Placeholder image',
            project: null,
            assignment: null
        },
        {
            url: 'https://via.placeholder.com/150',
            description: 'Placeholder image',
            project: null,
            assignment: null
        },
        {
            url: 'https://via.placeholder.com/150',
            description: 'Placeholder image',
            project: null,
            assignment: null
        },
        {
            url: 'https://via.placeholder.com/150',
            description: 'Placeholder image',
            project: null,
            assignment: null
        },
        {
            url: 'https://via.placeholder.com/150',
            description: 'Placeholder image',
            project: null,
            assignment: null
        },
        {
            url: 'https://via.placeholder.com/150',
            description: 'Placeholder image',
            project: null,
            assignment: null
        },
        {
            url: 'https://via.placeholder.com/150',
            description: 'Placeholder image',
            project: null,
            assignment: null
        },
        {
            url: 'https://via.placeholder.com/150',
            description: 'Placeholder image',
            project: null,
            assignment: null
        },
        {
            url: 'https://via.placeholder.com/150',
            description: 'Placeholder image',
            project: null,
            assignment: null
        },
        {
            url: 'https://via.placeholder.com/150',
            description: 'Placeholder image',
            project: null,
            assignment: null
        },
        {
            url: 'https://via.placeholder.com/150',
            description: 'Placeholder image',
            project: null,
            assignment: null
        }
    ]);

    console.log('images seeded');

    process.exit();

});



