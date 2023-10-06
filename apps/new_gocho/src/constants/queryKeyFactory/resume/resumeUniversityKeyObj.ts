export const resumeUniversityKeyObj = {
  all: [{ data: "resumeUniversity" }] as const,
  university: (resumeId: number, universityId: number) =>
    [{ data: "resumeUniversity", resumeId, universityId }] as const,
};
