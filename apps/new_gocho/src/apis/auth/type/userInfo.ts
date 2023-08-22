export interface UserInfoObjDef {
  is_logined: boolean;
  id: number;
  email: string;
  nickname: string;
  badge: "default" | "early_bird" | "admin";
  isKakao: boolean;
  iat: number;
  exp: number;
  iss: string;
  sub: string;
  image: string;
}
