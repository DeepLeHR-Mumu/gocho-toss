export interface RequestObjDef {
  nickname: string;
}

export interface ResponseObjDef {
  data: {
    result: "NEW_USER" | "GOCHO_USER" | "KAKAO_LOGIN_OK";
    access_token: string | undefined;
    refresh_token: string | undefined;
  };
}

export interface PostKakaoRegisterDef {
  ({ nickname }: RequestObjDef): Promise<ResponseObjDef>;
}
