export const resumeExtraKeyObj = {
  all: [{ data: "resumeExtra" }] as const,
  extra: (resumeId: number, extraId?: number) => [{ data: "resumeExtra", resumeId, extraId }] as const,
};
