import { useUserInfo } from "@/apis/auth";

export type NicknameInput = {
  nickName: string;
};

type UserProfileRes = ReturnType<typeof useUserInfo>;
export type UserData = UserProfileRes["data"];
