import { FC, useEffect, useState } from "react";
import { Controller } from "react-hook-form";

import { Input } from "shared-ui/deeple-ds";

import { ResumeDropDown } from "@/pages/resume/component";

import { cssObj } from "./style";
import { CollegeFormProps } from "./type";
import { graduateTypeArr, gradeArr } from "../../constants";

export const CollegeForm: FC<CollegeFormProps> = ({ errors, register, setValue, getValues, control }) => {
  const [graduateType, setGraduateType] = useState<string>(getValues("graduate_type") || "");

  const [maxGrade, setMaxGrade] = useState<number | null>(getValues("max_grade"));

  useEffect(() => {
    if (graduateType !== null) {
      setValue("graduate_type", graduateType, {
        shouldValidate: true,
        shouldDirty: true,
      });

      if (graduateType === "재학") {
        setValue("end_date", null);
      }
    }

    setValue("max_grade", maxGrade, {
      shouldValidate: true,
      shouldDirty: true,
    });

    setValue("grade", maxGrade);
  }, [maxGrade, graduateType, setValue]);

  return (
    <>
      <div css={cssObj.inputWrapper}>
        <p>
          학교명 <strong css={cssObj.required}> *</strong>
        </p>
        <Input
          placeholder="학교명을 입력해 주세요"
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
      <div css={cssObj.inputWrapper}>
        <p>
          졸업 구분 <strong css={cssObj.required}> *</strong>
        </p>
        <Controller
          name="graduate_type"
          control={control}
          rules={{ required: "해당 항목을 선택해주세요" }}
          render={({ field, fieldState }) => (
            <ResumeDropDown
              menuArr={graduateTypeArr}
              setValue={(value) => {
                field.onChange(value);
                setGraduateType(value);
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
      <div css={cssObj.inputFlexbox}>
        <div css={cssObj.inputWrapper}>
          <p>
            입학 연월 <strong css={cssObj.required}> *</strong>
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
                message: "올바른 입학 연월을 입력해 주세요",
              },
            })}
          />
        </div>
        {!["재학", "중퇴"].includes(graduateType) && (
          <div css={cssObj.inputWrapper}>
            <p>
              졸업 연월 <strong css={cssObj.required}> *</strong>
            </p>
            <Input
              placeholder="예)200101"
              {...register("end_date")}
              state={{
                state: errors.end_date ? "error" : "default",
                message: errors.end_date ? errors.end_date.message : "",
              }}
              maxLength={6}
              {...register("end_date", {
                min: getValues("start_date"),
                required: {
                  value: true,
                  message: "해당 항목을 입력해주세요",
                },
                pattern: {
                  value: /^\d{4}(0[1-9]|1[0-2])$/i,
                  message: "올바른 입학 연월을 입력해 주세요",
                },
              })}
            />
          </div>
        )}
      </div>
      <div css={cssObj.inputWrapper}>
        <p>
          전공/학과
          <strong css={cssObj.required}> *</strong>
        </p>
        <Input
          placeholder="전공 또는 학과 입력"
          state={{
            state: errors.major ? "error" : "default",
            message: errors.major ? errors.major.message : "",
          }}
          maxLength={15}
          {...register("major", {
            required: {
              value: true,
              message: "해당 항목을 입력해주세요",
            },
            maxLength: 15,
          })}
        />
      </div>
      <div css={cssObj.inputFlexbox}>
        <div css={cssObj.inputWrapper}>
          <p>학점</p>
          <Input
            placeholder="학점"
            max={maxGrade || 0}
            state={{
              state: errors.grade ? "error" : "default",
              message: errors.grade ? errors.grade.message : "",
            }}
            {...register("grade", {
              min: {
                value: 0.0,
                message: !maxGrade ? "기준 학점을 선택해 주세요" : `0.0-${maxGrade} 사이의 값을 입력해 주세요`,
              },
              max: {
                value: maxGrade || 0,
                message: !maxGrade ? "기준 학점을 선택해 주세요" : `0.0-${maxGrade} 사이의 값을 입력해 주세요`,
              },
            })}
          />
        </div>
        <div css={cssObj.inputWrapper}>
          <ResumeDropDown menuArr={gradeArr} setValue={setMaxGrade} value={maxGrade} placeholder="기준 학점" />
        </div>
      </div>
      <div css={cssObj.inputWrapper}>
        <p>기타 사항</p>
        <Input
          placeholder="기타 참고 정보를 입력해 주세요."
          maxLength={50}
          css={cssObj.etcInput}
          {...register("etc")}
        />
      </div>
    </>
  );
};
