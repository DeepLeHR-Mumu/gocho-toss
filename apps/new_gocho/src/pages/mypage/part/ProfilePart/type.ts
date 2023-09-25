import { useUserProfile } from "@/apis/auth";

export type NicknameInput = {
  nickName: string;
};

type UserProfileRes = ReturnType<typeof useUserProfile>;
export type UserData = UserProfileRes["data"];
