import { UserInfoObjDef } from "../type/userInfo";

export const selector = (data: UserInfoObjDef) => {
  return {
    id: data.id,
    email: data.email,
    nickname: data.nickname,
    badge: data.badge,
    image: data.image,
  };
};
