import { Resolver, FieldError, get } from "react-hook-form";
import { JobFormValues } from "./type";

export const getFieldArrayValue = (arrData: { value: string }[]) => arrData.map((item) => item.value);

export const getFieldArrayValueWithNull = (arrData: { value: string }[]) => {
  if (arrData.length === 0) {
    return null;
  }
  return arrData.map((item) => item.value);
};

function validateLength(name: string, value: string, errors: Record<string, FieldError>) {
  // Perform a custom validation depending on field name
  const minLength = name === "street" ? 6 : 3;

  if (!value || value.length < minLength) {
    return {
      ...errors,
      [name]: {
        type: `min-length-${minLength}`,
        message: `error`,
      },
    };
  }

  return errors;
}

export const customResolver: Resolver<JobFormValues> = (values, _context, { names }) => {
  let errors = {};
  if (names) {
    // Validate only changed fields
    errors = names.reduce((acc, name) => {
      const value = get(values, name);
      return validateLength(name, value, acc);
    }, {});
  } else {
    // Validate all fields on submit event
    errors = Object.entries(values).reduce((acc, [name, value]) => validateLength(name, value, acc), {});
  }

  return { values, errors };
};
