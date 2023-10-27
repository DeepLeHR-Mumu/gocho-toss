import { AxiosResponse, AxiosError } from "axios";

export interface GetApplicantFileDef {
  (jdId: number, applicantIdArr?: number[]): Promise<AxiosResponse<Blob> | AxiosError>;
}
