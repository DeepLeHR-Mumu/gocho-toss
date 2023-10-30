import { FC, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { Button, Input, Switch, Textarea } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";
import { ResumeDropDown } from "@/pages/resume/component";

import { PostCareerDef } from "@/apis/resume/career/type";

import { usePostResumeCareer, usePutResumeCareer } from "@/apis/resume";
import { YYMMToDate } from "@/utils";

import { cssObj } from "./style";
import { careerDefaultValue, contractTypeArr } from "./constants";
import { careerToDefaultValue } from "./util";
import { CareerFormProps } from "./type";

export const CareerForm: FC<CareerFormProps> = ({ handleEditMode, resumeId, currentCareer }) => {
  const [isWorking, setIsWorking] = useState(currentCareer?.isWorking || false);

  const { setToastMessage } = useToast();

  const {
    register,
    control,
    setValue,
    getValues,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<PostCareerDef>({
    mode: "onSubmit",

    defaultValues: currentCareer ? careerToDefaultValue(currentCareer) : careerDefaultValue,
  });

  const { mutate: postCareer } = usePostResumeCareer(resumeId);
  const { mutate: putCareer } = usePutResumeCareer(resumeId);

  const onSubmitResumeCareer: SubmitHandler<PostCareerDef> = async (data) => {
    // TODO: length가 0 인경우 null 처리 하기 (부서, 회사)

    const onCareerSuccess = () => {
      setToastMessage("경력 항목 업로드가 완료되었습니다.");

      handleEditMode();
    };

    if (currentCareer) {
      const { id } = currentCareer;

      putCareer(
        {
          resumeId,
          careerId: id,
          ...data,
          start_date: YYMMToDate(data.start_date),
          end_date: data.end_date ? YYMMToDate(data.end_date) : null,
          is_working: isWorking,
        },
        {
          onSuccess: onCareerSuccess,
        }
      );
    } else {
      postCareer(
        {
          resumeId,
          ...data,
          start_date: YYMMToDate(data.start_date),
          end_date: data.end_date ? YYMMToDate(data.end_date) : null,
          is_working: isWorking,
        },
        {
          onSuccess: onCareerSuccess,
        }
      );
    }
  };

  useEffect(() => {
    if (isWorking) {
      setValue("end_date", null);
      clearErrors("end_date");
    }
  }, [setValue, clearErrors, isWorking]);

  return (
    <form onSubmit={handleSubmit(onSubmitResumeCareer)} css={cssObj.wrapper}>
      <div css={cssObj.inputWrapper}>
        <p>
          회사명 <strong css={cssObj.required}> *</strong>
        </p>
        <Input
          placeholder="회사명을 입력해 주세요"
          css={cssObj.schoolInput}
          state={{
            state: errors.name ? "error" : "default",
            message: errors.name ? errors.name.message : "",
          }}
          maxLength={20}
          {...register("name", {
            required: {
              value: true,
              message: "해당 항목을 입력해주세요",
            },
            maxLength: 20,
          })}
        />
      </div>
      <div css={cssObj.inputFlexbox}>
        <div css={cssObj.inputWrapper}>
          <p>
            입사 연월 <strong css={cssObj.required}> *</strong>
          </p>
          <Input
            placeholder="예)200101"
            state={{
              state: errors.start_date ? "error" : "default",
              message: errors.start_date ? errors.start_date.message : "",
            }}
            maxLength={6}
            {...register("start_date", {
              required: {
                value: true,
                message: "해당 항목을 입력해주세요",
              },
              pattern: {
                value: /^\d{4}(0[1-9]|1[0-2])$/i,
                message: "올바른 입사 연월을 입력해 주세요",
              },
            })}
          />
        </div>
        <div css={cssObj.inputWrapper}>
          <p>
            퇴사 연월 <strong css={cssObj.required}> *</strong>
          </p>
          <Input
            placeholder={!isWorking ? "예)200101" : "재직중"}
            {...register("end_date")}
            state={{
              state: ((isWork: boolean, isError: boolean) => {
                if (isError) return "error";
                if (isWork) return "disabled";
                return "default";
              })(isWorking, !!errors.end_date),
              message: errors.end_date ? errors.end_date.message : "",
            }}
            maxLength={6}
            {...register("end_date", {
              min: getValues("start_date"),
              required: {
                value: !isWorking,
                message: "해당 항목을 입력해주세요",
              },
              pattern: {
                value: /^\d{4}(0[1-9]|1[0-2])$/i,
                message: "올바른 퇴사 연월을 입력해 주세요",
              },
            })}
          />
          <div css={cssObj.switchBox}>
            <p>재직중</p>
            <Switch
              checked={isWorking}
              onChange={() => {
                setIsWorking(!isWorking);
              }}
            />
          </div>
        </div>
      </div>

      <div css={cssObj.inputFlexbox}>
        <div css={cssObj.inputWrapper}>
          <p>
            고용 형태 <strong css={cssObj.required}> *</strong>
          </p>
          <Controller
            name="contract_type"
            control={control}
            rules={{ required: "해당 항목을 선택해주세요" }}
            render={({ field, fieldState }) => (
              <ResumeDropDown
                menuArr={contractTypeArr}
                setValue={field.onChange}
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
        <div css={cssObj.inputWrapper}>
          <p>연봉(만원)</p>
          <Input
            placeholder="세전 연봉을 입력해 주세요"
            max={999999}
            state={{
              state: errors.pay ? "error" : "default",
              message: errors.pay ? errors.pay.message : "",
            }}
            {...register("pay", {
              min: {
                value: 0,
                message: `0-1000000 사이의 값을 입력해 주세요`,
              },
              max: {
                value: 999999,
                message: `0-1000000 사이의 값을 입력해 주세요`,
              },
            })}
          />
        </div>
      </div>
      <div css={cssObj.inputFlexbox}>
        <div css={cssObj.inputWrapper}>
          <p>부서</p>
          <Input
            placeholder="부서명을 입력해 주세요"
            state={{
              state: errors.department ? "error" : "default",
              message: errors.department ? errors.department.message : "",
            }}
            maxLength={20}
            {...register("department", {
              maxLength: 20,
            })}
          />
        </div>
        <div css={cssObj.inputWrapper}>
          <p>직급</p>
          <Input
            placeholder="직급을 입력해 주세요"
            state={{
              state: errors.position ? "error" : "default",
              message: errors.position ? errors.position.message : "",
            }}
            maxLength={20}
            {...register("position", {
              maxLength: 20,
            })}
          />
        </div>
      </div>
      <div css={cssObj.inputWrapper}>
        <p css={cssObj.textareaLabel}>담당 업무</p>
        <Textarea
          placeholder="담당했던 업무를 자세히 입력해 주세요"
          maxLength={200}
          css={cssObj.etcInput}
          {...register("job_description")}
        />
      </div>
      <div css={cssObj.inputWrapper}>
        <p css={cssObj.textareaLabel}>퇴사 사유</p>
        <Textarea
          placeholder="퇴사 사유를 입력해 주세요."
          maxLength={200}
          css={cssObj.etcInput}
          {...register("retire_description")}
        />
      </div>

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
