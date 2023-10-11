export const resumeActivityKeyObj = {
  all: [{ data: "resumeActivity" }] as const,
  activityArr: (resumeId: number) => [{ data: "resumeActivity", resumeId }] as const,
  activity: (resumeId: number, activityId: number) => [{ data: "resumeActivity", resumeId, activityId }] as const,
};
