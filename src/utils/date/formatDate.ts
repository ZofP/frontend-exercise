export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};
