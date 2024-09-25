const typeDefs = `
    type Assignment {
        _id: ID
        title: String
        description: String
        image: [Image]
        link: String
        github: String
        technologies: String
    }

    type Image {
        _id: ID
        url: String
        description: String
        project: [Project]
        assignment: [Assignment]
    }

    type Project {
        _id: ID
        name: String
        description: String
        link: String
        github: String
        technologies: String
        image: [Image]
        teammates: [Student]
    }

    type Student {
        _id: ID
        name: String
        email: String
        projects: [Project]
    }

    type Query {
        assignments: [Assignment]
        images: [Image]
        projects: [Project]
        students: [Student]
    }

    type Mutation {
        addAssignment(title: String!, description: String!, link: String, github: String, technologies: String): Assignment
        addImage(url: String!, description: String!, project: ID, assignment: ID): Image
        addProject(name: String!, description: String, link: String, github: String, technologies: String, image: ID, teammates: ID!): Project
        addStudent(name: String!, email: String!): Student
    }
`;

module.exports = typeDefs;

