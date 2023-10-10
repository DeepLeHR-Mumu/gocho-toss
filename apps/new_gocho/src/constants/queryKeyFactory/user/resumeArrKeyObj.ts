import { RequestObj as UserApplyArrRequestObj } from "@/apis/users/resume/useUserApplyArr/type";
import { RequestObj as UserResumeProfileRequestObj } from "@/apis/users/resume/useUserResumeProfile/type";

export const resumeArrKeyObj = {
  all: [{ data: "resumeArr" }] as const,
  resumeArr: (userId: number) => [{ data: "resumeArr", userId }] as const,
  resumeProfile: (requestObj: UserResumeProfileRequestObj) => [{ data: "resumeProfile", requestObj }] as const,
  applyStatic: (userId: number) => [{ data: "applyStatic", userId }] as const,
  applyArr: (requestObj: UserApplyArrRequestObj) => [{ data: "applyArr", requestObj }] as const,
};
