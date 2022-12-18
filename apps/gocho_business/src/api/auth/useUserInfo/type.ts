export interface UserInfoObjDef {
  sub: string | undefined;
  id: number;
  email: string;
  nickname: string;
  badge: string;
  isKakao: boolean;
  image: string;
  role: string;
  type: number;
  iat: number;
  exp: number;
  iss: string;
}
