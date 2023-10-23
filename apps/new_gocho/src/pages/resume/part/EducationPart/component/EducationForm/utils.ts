import { PostCollegeDef, PostExtraDef, PostHighSchoolDef, PostUniversityDef } from "@/apis/resume/education/type";
import { EducationSubmitDef } from "./type";
import { collegeDefaultValue, highSchoolDefaultValue, universityDefaultValue, extraDefaultValue } from "./constants";

export const isPostCollegeDef = (data: EducationSubmitDef): data is PostCollegeDef => "grade" in data;

export const isPostUniversityDef = (data: EducationSubmitDef): data is PostUniversityDef => "is_uturn" in data;

export const isPostExtraDef = (data: EducationSubmitDef): data is PostExtraDef => "start_date" in data;

export const isHighSchoolDef = (data: EducationSubmitDef): data is PostHighSchoolDef => "is_alternative_test" in data;

export const typeOfDefaultValues = (educationType: string) => {
  switch (educationType) {
    case "고등학교":
      return highSchoolDefaultValue;
    case "대학교 (2,3년제)":
      return collegeDefaultValue;
    case "대학교 (4년제)":
      return universityDefaultValue;
    case "기타":
      return extraDefaultValue;
    default:
      break;
  }

  return {};
};
