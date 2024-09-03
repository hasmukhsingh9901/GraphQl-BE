const typeDefs = `#graphql
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        isAdmin: Boolean!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        getAllUsers: [User]
        getUserById(id: ID!): User
        getUserByUsername(username: String!): User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
    }

    input RegisterInput {
        username: String!
        email: String!
        password: String!
    }
`;

export default typeDefs;
