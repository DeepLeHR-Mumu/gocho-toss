import { UserInfoObjDef } from "../type/userInfo";

export const selector = (data: UserInfoObjDef) => ({
    id: data.id,
    email: data.email,
    nickname: data.nickname,
    badge: data.badge,
    image: data.image,
  });
