export const getStringFromNestedObjectArrayByField = (array: any[], field: string): string => {
  let result = '';
  array.forEach((item, index, array) => {
    result += index === array.length - 1 ? item[field] : item[field] + ', ';
  });
  return result;
};
