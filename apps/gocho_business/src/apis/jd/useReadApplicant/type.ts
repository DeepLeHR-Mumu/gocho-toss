import { AxiosResponse } from "axios";

export interface PatchReadApplicantDef {
  (requestObj: { jdId: number; applicantIdArr?: number[] }): Promise<AxiosResponse<void>>;
}
