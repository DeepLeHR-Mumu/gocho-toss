export const resumeCareerKeyObj = {
  all: [{ data: "resumeCareer" }] as const,
  careerArr: (resumeId: number) => [{ data: "resumeCareer", resumeId }] as const,
  career: (resumeId: number, careerId?: number) => [{ data: "resumeCareer", resumeId, careerId }] as const,
};
