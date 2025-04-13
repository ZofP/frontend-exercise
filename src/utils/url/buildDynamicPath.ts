export const buildDynamicPath = (
  basePath: string,
  params?: Record<string, string | number | undefined>
) => {
  if (!params) {
    return basePath;
  }

  let path = basePath;

  Object.entries(params).forEach(([key, value]) => {
    if (!value) {
      return;
    }
    path = path.replace(`:${key}`, String(value));
  });

  return path;
};
