import { FC, useEffect, useState } from "react";
import { SubmitHandler, UseFormGetValues, UseFormRegister, UseFormSetValue, useForm } from "react-hook-form";

import { Button } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";
import { ResumeDropDown } from "@/pages/resume/component";
import { YYMMToDate } from "@/utils";

import { PostCollegeDef, PostExtraDef, PostHighSchoolDef, PostUniversityDef } from "@/apis/resume/education/type";
import {
  usePostResumeCollege,
  usePostResumeExtra,
  usePostResumeHighSchool,
  usePostResumeUniversity,
  usePutResumeHighSchool,
  usePutResumeCollege,
  usePutResumeUniversity,
  usePutResumeExtra,
} from "@/apis/resume";

import { cssObj } from "./style";
import { CollegeForm, HighSchoolForm, UniversityForm } from "./component";
import { educationTypeArr } from "./constants";
import { EducationFormProps, EducationSubmitDef } from "./type";
import {
  isPostHighSchoolDef,
  isPostCollegeDef,
  isPostExtraDef,
  isPostUniversityDef,
  typeOfDefaultValues,
  educationOfDefaultValues,
} from "./utils";
import { ExtraForm } from "./component/ExtraForm";

export const EducationForm: FC<EducationFormProps> = ({ resumeId, handleEditMode, currentEducation }) => {
  const { setToastMessage } = useToast();

  const [educationType, setEducationType] = useState<string>(currentEducation?.educationType || "");

  const { register, reset, handleSubmit, setValue, getValues } = useForm<EducationSubmitDef>(
    currentEducation
      ? {
          defaultValues: educationOfDefaultValues(currentEducation),
        }
      : {
          defaultValues: typeOfDefaultValues(educationType),
        }
  );

  const [{ mutate: postHighSchool }, { mutate: postCollege }, { mutate: postUniversity }, { mutate: postExtra }] = [
    usePostResumeHighSchool(resumeId),
    usePostResumeCollege(resumeId),
    usePostResumeUniversity(resumeId),
    usePostResumeExtra(resumeId),
  ];

  const [{ mutate: putHighSchool }, { mutate: putCollege }, { mutate: putUniversity }, { mutate: putExtra }] = [
    usePutResumeHighSchool(resumeId),
    usePutResumeCollege(resumeId),
    usePutResumeUniversity(resumeId),
    usePutResumeExtra(resumeId),
  ];

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

    if (educationType === "대학교(4년제)" && isPostUniversityDef(data)) {
      if (currentEducation) {
        const { id } = currentEducation;

        putUniversity(
          {
            resumeId,
            universityId: id,
            ...data,
            start_date: YYMMToDate(data.start_date),
            end_date: data.end_date ? YYMMToDate(data.end_date) : null,
          },
          {
            onSuccess,
          }
        );
      } else {
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
      }

      return;
    }

    if (educationType === "대학교(2,3년제)" && isPostCollegeDef(data)) {
      if (currentEducation) {
        const { id } = currentEducation;

        putCollege(
          {
            resumeId,
            collegeId: id,
            ...data,
            start_date: YYMMToDate(data.start_date),
            end_date: data.end_date ? YYMMToDate(data.end_date) : null,
          },
          {
            onSuccess,
          }
        );
      } else {
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
      }

      return;
    }

    if (educationType === "기타" && isPostExtraDef(data)) {
      if (currentEducation) {
        const { id } = currentEducation;

        putExtra(
          {
            resumeId,
            extraId: id,
            ...data,
            start_date: YYMMToDate(data.start_date),
            end_date: data.end_date ? YYMMToDate(data.end_date) : null,
          },
          {
            onSuccess,
          }
        );
      } else {
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
      }

      return;
    }

    if (educationType === "고등학교" && isPostHighSchoolDef(data)) {
      // setValue("first_attendance.is_perfect", false);
      // setValue("second_attendance.is_perfect", false);
      // setValue("third_attendance.is_perfect", false);

      if (currentEducation) {
        const { id } = currentEducation;

        putHighSchool(
          {
            resumeId,
            highschoolId: id,
            ...data,
            start_date: YYMMToDate(data.start_date),
            end_date: data.end_date ? YYMMToDate(data.end_date) : null,
          },
          {
            onSuccess,
          }
        );
      } else {
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
      }
    }
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
      {educationType === "고등학교" && isPostHighSchoolDef(getValues()) && (
        <HighSchoolForm
          setValue={setValue as UseFormSetValue<PostHighSchoolDef>}
          getValues={getValues as UseFormGetValues<PostHighSchoolDef>}
          register={register as UseFormRegister<PostHighSchoolDef>}
        />
      )}
      {educationType === "대학교(2,3년제)" && isPostCollegeDef(getValues()) && (
        <CollegeForm
          setValue={setValue as UseFormSetValue<PostCollegeDef>}
          getValues={getValues as UseFormGetValues<PostCollegeDef>}
          register={register as UseFormRegister<PostCollegeDef>}
        />
      )}
      {educationType === "대학교(4년제)" && isPostUniversityDef(getValues()) && (
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
