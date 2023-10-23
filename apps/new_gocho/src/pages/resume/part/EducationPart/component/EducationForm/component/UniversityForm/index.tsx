import { FC, useState } from "react";

import { Checkbox, Input } from "shared-ui/deeple-ds";

import { ResumeDropDown } from "@/pages/resume/component";

import { cssObj } from "./style";
import { gradeArr, graduateTypeArr } from "../../constants";
import { UniversityFormProps } from "./type";

export const UniversityForm: FC<UniversityFormProps> = ({ register, setValue, getValues }) => {
  const [graduateType, setGraduateType] = useState<string>(getValues("graduate_type") || "");
  const [maxGrade, setMaxGrade] = useState<number | null>(getValues("max_grade"));
  const [isUturn, setIsUturn] = useState(getValues("is_uturn"));

  return (
    <>
      <div css={cssObj.inputWrapper}>
        <p>
          학교명 <strong css={cssObj.required}> *</strong>
        </p>
        <Input placeholder="학교명을 입력해 주세요" css={cssObj.schoolInput} {...register("name")} />
      </div>
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
        <div css={cssObj.checkbox}>
          <Checkbox
            checked={isUturn}
            onChange={() => {
              setIsUturn(!isUturn);
            }}
          />
          <span>유턴</span>
        </div>
      </div>
      <div css={cssObj.inputFlexbox}>
        <div css={cssObj.inputWrapper}>
          <p>
            입학 연월 <strong css={cssObj.required}> *</strong>
          </p>
          <Input placeholder="예)200101" {...register("start_date")} />
        </div>
        {!["재학", "중퇴"].includes(graduateType) && (
          <div css={cssObj.inputWrapper}>
            <p>
              졸업 연월 <strong css={cssObj.required}> *</strong>
            </p>
            <Input placeholder="예)200101" {...register("end_date")} />
          </div>
        )}
      </div>
      <div css={cssObj.inputWrapper}>
        <p>
          전공/학과
          <strong css={cssObj.required}> *</strong>
        </p>
        <Input placeholder="전공 또는 학과 입력" {...register("major")} />
      </div>
      <div css={cssObj.inputFlexbox}>
        <div css={cssObj.inputWrapper}>
          <p>학점</p>
          <Input placeholder="학점" {...register("grade")} />
        </div>
        <div css={cssObj.inputWrapper}>
          <ResumeDropDown
            menuArr={gradeArr}
            setValue={setMaxGrade}
            value={maxGrade}
            placeholder="선택"
            onClickCallback={() => {
              setValue("max_grade", maxGrade);
            }}
          />
        </div>
      </div>
      <div css={cssObj.inputWrapper}>
        <p>기타 사항</p>
        <Input placeholder="기타 참고 정보를 입력해 주세요." css={cssObj.etcInput} {...register("etc")} />
      </div>
    </>
  );
};
