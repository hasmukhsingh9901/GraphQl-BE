import jwt from "jsonwebtoken";

export const authMiddleware = async (resolve, root, args, context, info) => {
  const token = context.req.headers.authorization;
  if (!token) {
    throw new Error("Not authenticated");
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    context.user = decodedToken;

    const { role } = decodedToken;

    const fullAccessRoles = ["admin", "superAdmin"];
    const limitedAccessRoles = ["sales", "user"];

    if (fullAccessRoles.includes(role)) {
      return resolve(root, args, context, info);
    } else if (limitedAccessRoles.includes(role)) {
      if (info.parentType.name === "Query") {
        return resolve(root, args, context, info);
      } else {
        throw new Error("Access denied: Limited access for this role");
      }
    } else {
      throw new Error("Access denied: Limited access for this role");
    }
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
