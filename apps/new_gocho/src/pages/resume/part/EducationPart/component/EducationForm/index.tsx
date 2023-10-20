import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "shared-ui/deeple-ds";
import { useToast } from "@/globalStates";
import { usePostResumeHighSchool } from "@/apis/resume/education/usePostResumeHighSchool";
import { PostHighSchoolDef } from "@/apis/resume/education/type";

import { ResumeDropDown } from "@/pages/resume/component";

// import { PostCollegeDef, PostExtraDef, PostHighSchoolDef, PostUniversityDef } from "@/apis/resume/education/type";

import { cssObj } from "./style";
import { HighSchoolForm } from "./component";
import { educationTypeArr, highSchoolDefaultValue } from "./constants";
import { EducationFormProps } from "./type";

export const EducationForm: FC<EducationFormProps> = ({ resumeId, handleEditMode, currentEducation }) => {
  const [educationType, setEducationType] = useState<string>(
    currentEducation ? currentEducation.educationType : "고등학교"
  );

  const { register, handleSubmit, setValue, getValues } = useForm<PostHighSchoolDef>({
    defaultValues: highSchoolDefaultValue,
  });

  const { mutate: postHighSchool } = usePostResumeHighSchool();

  const { setToastMessage } = useToast();

  const onSubmitResumeEductaion: SubmitHandler<PostHighSchoolDef> = async (data) => {
    // const { acquisition_date, grade } = data;
    setValue("first_attendance.is_perfect", false);
    setValue("second_attendance.is_perfect", false);
    setValue("third_attendance.is_perfect", false);

    const onSuccess = () => {
      setToastMessage("학력 항목 업로드가 완료되었습니다.");

      handleEditMode();
    };

    postHighSchool(
      {
        resumeId,
        ...data,
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
      {educationType === "고등학교" && <HighSchoolForm setValue={setValue} getValues={getValues} register={register} />}

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
