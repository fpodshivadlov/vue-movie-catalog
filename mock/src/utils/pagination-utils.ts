import { CollectionResult } from './types';

export const paginate = <T>(
  collection: T[],
  limit: number,
  offset: number,
): CollectionResult<T> => {
  return {
    data: collection?.slice(offset, offset + limit) || [],
    total: collection?.length || 0,
    offset: offset,
  }
};
