export interface RequestObjDef {
  email: string;
}

export interface ResponseObjDef {
  data: {
    is_exists: boolean;
  };
}

export const managerCheckEmailKeyObj = {
  all: [{ data: "managerCheckEmail" }] as const,
};

export interface PostManagerCheckEmailDef {
  ({ email }: RequestObjDef): Promise<ResponseObjDef>;
}
