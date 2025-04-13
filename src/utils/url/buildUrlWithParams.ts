export const buildPathWithParams = (
  basePath: string,
  params?: Record<string, string | number | undefined>
) => {
  if (!params) {
    return basePath;
  }
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (!value) {
      return;
    }
    searchParams.set(key, String(value));
  });

  const queryString = searchParams.toString();
  return queryString ? `${basePath}?${queryString}` : basePath;
};
