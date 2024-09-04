# GraphQL Auth Backend

This is a backend service built with Node.js, TypeScript, and GraphQL, designed to handle user authentication and authorization.

## Project Structure

The project is organized as follows:

```bash
graphql-auth-backend/
├── src/
│   ├── config/
│   │   └── db.ts              # Database configuration
│   ├── middleware/
│   │   ├── authMiddleware.ts  # Middleware for authentication
│   │   └── roleMiddleware.ts  # Middleware for role-based access control
│   ├── models/
│   │   └── User.ts            # Mongoose schema and model for User
│   ├── resolvers/
│   │   ├── userResolvers.ts   # GraphQL resolvers for user-related operations
│   │   └── index.ts           # Entry point for all resolvers
│   ├── schemas/
│   │   └── userSchema.ts      # GraphQL schema for user-related operations
│   ├── services/
│   │   ├── authService.ts     # Service for handling authentication logic
│   │   └── userService.ts     # Service for user-related operations
│   ├── utils/
│   │   ├── generateToken.ts   # Utility function to generate JWT tokens
│   │   └── hashPassword.ts    # Utility function to hash passwords
│   ├── index.ts               # Entry point for the application
│   └── .env                   # Environment variables
├── package.json                # Project dependencies and scripts
└── tsconfig.json               # TypeScript configuration
