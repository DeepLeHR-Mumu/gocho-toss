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
  image: "default" | "default_work" | "jobi" | "jobi_safety" | "jobi_chat" | "jobi_play" | "jobi_teach";
}
