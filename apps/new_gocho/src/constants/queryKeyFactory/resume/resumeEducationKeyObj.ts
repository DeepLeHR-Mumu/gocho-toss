export const resumeEducationKeyObj = {
  all: [{ data: "resumeEducation" }] as const,
  educationArr: (resumeId: number) => [{ data: "resumeEducation", resumeId }] as const,
};
