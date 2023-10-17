export const resumeCollegeKeyObj = {
  all: [{ data: "resumeCollege" }] as const,
  college: (resumeId: number, collegeId: number) => [{ data: "resumeCollege", resumeId, collegeId }] as const,
};
