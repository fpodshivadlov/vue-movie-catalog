export type SearchableElement = string | number | null | undefined | SearchableElement[];

export type ByField<T> = keyof T;

export type SearchableElementCompatible<T> = { 
  [P in keyof T] : Extract<T[P], SearchableElement>;
};

export interface CollectionResult<T> {
  data: T[];
  total: number;
  offset: number;
}
  