import { mergeTypeDefs } from "@graphql-tools/merge";
import userSchema from "./user.schema.js";

const mergedType_defs = mergeTypeDefs([userSchema]);
export default mergedType_defs