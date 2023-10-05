export const resumeArrKeyObj = {
  all: [{ data: "resumeArr" }] as const,
  resumeArr: (userId: number) => [{ data: "resumeArr", userId }] as const,
};
