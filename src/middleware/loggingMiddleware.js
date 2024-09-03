export const loggingMiddleware = async (resolve, root, args, context, info) => {
  console.log(`Executing ${info.fieldName} with args: ${JSON.stringify(args)}`);

  const start = Date.now();
  const result = await resolve(root, args, context, info);
  const end = Date.now();

  console.log(`Executed ${info.fieldName} in ${end - start}ms`);
  return result;
};
