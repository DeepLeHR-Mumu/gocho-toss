import { useUserProfile } from "@/apis/auth";

export type NickNameInputs = {
  nickName: string;
};

type UserProfileRes = ReturnType<typeof useUserProfile>;
export type UserData = UserProfileRes["data"];
