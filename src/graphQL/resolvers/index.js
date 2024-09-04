import { mergeResolvers } from "@graphql-tools/merge";
import { resolvers } from "./user.resolvers.js";

const merged_resolvers = mergeResolvers([resolvers]);

export default merged_resolvers;
