import { AxiosResponse } from "axios";

export interface GetJdApplicantPdfDef {
  (jdId: number, applicantIdArr?: number[]): Promise<AxiosResponse<Blob>>;
}
