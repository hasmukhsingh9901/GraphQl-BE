export const validationMiddleware = async (resolve, root, args, context, info) => {
    if (info.fieldName === 'createUser') {
      if (args.password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }
      if (!args.email.includes('@')) {
        throw new Error('Invalid email format');
      }
    }
    return resolve(root, args, context, info);
  };
  