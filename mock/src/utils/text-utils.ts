import { SearchableElement } from './types';

export const getStringValue = (obj: SearchableElement): string => {
  if (!obj)
    return '';

  if (Array.isArray(obj)) {
    return obj.map(x => getStringValue(x)).join(' ');
  }

  return obj.toString().toLowerCase();
}

export const containsText = (obj: SearchableElement, text: string) => {
  return getStringValue(obj).indexOf(getStringValue(text)) > -1;
}

export const compare = (e1: SearchableElement, e2: SearchableElement): number => {
  var value1 = getStringValue(e1);
  var value2 = getStringValue(e2);

  if (value1 > value2)
    return 1;

  if (value1 < value2)
    return -1;

  return 0;
}
