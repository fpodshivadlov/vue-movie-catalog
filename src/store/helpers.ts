import Vue from 'vue';

export const setState = <T extends object, K extends keyof T>(
  obj: T,
  key: Extract<K, string | number>,
  value: T[K],
) => {
  Vue.set(obj, key, value);
};
