export const year = (value: string) => {
  if (value) {
    const result = /(\d{4})-\d{2}-\d{2}/g.exec(value);
    if (result) return result[1];
  }
  return '';
};
