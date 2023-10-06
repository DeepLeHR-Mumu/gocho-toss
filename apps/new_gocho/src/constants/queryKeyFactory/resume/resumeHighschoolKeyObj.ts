export const resumeHighschoolKeyObj = {
  all: [{ data: "resumeHighschool" }] as const,
  highschool: (resumeId: number, highschoolId: number) =>
    [{ data: "resumeHighschool", resumeId, highschoolId }] as const,
};
