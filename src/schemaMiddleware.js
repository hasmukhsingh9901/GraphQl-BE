import merged_resolvers from "./graphQL/resolvers/index.js";
import mergedType_defs from "./graphQL/schema/index.js";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loggingMiddleware } from "./middleware/loggingMiddleware.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import { validationMiddleware } from "./middleware/validateMiddleware.js";

const schema = makeExecutableSchema({
  typeDefs: mergedType_defs,
  resolvers: merged_resolvers,
});

const schemaWithMiddleware = applyMiddleware(
  schema,
  // Custom Middlewares
  loggingMiddleware,
  validationMiddleware,
  authMiddleware
);

export default schemaWithMiddleware;
