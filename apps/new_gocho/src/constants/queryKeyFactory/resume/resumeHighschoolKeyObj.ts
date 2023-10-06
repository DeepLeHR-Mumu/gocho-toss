export const resumeHighSchoolKeyObj = {
  all: [{ data: "resumeHighSchool" }] as const,
  highSchool: (resumeId: number, highschoolId: number) =>
    [{ data: "resumeHighSchool", resumeId, highschoolId }] as const,
};
