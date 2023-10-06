export const resumeFluencyKeyObj = {
  all: [{ data: "resumeFluency" }] as const,
  fluencyArr: (resumeId: number) => [{ data: "resumeFluencyArr", resumeId }] as const,

  fluency: (resumeId: number, fluencyId: number) => [{ data: "resumeFluency", resumeId, fluencyId }] as const,
};
