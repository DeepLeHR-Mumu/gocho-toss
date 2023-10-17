export interface GetJdApplicantPdfDef {
  (jdId: number, applyIdArr?: number[]): Promise<any>;
}

export const jdApplicantPdfKeyObj = {
  all: [{ data: "jdApplicantPdf" }] as const,
  applyPdf: (jdId: number, applyIdArr?: number[]) => [{ data: "jdApplicantPdf", jdId, applyIdArr }] as const,
};
