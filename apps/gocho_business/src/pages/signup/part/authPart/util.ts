export const isSpecObj = (param: unknown): param is { email: string; password: string } =>
  !!param &&
  typeof param === "object" &&
  "email" in param &&
  typeof param.email === "string" &&
  "password" in param &&
  typeof param.password === "string";
