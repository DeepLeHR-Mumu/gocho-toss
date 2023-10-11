import { ResumeFluencyDef } from "../type";

export const selector = (fluency: ResumeFluencyDef) => ({
  id: fluency.id,
  languageType: fluency.language_type,
  name: fluency.name,
  acquisitionDate: fluency.acquisition_date,
  grade: fluency.grade,
});
