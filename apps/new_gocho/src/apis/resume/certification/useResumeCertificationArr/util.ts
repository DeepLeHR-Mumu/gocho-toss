import { ResumeCertificationDef } from "../type";

export const selector = (certificationArr: ResumeCertificationDef[]) =>
  certificationArr.map((certification) => ({
    id: certification.id,
    name: certification.name,
    issuingAuthority: certification.issuing_authority,
    acquisitionDate: certification.acquisition_date,
  }));
