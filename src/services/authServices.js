import { User } from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";
import { hashPassword } from "../utils/hashPassword.js";



export const signup = async (username, email, password, role) => {
  const hashedPassword = await hashPassword(password);
  const user = await User.create({ username, email, password: hashedPassword, role });
  const token = generateToken(user.id, user.role);
  return { user, token };
};

export const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = generateToken(user.id, user.role);
  return { user, token };
};
