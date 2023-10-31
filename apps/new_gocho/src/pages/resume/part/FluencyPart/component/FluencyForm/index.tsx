import { FC, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "shared-ui/deeple-ds";

import { PostFluencyDef } from "@/apis/resume/fluency/type";
import { CancelModal, ResumeDropDown } from "@/pages/resume/component";

import { usePostResumeFluency, usePutResumeFluency } from "@/apis/resume";

import { useToast } from "@/globalStates";
import { YYMMToDate, dateToYYMM } from "@/utils";

import { languageArr, testArr } from "./constant";
import { cssObj } from "./style";
import { FluencyFormProps } from "./type";

export const FluencyForm: FC<FluencyFormProps> = ({ handleEditMode, resumeId, currentFluency }) => {
  const [languageType, setLanguageType] = useState<string>(currentFluency?.languageType || "");
  const [languageTest, setLanguageTest] = useState<string>(currentFluency?.name || "");
  const [cancelModal, setCancelModal] = useState(false);

  const { setToastMessage } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<PostFluencyDef>({
    mode: "onChange",

    defaultValues:
      currentFluency !== null
        ? {
            grade: currentFluency.grade,
            name: currentFluency.name,
            acquisition_date: dateToYYMM(currentFluency.acquisitionDate),
          }
        : {},
  });

  const { mutate: postFluency } = usePostResumeFluency(resumeId);
  const { mutate: putFluency } = usePutResumeFluency(resumeId);

  const onSubmitResumeFluency: SubmitHandler<PostFluencyDef> = async (data) => {
    const { acquisition_date, grade } = data;

    const onFluencySuccess = () => {
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
          onSuccess: onFluencySuccess,
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
          onSuccess: onFluencySuccess,
        }
      );
    }
  };

  return (
    <>
      {cancelModal && <CancelModal setModal={setCancelModal} confirmHandler={handleEditMode} />}
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

              <Controller
                name="name"
                control={control}
                rules={{ required: "해당 항목을 선택해주세요" }}
                render={({ field, fieldState }) => (
                  <ResumeDropDown
                    menuArr={testArr(languageType)}
                    setValue={(value) => {
                      field.onChange(value);
                      setLanguageTest(value);
                    }}
                    value={field.value}
                    placeholder="선택"
                    state={{
                      state: fieldState.invalid ? "error" : "default",
                      message: fieldState.error?.message,
                    }}
                  />
                )}
              />
            </div>
            <div css={cssObj.inputBox}>
              <div css={cssObj.inputWrapper}>
                <p>
                  점수/등급 <strong css={cssObj.required}> *</strong>
                </p>
                <Input
                  placeholder="점수 입력"
                  maxLength={6}
                  state={{
                    state: errors.grade ? "error" : "default",
                    message: errors.grade?.message,
                  }}
                  {...register("grade", {
                    required: {
                      value: true,
                      message: "해당 항목을 입력해 주세요.",
                    },
                  })}
                />
              </div>
              <div css={cssObj.inputWrapper}>
                <p>
                  취득 연월 <strong css={cssObj.required}> *</strong>
                </p>
                <Input
                  placeholder="예) 200101"
                  width={200}
                  maxLength={6}
                  state={{
                    state: errors.acquisition_date ? "error" : "default",
                    message: errors.acquisition_date?.message,
                  }}
                  {...register("acquisition_date", {
                    required: {
                      value: true,
                      message: "해당 항목을 입력해주세요",
                    },
                    pattern: {
                      value: /^\d{4}(0[1-9]|1[0-2])$/i,
                      message: "올바른 활동 연월을 입력해 주세요",
                    },
                  })}
                />
              </div>
            </div>
          </>
        )}

        <div css={cssObj.buttonWrapper}>
          <Button size="small" type="submit">
            저장
          </Button>
          <Button size="small" type="button" onClick={() => setCancelModal(false)} color="outlineGray">
            취소
          </Button>
        </div>
      </form>
    </>
  );
};
