import User from "../../models/user.models.js";

const userResolvers = {
  Query: {
    getAllUsers: async () => {
      return await User.find({});
    },
    getUserById: async (_, { id }) => {
      return await User.findById(id);
    },
    getUserByUsername: async (_, { username }) => {
      return await User.findOne({ username });
    },
  },
  Mutation: {
    createUser: async (_, { username, email, password }) => {
      const newUser = new User({ username, email, password });
      return await newUser.save();
    },
  },
};

export default userResolvers;
