import { UserInfoObjDef } from "./type";

export const selector = (data: UserInfoObjDef) => ({
  sub: data.sub,
  id: data.id,
  email: data.email,
  nickname: data.nickname,
  badge: data.badge,
  isKakao: data.isKakao,
  image: data.image,
  role: data.role,
  type: data.type,
  iat: data.iat,
  exp: data.exp,
  iss: data.iss,
});
