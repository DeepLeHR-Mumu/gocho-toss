import { FC, useState } from "react";

import { Checkbox, Input } from "shared-ui/deeple-ds";

import { ResumeDropDown } from "@/pages/resume/component";

import { AttendanceForm } from "../AttendanceForm";

import { cssObj } from "./style";
import { HighSchoolFormProps } from "./type";
import { graduateTypeArr } from "./contants";

export const HighSchoolForm: FC<HighSchoolFormProps> = ({ register, setValue, getValues }) => {
  const [graduateType, setGraduateType] = useState<string>("");
  const [isAlternativeTest, setIsAlternativeTest] = useState(getValues("is_alternative_test"));

  return (
    <>
      {!isAlternativeTest && (
        <div css={cssObj.inputWrapper}>
          <p>
            졸업 구분 <strong css={cssObj.required}> *</strong>
          </p>
          <ResumeDropDown
            menuArr={graduateTypeArr}
            setValue={setGraduateType}
            value={graduateType}
            placeholder="선택"
            onClickCallback={() => {
              setValue("graduate_type", graduateType);
              if (graduateType === "재학") {
                setValue("end_date", null);
              }
            }}
          />
        </div>
      )}
      <div css={cssObj.inputWrapper}>
        <p>
          학교명 <strong css={cssObj.required}> *</strong>
        </p>
        <Input
          placeholder="학교명을 입력해 주세요"
          css={cssObj.schoolInput}
          state={{
            state: isAlternativeTest ? "disabled" : "default",
          }}
          {...register("name")}
        />
        <div css={cssObj.checkbox}>
          <Checkbox
            checked={isAlternativeTest}
            onChange={() => {
              if (!isAlternativeTest) {
                setValue("name", "검정고시");
                setValue("graduate_type", "졸업");
              }
              if (isAlternativeTest) setValue("name", "");

              setIsAlternativeTest(!isAlternativeTest);
            }}
          />
          <span>검정고시</span>
        </div>
      </div>
      {isAlternativeTest ? (
        <>
          <div css={cssObj.inputWrapper}>
            <p>
              합격 연월 <strong css={cssObj.required}> *</strong>
            </p>
            <Input placeholder="예)200101" {...register("start_date")} />
          </div>
          <div css={cssObj.inputWrapper}>
            <p>기타 사항</p>
            <Input placeholder="기타 참고 정보를 입력해 주세요." css={cssObj.etcInput} {...register("etc")} />
          </div>
        </>
      ) : (
        <>
          <div css={cssObj.inputFlexbox}>
            <div css={cssObj.inputWrapper}>
              <p>
                입학 연월 <strong css={cssObj.required}> *</strong>
              </p>
              <Input placeholder="예)200101" {...register("start_date")} />
            </div>
            {graduateType !== "재학" && (
              <div css={cssObj.inputWrapper}>
                <p>
                  졸업 연월 <strong css={cssObj.required}> *</strong>
                </p>
                <Input placeholder="예)200101" {...register("end_date")} />
              </div>
            )}
          </div>
          <div css={cssObj.inputFlexbox}>
            <div css={cssObj.inputWrapper}>
              <p>전공/학과</p>
              <Input placeholder="패션디자인과" {...register("major")} />
            </div>
            <div css={cssObj.inputWrapper}>
              <p>내신 등급</p>
              <Input placeholder="평균 내신 등급 입력" {...register("grade")} />
            </div>
          </div>

          <div css={cssObj.inputWrapper}>
            <p>기타 사항</p>
            <Input placeholder="기타 참고 정보를 입력해 주세요." css={cssObj.etcInput} {...register("etc")} />
          </div>

          <div css={cssObj.inputWrapper}>
            <p css={cssObj.attendanceLabel}>출결 사항</p>
            <AttendanceForm register={register} />
          </div>
        </>
      )}
    </>
  );
};
