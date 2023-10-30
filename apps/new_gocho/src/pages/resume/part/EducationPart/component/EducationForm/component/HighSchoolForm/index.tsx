import { FC, useEffect, useState } from "react";
import { Controller } from "react-hook-form";

import { Checkbox, Input } from "shared-ui/deeple-ds";

import { ResumeDropDown } from "@/pages/resume/component";

import { AttendanceForm } from "../AttendanceForm";

import { cssObj } from "./style";
import { HighSchoolFormProps } from "./type";
import { graduateTypeArr } from "../../constants";
import { getLatestAttendanceError, isErrorAlternativeTest } from "./util";

export const HighSchoolForm: FC<HighSchoolFormProps> = ({ errors, control, register, setValue, getValues }) => {
  const [graduateType, setGraduateType] = useState<string>(getValues("graduate_type") || "");
  const [isAlternativeTest, setIsAlternativeTest] = useState(getValues("is_alternative_test"));

  useEffect(() => {
    if (graduateType === "재학" || graduateType === "중퇴") {
      setValue("end_date", null);
    }
  }, [setValue, graduateType]);

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
            state: isErrorAlternativeTest(errors, isAlternativeTest),
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
        <div css={cssObj.checkbox}>
          <Checkbox
            checked={isAlternativeTest}
            onChange={() => {
              if (!isAlternativeTest) {
                setValue("name", "검정고시");
                setValue("graduate_type", "졸업");
                setValue("end_date", null);
              }
              if (isAlternativeTest) setValue("name", "");

              setIsAlternativeTest(!isAlternativeTest);
            }}
          />
          <span>검정고시</span>
        </div>
      </div>
      {!isAlternativeTest && (
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
      )}
      {isAlternativeTest ? (
        <>
          <div css={cssObj.inputWrapper}>
            <p>
              합격 연월 <strong css={cssObj.required}> *</strong>
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
                maxLength: 6,
                pattern: {
                  value: /^\d{4}(0[1-9]|1[0-2])$/i,
                  message: "올바른 합격 연월을 입력해 주세요",
                },
              })}
            />
          </div>
          <div css={cssObj.inputWrapper}>
            <p>기타 사항</p>
            <Input
              placeholder="기타 참고 정보를 입력해 주세요."
              css={cssObj.etcInput}
              maxLength={50}
              {...register("etc")}
            />
          </div>
        </>
      ) : (
        <>
          <div css={cssObj.inputFlexBox}>
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
          <div css={cssObj.inputFlexBox}>
            <div css={cssObj.inputWrapper}>
              <p>전공/학과</p>
              <Input placeholder="전공 또는 학과 입력" maxLength={15} {...register("major")} />
            </div>
            <div css={cssObj.inputWrapper}>
              <p>내신 등급</p>
              <Input
                placeholder="평균 내신 등급 입력"
                min={1.0}
                max={9.0}
                step={0.01}
                state={{
                  state: errors.grade ? "error" : "default",
                  message: errors.grade ? errors.grade.message : "",
                }}
                {...register("grade", {
                  min: {
                    value: 1.0,
                    message: "1.00~9.00사이의 값을 입력해 주세요.",
                  },
                  max: {
                    value: 9.0,
                    message: "1.00~9.00사이의 값을 입력해 주세요.",
                  },
                })}
              />
            </div>
          </div>

          <div css={cssObj.inputWrapper}>
            <p>기타 사항</p>
            <Input
              placeholder="기타 참고 정보를 입력해 주세요."
              css={cssObj.etcInput}
              maxLength={50}
              {...register("etc")}
            />
          </div>

          <div css={cssObj.attendanceInput}>
            <p css={cssObj.attendanceLabel}>출결 사항</p>
            <AttendanceForm register={register} />
            <p css={cssObj.attendanceError}>{getLatestAttendanceError(errors)}</p>
          </div>
        </>
      )}
    </>
  );
};
