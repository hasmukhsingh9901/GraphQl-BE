import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import { getUserFromToken } from "./middleware/authMiddleware.js";
import mergedType_defs from "./graphQL/schemas/index.js";
import merged_resolvers from "./graphQL/resolvers/index.js";
import { connectDB } from "./config/db.js";

const app = express();

dotenv.config();

connectDB();

const server = new ApolloServer({
  typeDefs: mergedType_defs,
  resolvers: merged_resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization?.split(' ')[1] || "";
    const user = getUserFromToken(token);
    return { user };
  },
});

server.start().then(() => {
  server.applyMiddleware({ app });

  app.listen(process.env.PORT, () =>
    console.log(`Server running at ${process.env.PORT}`)
  );
});
