import { SearchableElementCompatible, ByField } from './types';
import { containsText, compare } from './text-utils';

export const collectionFind = <T>(
  collection: SearchableElementCompatible<T>[],
  textSearchBy: ByField<SearchableElementCompatible<T>>,
  textSearch: string,
  sortBy: ByField<SearchableElementCompatible<T>>,
  sortAsc: boolean, 
) => {
  if (!collection)
    return [];
  
  if (textSearch && textSearchBy) {
    collection = collection
      .filter(x => containsText(x[textSearchBy], textSearch));
  }

  if (sortBy) {
    collection = collection
      .sort((a, b) => compare(a[sortBy], b[sortBy]) * (sortAsc ? 1: -1));
  }

  return collection;
};
