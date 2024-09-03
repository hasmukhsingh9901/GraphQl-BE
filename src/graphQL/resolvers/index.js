import { mergeResolvers } from "@graphql-tools/merge";
import userResolvers from './user.resolver.js'


const merged_resolvers = mergeResolvers([userResolvers]);

export default merged_resolvers;
