import { FieldErrors, FieldValues } from 'react-hook-form';

export default function fieldHasErrors<T extends FieldValues>(
  errors: FieldErrors<T>,
  field: string
) {
  return !!flattenObject(errors)[`${field}.message`];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flattenObject = (object: Record<string, any>, parentKey?: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: Record<string, any> = {};
  for (const key in object) {
    if (key === 'ref') {
      // errors obj has a ref key that's very large and not needed here
      continue;
    }

    if (!(key in object)) {
      continue;
    }

    const value = object[key];
    const _key = parentKey ? parentKey + '.' + key : key;
    if (typeof value === 'object') {
      result = { ...result, ...flattenObject(value, _key) };
    } else {
      result[_key] = value;
    }
  }
  return result;
};
