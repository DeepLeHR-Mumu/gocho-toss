import { FC, useState } from "react";
import { SubmitHandler, UseFormGetValues, UseFormRegister, UseFormSetValue, useForm } from "react-hook-form";

import { Button } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";
import { usePostResumeHighSchool } from "@/apis/resume/education/usePostResumeHighSchool";
import { PostCollegeDef, PostExtraDef, PostHighSchoolDef, PostUniversityDef } from "@/apis/resume/education/type";
import { usePostResumeCollege } from "@/apis/resume/education/usePostResumeCollege";

import { ResumeDropDown } from "@/pages/resume/component";

import { YYMMToDate } from "@/utils";

import { cssObj } from "./style";
import { CollegeForm, HighSchoolForm } from "./component";
import { educationTypeArr, highSchoolDefaultValue } from "./constants";
import { EducationFormProps, EducationSubmitDef } from "./type";

const isPostCollegeDef = (data: EducationSubmitDef): data is PostCollegeDef => "grade" in data;

export const isPostUniversityDef = (data: EducationSubmitDef): data is PostUniversityDef => "is_uturn" in data;

export const isPostExtraDef = (data: EducationSubmitDef): data is PostExtraDef => "education_type" in data;

const isHighSchoolDef = (data: EducationSubmitDef): data is PostHighSchoolDef => "is_alternative_test" in data;

export const EducationForm: FC<EducationFormProps> = ({ resumeId, handleEditMode, currentEducation }) => {
  const [educationType, setEducationType] = useState<string>(
    currentEducation ? currentEducation.educationType : "고등학교"
  );

  const { register, handleSubmit, setValue, getValues } = useForm<EducationSubmitDef>(
    currentEducation
      ? {}
      : {
          defaultValues: highSchoolDefaultValue,
        }
  );

  const { mutate: postHighSchool } = usePostResumeHighSchool();
  const { mutate: postCollege } = usePostResumeCollege();

  const { setToastMessage } = useToast();

  const onSubmitResumeEductaion: SubmitHandler<EducationSubmitDef> = async (data) => {
    const onSuccess = () => {
      setToastMessage("학력 항목 업로드가 완료되었습니다.");
      handleEditMode();
    };

    if (isPostCollegeDef(data)) {
      postCollege(
        {
          resumeId,
          ...data,
          start_date: YYMMToDate(data.start_date),
          end_date: data.end_date ? YYMMToDate(data.end_date) : null,
        },
        {
          onSuccess,
        }
      );

      return;
    }

    if (isHighSchoolDef(data)) {
      // setValue("first_attendance.is_perfect", false);
      // setValue("second_attendance.is_perfect", false);
      // setValue("third_attendance.is_perfect", false);

      postHighSchool(
        {
          resumeId,
          ...data,
          start_date: YYMMToDate(data.start_date),
          end_date: data.end_date ? YYMMToDate(data.end_date) : null,
        },
        {
          onSuccess,
        }
      );

      // if (currentEducation) {
      //   const { id } = currentFluency;

      //   putFluency(
      //     {
      //       resumeId,
      //       fluencyId: id,
      //       grade,
      //       acquisition_date: YYMMToDate(acquisition_date),
      //       language_type: languageType,
      //       name: languageTest,
      //     },
      //     {
      //       onSuccess,
      //     }
      //   );
      // } else {
      //   postHighSchool(
      //     {
      //       resumeId,
      //     },
      //     {
      //       onSuccess,
      //     }
      //   );
      // }
      // return;
    }

    // if(isPostUniversityDef()){

    // }
  };

  return (
    <form css={cssObj.wrapper} onSubmit={handleSubmit(onSubmitResumeEductaion)}>
      <div css={cssObj.inputWrapper}>
        <p>
          학력 구분 <strong css={cssObj.required}> *</strong>
        </p>
        <ResumeDropDown
          menuArr={educationTypeArr}
          setValue={setEducationType}
          value={educationType}
          placeholder="선택"
          onClickCallback={() => {
            // setLanguageTest("");
            // setValue("acquisition_date", "");
          }}
        />
      </div>
      {educationType === "고등학교" && isHighSchoolDef(getValues()) && (
        <HighSchoolForm
          setValue={setValue as UseFormSetValue<PostHighSchoolDef>}
          getValues={getValues as UseFormGetValues<PostHighSchoolDef>}
          register={register as UseFormRegister<PostHighSchoolDef>}
        />
      )}
      {educationType === "대학교 (2,3년제)" && isPostCollegeDef(getValues()) && (
        <CollegeForm
          setValue={setValue as UseFormSetValue<PostCollegeDef>}
          getValues={getValues as UseFormGetValues<PostCollegeDef>}
          register={register as UseFormRegister<PostCollegeDef>}
        />
      )}

      <div css={cssObj.buttonWrapper}>
        <Button size="small" type="submit">
          저장
        </Button>
        <Button size="small" type="button" onClick={handleEditMode} color="outlineGray">
          취소
        </Button>
      </div>
    </form>
  );
};
