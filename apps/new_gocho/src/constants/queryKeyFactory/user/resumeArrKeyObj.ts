export interface UserApplyArrRequestObj {
  userId: number;
  filter?: "complte" | "cancel" | "read" | "unread";
  page?: number;
  size?: number;
}
export interface UserResumeProfileRequestObj {
  userId: number;
}

export const resumeArrKeyObj = {
  all: [{ data: "resumeArr" }] as const,
  resumeArr: (userId: number) => [{ data: "resumeArr", userId }] as const,
  resumeProfile: (requestObj: UserResumeProfileRequestObj) => [{ data: "resumeProfile", requestObj }] as const,
  applyStatic: (userId: number) => [{ data: "applyStatic", userId }] as const,
  applyArr: (requestObj: UserApplyArrRequestObj) => [{ data: "applyArr", requestObj }] as const,
};
