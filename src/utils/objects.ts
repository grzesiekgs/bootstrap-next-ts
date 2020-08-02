const normalizePath = (path: string | number | (string | number)[]) => {
  if (path instanceof Array) {
    return path.map(String);
  }

  return String(path).split('.');
};

const reduceObjectKey = (object: any, key: string) => {
  if (object instanceof Object) {
    return object[key];
  }

  return undefined;
};

export const pick = <ObjectType extends Record<string, unknown>, Attributes extends keyof ObjectType>(
  object: ObjectType,
  attributes: Attributes[]
): Pick<ObjectType, Attributes> =>
  attributes.reduce<ObjectType>((newObject, attribute) => {
    if (object.hasOwnProperty(attribute)) {
      newObject[attribute] = object[attribute];
    }

    return newObject;
  }, {} as ObjectType);

export const get = <ReturnValue = any, DefaultValue = undefined>(
  object: Record<string, any> | any,
  path: string | number | (string | number)[],
  defaultValue?: DefaultValue
): ReturnValue | DefaultValue => {
  if (object !== Object(object)) {
    return defaultValue as DefaultValue;
  }

  const keyPath = normalizePath(path);
  const entry = keyPath.reduce(reduceObjectKey, object);

  if (entry === undefined) {
    return defaultValue as DefaultValue;
  }

  return entry;
};
