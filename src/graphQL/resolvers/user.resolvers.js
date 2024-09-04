import { login, signup } from "../../services/authServices.js";

export const resolvers = {
  Query: {
    me: (parent, args, context) => {
      if (!context.user) {
        throw new Error("User not authenticated");
      }
      return context.user;
    },
  },
  Mutation: {
    signup: async (parent, { username, email, password, role }) => {
      return signup(username, email, password, role);
    },
    login: async (parent, { email, password }) => {
      return login(email, password);
    },
  },
};
