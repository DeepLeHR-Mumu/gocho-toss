import { ResumeFluencyDef } from "../type";

export const selector = (fluencyArr: ResumeFluencyDef[]) => {
  fluencyArr.map((fluency) => ({
    id: fluency.id,
    languageType: fluency.language_type,
    name: fluency.name,
    acquisitionDate: fluency.acquisition_date,
    grade: fluency.grade,
  }));
};
