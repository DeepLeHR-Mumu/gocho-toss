export interface RequestObjDef {
  nickname: string;
}

export interface ResponseObjDef {
  data: {
    result: "NEW_USER" | "GOCHO_USER" | "KAKAO_LOGIN_OK";
    token: string | undefined;
  };
}

export interface PostKakaoRegisterDef {
  ({ nickname }: RequestObjDef): Promise<ResponseObjDef>;
}
