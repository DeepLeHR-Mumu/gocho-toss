import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "shared-ui/deeple-ds";

import { PostFluencyDef } from "@/apis/resume/fluency/type";
import { ResumeDropDown } from "@/pages/resume/component";

import { usePostResumeFluency } from "@/apis/resume/fluency/usePostResumeFluency";
import { usePutResumeFluency } from "@/apis/resume/fluency/usePutResumeFluency";

import { useToast } from "@/globalStates";
import { YYMMToDate, dateToYYMM } from "@/utils";

import { languageArr, testArr } from "./constant";
import { cssObj } from "./style";
import { FluencyFormProps } from "./type";

export const FluencyForm: FC<FluencyFormProps> = ({ handleEditMode, resumeId, currentFluency }) => {
  const [languageType, setLanguageType] = useState<string>(currentFluency?.languageType || "");
  const [languageTest, setLanguageTest] = useState<string>(currentFluency?.name || "");

  const { setToastMessage } = useToast();

  const { register, handleSubmit, setValue } = useForm<PostFluencyDef>({
    mode: "onChange",

    defaultValues: currentFluency && {
      grade: currentFluency.grade,
      acquisition_date: dateToYYMM(currentFluency.acquisitionDate),
    },
  });

  const { mutate: postFluency } = usePostResumeFluency(resumeId);
  const { mutate: putFluency } = usePutResumeFluency(resumeId);

  const onSubmitResumeFluency: SubmitHandler<PostFluencyDef> = async (data) => {
    const { acquisition_date, grade } = data;

    if (!languageType.length) {
      setToastMessage("언어를 선택해주세요.");
      return;
    }

    if (!languageTest.length) {
      setToastMessage("시험 유형을 선택해주세요.");
      return;
    }

    const onSuccess = () => {
      setToastMessage("어학 항목 업로드가 완료되었습니다.");

      handleEditMode();
    };

    if (currentFluency) {
      const { id } = currentFluency;

      putFluency(
        {
          resumeId,
          fluencyId: id,
          grade,
          acquisition_date: YYMMToDate(acquisition_date),
          language_type: languageType,
          name: languageTest,
        },
        {
          onSuccess,
        }
      );
    } else {
      postFluency(
        {
          resumeId,
          grade,
          acquisition_date: YYMMToDate(acquisition_date),
          language_type: languageType,
          name: languageTest,
        },
        {
          onSuccess,
        }
      );
    }
  };

  return (
    <form css={cssObj.wrapper} onSubmit={handleSubmit(onSubmitResumeFluency)}>
      <div css={cssObj.inputWrapper}>
        <p>
          언어 <strong css={cssObj.required}> *</strong>
        </p>
        <ResumeDropDown
          menuArr={languageArr}
          setValue={setLanguageType}
          value={languageType}
          placeholder="선택"
          onClickCallback={() => {
            setLanguageTest("");
            setValue("grade", "");
            setValue("acquisition_date", "");
          }}
        />
      </div>

      {languageType.length > 0 && (
        <>
          <div css={cssObj.inputWrapper}>
            <p>
              시험 유형 <strong css={cssObj.required}> *</strong>
            </p>
            <ResumeDropDown
              menuArr={testArr(languageType)}
              setValue={setLanguageTest}
              value={languageTest}
              placeholder="선택"
            />
          </div>
          <div css={cssObj.inputBox}>
            <div css={cssObj.inputWrapper}>
              <p>
                점수/등급 <strong css={cssObj.required}> *</strong>
              </p>
              <Input placeholder="점수 입력" maxLength={6} {...register("grade", { required: true })} />
            </div>
            <div css={cssObj.inputWrapper}>
              <p>
                취득 연월 <strong css={cssObj.required}> *</strong>
              </p>
              <Input placeholder="예) 200101" maxLength={6} {...register("acquisition_date", { required: true })} />
            </div>
          </div>
        </>
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
