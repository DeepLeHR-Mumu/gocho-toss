export const resumeCertificationKeyObj = {
  all: [{ data: "resumeCertification" }] as const,
  certificationArr: (resumeId: number) => [{ data: "resumeCertification", resumeId }] as const,
  certification: (resumeId: number, certificationId?: number) =>
    [{ data: "resumeCertification", resumeId, certificationId }] as const,
  certificationList: (q: string) => [{ data: "resumeCertificationList", q }] as const,
};
