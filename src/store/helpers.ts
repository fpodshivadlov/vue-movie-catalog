export const nameOf = <T>(name: Extract<keyof T, string>): string => name;

export interface NamespaceNames {
  [key: string]: string;
}

type EmptyNamespaceNames<T extends NamespaceNames> = {
  [P in keyof T]: null;
};

export interface AllNamespacesNames {
  [namespace: string]: NamespaceNames;
}

export const initNames = <TNsNames extends NamespaceNames>(ns: EmptyNamespaceNames<TNsNames>): TNsNames => {
  const result: NamespaceNames = {};
  for (const [key] of Object.entries(ns)) {
    result[key] = `${key}`;
  }

  return result as TNsNames;
}

const mapModuleNames = <TNsNames extends NamespaceNames>(prefix: string, ns: TNsNames): TNsNames => {
  const result: NamespaceNames = {};
  for (const [key, value] of Object.entries(ns)) {
    result[key] = `${prefix}/${value}`;
  }

  return result as TNsNames;
}

export const mapAllModulesNames = <TNamespaces extends AllNamespacesNames>(ns: TNamespaces): TNamespaces => {
  const result: AllNamespacesNames = {};
  for (const [key, value] of Object.entries(ns)) {
    result[key] = mapModuleNames(key, value);
  }

  return result as TNamespaces;
}
