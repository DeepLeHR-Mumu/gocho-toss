import { useUserProfile } from "@/apis/auth";

type UserProfileRes = ReturnType<typeof useUserProfile>;
export type UserData = UserProfileRes["data"];
