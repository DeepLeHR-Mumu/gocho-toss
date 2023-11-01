import { AxiosResponse } from "axios";

export interface RequestObjDef {
  jdId?: number;
  applicantId?: number;
}

export interface GetJdApplicantPdfDef {
  (requestObj: RequestObjDef): Promise<AxiosResponse<Blob>>;
}

export const jdApplicantPdfKeyObj = {
  all: [{ data: "jdApplicantPdf" }] as const,
  applicantPdf: (requestObj: RequestObjDef) => [{ data: "jdApplicantPdf", requestObj }] as const,
};
