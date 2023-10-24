export const resumeHighSchoolKeyObj = {
  all: [{ data: "resumeHighSchool" }] as const,

  highSchool: (resumeId: number, highSchoolId?: number) =>
    [{ data: "resumeHighSchool", resumeId, highSchoolId }] as const,
};
