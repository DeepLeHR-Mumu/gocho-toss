import { ResumeCertificationDef } from "../type";

export const selector = (certification: ResumeCertificationDef) => ({
  id: certification.id,
  name: certification.name,
  issuingAuthority: certification.issuing_authority,
  acquisitionDate: certification.acquisition_date,
});
