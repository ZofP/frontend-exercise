export const convertIsoToMs = (isoStringDate: string) =>
  new Date(isoStringDate).getTime();
