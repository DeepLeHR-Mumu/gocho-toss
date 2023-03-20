import { FunctionComponent } from "react";

import { CheckBoxWithDesc } from "shared-ui/common/atom/checkbox_desc";
import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";

import { requiredExpArr } from "./constant";
import { cssObj } from "./style";
import { PositionRequiredDataPartProps } from "./type";

export const PositionRequiredDataPart: FunctionComponent<PositionRequiredDataPartProps> = ({ id, index, jobForm }) => {
  const { watch } = jobForm;

  // TODO: 초기 렌더링시 undefined fix
  const isDisabled =
    watch("position_arr")[index].required_exp !== "경력" && watch("position_arr")[index].required_exp !== "신입/경력";

  return (
    <div css={cssObj.wrapper}>
      <strong css={cssObj.title}>직무 내용</strong>
      <div css={cssObj.container}>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.requiredTitle}>학력 조건</strong>
            <div css={cssObj.flexBox}>
              <CheckBoxWithDesc
                registerObj={{ ...jobForm.register(`position_arr.${index}.middle`) }}
                id={`middle${index}`}
                desc="중졸"
                checked={jobForm.watch("position_arr")[index].middle}
              />
              <CheckBoxWithDesc
                registerObj={{ ...jobForm.register(`position_arr.${index}.high`) }}
                id={`high${index}`}
                desc="고졸"
                checked={jobForm.watch("position_arr")[index].high}
              />
              <CheckBoxWithDesc
                registerObj={{ ...jobForm.register(`position_arr.${index}.college`) }}
                id={`college${index}`}
                desc="초대졸"
                checked={jobForm.watch("position_arr")[index].college}
              />
              <CheckBoxWithDesc
                registerObj={{ ...jobForm.register(`position_arr.${index}.four`) }}
                id={`four${index}`}
                desc="4년제"
                checked={jobForm.watch("position_arr")[index].four}
              />
            </div>
          </li>
          <li>
            <strong css={cssObj.noRequiredTitle}>기타 조건</strong>
            <div css={cssObj.textareaBox}>
              <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
              <textarea css={cssObj.textarea} {...jobForm.register(`position_arr.${index}.required_etc_arr`)} />
            </div>
          </li>
        </ul>
        <ul css={cssObj.formBox}>
          <li>
            <strong css={cssObj.requiredTitle}>경력 조건</strong>
            <div css={cssObj.flexBox}>
              {requiredExpArr.map((expName) => (
                <SharedRadioButton
                  key={`${expName}${id}`}
                  registerObj={jobForm.register(`position_arr.${index}.required_exp`)}
                  value={expName}
                  id={`${expName}${index}`}
                >
                  <p css={cssObj.radioDesc}>{expName}</p>
                </SharedRadioButton>
              ))}
            </div>
          </li>
          <li>
            <strong css={cssObj.noRequiredTitle}>경력 기간</strong>
            <div css={cssObj.flexBox}>
              <label htmlFor={`position_arr.${index}.min_year`} css={cssObj.minMaxLabel}>
                <input
                  id={`position_arr.${index}.min_year`}
                  type="number"
                  css={isDisabled ? cssObj.disabledMinMaxInput : cssObj.minMaxInput}
                  {...jobForm.register(`position_arr.${index}.min_year`, { valueAsNumber: true })}
                  disabled={isDisabled}
                />
                <p css={cssObj.minMaxDesc}>년 이상</p>
              </label>

              <label htmlFor={`position_arr.${index}.max_year`} css={cssObj.minMaxLabel}>
                <input
                  id={`position_arr.${index}.max_year`}
                  type="number"
                  css={isDisabled ? cssObj.disabledMinMaxInput : cssObj.minMaxInput}
                  {...jobForm.register(`position_arr.${index}.max_year`, { valueAsNumber: true })}
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
