import { FunctionComponent } from "react";

import { CheckBoxWithDesc } from "shared-ui/common/atom/checkbox_desc";
import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";

import { ErrorMessage } from "../../component";
import { requiredExpArr } from "./constant";
import { cssObj } from "./style";
import { PositionRequiredDataPartProps } from "./type";

export const PositionRequiredDataPart: FunctionComponent<PositionRequiredDataPartProps> = ({ jobForm }) => {
  const {
    watch,
    formState: { errors },
  } = jobForm;

  const isDisabled = watch("required_exp") !== "경력" && watch("required_exp") !== "신입/경력";

  return (
    <div css={cssObj.wrapper}>
      <strong css={cssObj.title}>직무 내용</strong>
      <div css={cssObj.container}>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.requiredTitle}>학력 조건</strong>
            <div css={cssObj.flexBox}>
              <CheckBoxWithDesc
                registerObj={{ ...jobForm.register("high") }}
                id="high"
                desc="고졸"
                checked={jobForm.watch("high") || false}
              />
              <CheckBoxWithDesc
                registerObj={{ ...jobForm.register("college") }}
                id="college"
                desc="초대졸"
                checked={jobForm.watch("college") || false}
              />
              <CheckBoxWithDesc
                registerObj={{ ...jobForm.register("four") }}
                id="four"
                desc="4년제"
                checked={jobForm.watch("four") || false}
              />
            </div>
          </li>
          <li>
            <strong css={cssObj.noRequiredTitle}>기타 조건</strong>
            <div css={cssObj.textareaBox}>
              <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
              <textarea css={cssObj.textarea} {...jobForm.register("required_etc_arr")} />
            </div>
          </li>
        </ul>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.requiredTitle}>경력 조건</strong>
            {errors?.required_exp?.message && <ErrorMessage msg={errors.required_exp.message} />}
            <div css={cssObj.flexBox}>
              {requiredExpArr.map((expName) => (
                <SharedRadioButton
                  key={`${expName}`}
                  registerObj={jobForm.register("required_exp", {
                    required: "경력 조건을 선택해주세요.",
                  })}
                  value={expName}
                  id={expName}
                >
                  <p css={cssObj.radioDesc}>{expName}</p>
                </SharedRadioButton>
              ))}
            </div>
          </li>
          <li>
            <strong css={cssObj.noRequiredTitle}>경력 기간</strong>
            <div css={cssObj.flexBox}>
              <label htmlFor="min_year" css={cssObj.minMaxLabel}>
                <input
                  id="min_year"
                  type="number"
                  css={isDisabled ? cssObj.disabledMinMaxInput : cssObj.minMaxInput}
                  {...jobForm.register("min_year", { valueAsNumber: true })}
                  disabled={isDisabled}
                />
                <p css={cssObj.minMaxDesc}>년 이상</p>
              </label>

              <label htmlFor="max_year" css={cssObj.minMaxLabel}>
                <input
                  id="max_year"
                  type="number"
                  css={isDisabled ? cssObj.disabledMinMaxInput : cssObj.minMaxInput}
                  {...jobForm.register("max_year", { valueAsNumber: true })}
                  disabled={isDisabled}
                />
                <p css={cssObj.minMaxDesc}>년 이하</p>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
