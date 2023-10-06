export const resumeExtrasKeyObj = {
  all: [{ data: "resumeExtras" }] as const,
  extras: (resumeId: number, extraId: number) => [{ data: "resumeExtras", resumeId, extraId }] as const,
};
