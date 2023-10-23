import { FC, useEffect, useState } from "react";
import { SubmitHandler, UseFormGetValues, UseFormRegister, UseFormSetValue, useForm } from "react-hook-form";

import { Button } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";
import { PostCollegeDef, PostExtraDef, PostHighSchoolDef, PostUniversityDef } from "@/apis/resume/education/type";

import { usePostResumeCollege } from "@/apis/resume/education/usePostResumeCollege";
import { usePostResumeExtra } from "@/apis/resume/education/usePostResumeExtra";
import { usePostResumeHighSchool } from "@/apis/resume/education/usePostResumeHighSchool";
import { usePostResumeUniversity } from "@/apis/resume/education/usePostResumeUniversity";

import { ResumeDropDown } from "@/pages/resume/component";

import { YYMMToDate } from "@/utils";

import { cssObj } from "./style";
import { CollegeForm, HighSchoolForm, UniversityForm } from "./component";
import { educationTypeArr } from "./constants";
import { EducationFormProps, EducationSubmitDef } from "./type";
import { isHighSchoolDef, isPostCollegeDef, isPostExtraDef, isPostUniversityDef, typeOfDefaultValues } from "./utils";
import { ExtraForm } from "./component/ExtraForm";

export const EducationForm: FC<EducationFormProps> = ({ resumeId, handleEditMode, currentEducation }) => {
  const { setToastMessage } = useToast();

  const [educationType, setEducationType] = useState<string>(currentEducation?.educationType || "고등학교");

  const { register, reset, handleSubmit, setValue, getValues } = useForm<EducationSubmitDef>(
    currentEducation
      ? {}
      : {
          defaultValues: typeOfDefaultValues(educationType),
        }
  );

  const { mutate: postHighSchool } = usePostResumeHighSchool();
  const { mutate: postCollege } = usePostResumeCollege();
  const { mutate: postUniversity } = usePostResumeUniversity();
  const { mutate: postExtra } = usePostResumeExtra();

  useEffect(() => {
    if (!currentEducation) {
      reset(typeOfDefaultValues(educationType));
    }
  }, [educationType, reset, currentEducation]);

  const onSubmitResumeEductaion: SubmitHandler<EducationSubmitDef> = async (data) => {
    const onSuccess = () => {
      setToastMessage("학력 항목 업로드가 완료되었습니다.");
      handleEditMode();
    };

    if (educationType === "대학교 (4년제)" && isPostUniversityDef(data)) {
      postUniversity(
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

    if (educationType === "대학교 (2,3 년제)" && isPostCollegeDef(data)) {
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

    if (educationType === "기타" && isPostExtraDef(data)) {
      postExtra(
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

    if (educationType === "고등학교" && isHighSchoolDef(data)) {
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
      {educationType === "대학교 (4년제)" && isPostUniversityDef(getValues()) && (
        <UniversityForm
          setValue={setValue as UseFormSetValue<PostUniversityDef>}
          getValues={getValues as UseFormGetValues<PostUniversityDef>}
          register={register as UseFormRegister<PostUniversityDef>}
        />
      )}
      {educationType === "기타" && isPostExtraDef(getValues()) && (
        <ExtraForm
          setValue={setValue as UseFormSetValue<PostExtraDef>}
          getValues={getValues as UseFormGetValues<PostExtraDef>}
          register={register as UseFormRegister<PostExtraDef>}
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
