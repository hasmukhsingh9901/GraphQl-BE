import { mergeTypeDefs } from "@graphql-tools/merge";
import { typeDefs } from "./user.schema.js";

const mergedType_defs = mergeTypeDefs([typeDefs]);

export default mergedType_defs;
