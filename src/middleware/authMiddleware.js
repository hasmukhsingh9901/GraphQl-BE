import jwt from "jsonwebtoken";

export const authMiddleware = async (resolve, root, args, context, info) => {
  const token = context.req.headers.authorization;

  if (!token) {
    throw new Error("Not authenticated");
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken.role) {
      throw new Error("Access denied: Role is missing");
    }

    context.user = decodedToken;

    const { role } = decodedToken;
    console.log(`User Role: ${role}`); // For debugging purposes

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
      throw new Error("Access denied: Role not recognized");
    }
  } catch (error) {
    console.error("Authentication error:", error); // Log errors for debugging
    throw new Error("Invalid or expired token");
  }
};
