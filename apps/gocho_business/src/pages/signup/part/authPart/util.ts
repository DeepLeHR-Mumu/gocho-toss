export const isSpecObj = (param: unknown): param is { email: string; password: string } => {
  // eslint-disable-next-line
  const typeGuard = (target: unknown): target is { email: any; password: any } =>
    !!param && typeof param === "object" && "email" in param && "password" in param;

  return typeGuard(param) && typeof param.email === "string" && typeof param.password === "string";
};
