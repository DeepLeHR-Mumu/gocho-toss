import { FC, useEffect, useState } from "react";
import {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  useForm,
} from "react-hook-form";
import { useDisabledKeydownSubmit } from "shared-hook";
import { Button } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";
import { CancelModal, ResumeDropDown } from "@/pages/resume/component";
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
import { isPerfectCalculator } from "./component/HighSchoolForm/util";

export const EducationForm: FC<EducationFormProps> = ({ resumeId, handleEditMode, currentEducation }) => {
  const { setToastMessage } = useToast();
  useDisabledKeydownSubmit();

  const [cancelModal, setCancelModal] = useState(false);

  const [educationType, setEducationType] = useState<string>(currentEducation?.educationType || "");

  const {
    register,
    reset,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<EducationSubmitDef>({
    defaultValues: currentEducation ? educationOfDefaultValues(currentEducation) : typeOfDefaultValues(educationType),
    mode: "onSubmit",
  });

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

  const onSubmitResumeEducation: SubmitHandler<EducationSubmitDef> = async (data) => {
    const onEducationSuccess = () => {
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
            onSuccess: onEducationSuccess,
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
            onSuccess: onEducationSuccess,
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
            onSuccess: onEducationSuccess,
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
            onSuccess: onEducationSuccess,
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
            onSuccess: onEducationSuccess,
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
            onSuccess: onEducationSuccess,
          }
        );
      }

      return;
    }

    if (educationType === "고등학교" && isPostHighSchoolDef(data)) {
      const highSchoolData = {
        ...data,
        start_date: YYMMToDate(data.start_date),
        end_date: data.end_date ? YYMMToDate(data.end_date) : null,
        first_attendance: data.first_attendance
          ? {
              ...data.first_attendance,
              is_perfect: isPerfectCalculator(data.first_attendance, data.first_attendance.total_class_days),
            }
          : null,
        second_attendance: data.second_attendance
          ? {
              ...data.second_attendance,
              is_perfect: isPerfectCalculator(data.second_attendance, data.second_attendance.total_class_days),
            }
          : null,
        third_attendance: data.third_attendance
          ? {
              ...data.third_attendance,
              is_perfect: isPerfectCalculator(data.third_attendance, data.third_attendance.total_class_days),
            }
          : null,
      };

      if (currentEducation) {
        const { id } = currentEducation;

        putHighSchool(
          {
            resumeId,
            highschoolId: id,
            ...highSchoolData,
          },
          {
            onSuccess: onEducationSuccess,
          }
        );
      } else {
        postHighSchool(
          {
            resumeId,
            ...highSchoolData,
          },
          {
            onSuccess: onEducationSuccess,
          }
        );
      }
    }
  };

  return (
    <>
      {cancelModal && <CancelModal setModal={setCancelModal} confirmHandler={handleEditMode} />}

      <form css={cssObj.wrapper} onSubmit={handleSubmit(onSubmitResumeEducation)}>
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
            control={control as Control<PostHighSchoolDef>}
            setValue={setValue as UseFormSetValue<PostHighSchoolDef>}
            getValues={getValues as UseFormGetValues<PostHighSchoolDef>}
            register={register as UseFormRegister<PostHighSchoolDef>}
            errors={errors as FieldErrors<PostHighSchoolDef>}
          />
        )}
        {educationType === "대학교(2,3년제)" && isPostCollegeDef(getValues()) && (
          <CollegeForm
            control={control as Control<PostCollegeDef>}
            setValue={setValue as UseFormSetValue<PostCollegeDef>}
            getValues={getValues as UseFormGetValues<PostCollegeDef>}
            register={register as UseFormRegister<PostCollegeDef>}
            errors={errors as FieldErrors<PostCollegeDef>}
          />
        )}
        {educationType === "대학교(4년제)" && isPostUniversityDef(getValues()) && (
          <UniversityForm
            control={control as Control<PostUniversityDef>}
            errors={errors as FieldErrors<PostUniversityDef>}
            setValue={setValue as UseFormSetValue<PostUniversityDef>}
            getValues={getValues as UseFormGetValues<PostUniversityDef>}
            register={register as UseFormRegister<PostUniversityDef>}
          />
        )}
        {educationType === "기타" && isPostExtraDef(getValues()) && (
          <ExtraForm
            control={control as Control<PostExtraDef>}
            errors={errors as FieldErrors<PostExtraDef>}
            setValue={setValue as UseFormSetValue<PostExtraDef>}
            getValues={getValues as UseFormGetValues<PostExtraDef>}
            register={register as UseFormRegister<PostExtraDef>}
          />
        )}

        <div css={cssObj.buttonWrapper}>
          <Button size="small" type="submit">
            저장
          </Button>
          <Button size="small" type="button" onClick={() => setCancelModal(true)} color="outlineGray">
            취소
          </Button>
        </div>
      </form>
    </>
  );
};
