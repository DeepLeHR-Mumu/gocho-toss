import { FunctionComponent } from "react";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { CheckLabel } from "../../component/checkLabel";
import {
  enterNotice,
  inputContainer,
  inputLabel,
  inputTitle,
  positionTitle,
  smallInputBox,
  smallInputContainer,
  textareaBox,
} from "./style";
import { requiredExpArr } from "./constant";
import { PositionBoxProps } from "./type";

export const PositionRequiredDataPart: FunctionComponent<PositionBoxProps> = ({ id, index, register, watch }) => {
  const yearDisable =
    watch("position_arr")[index].required_exp !== "경력" && watch("position_arr")[index].required_exp !== "신입/경력";

  return (
    <>
      <h3 css={positionTitle}>직무 내용</h3>
      <div css={inputContainer}>
        <strong css={inputTitle}>학력 조건 *</strong>
        <label css={inputLabel} htmlFor={`middle${index}`}>
          <input type="checkbox" id={`middle${index}`} {...register(`position_arr.${index}.middle`)} />
          <CheckBox isChecked={watch("position_arr")[index].middle} />
          중졸
        </label>
        <label css={inputLabel} htmlFor={`high${index}`}>
          <input type="checkbox" id={`high${index}`} {...register(`position_arr.${index}.high`)} />
          <CheckBox isChecked={watch("position_arr")[index].high} />
          고졸
        </label>
        <label css={inputLabel} htmlFor={`college${index}`}>
          <input type="checkbox" id={`college${index}`} {...register(`position_arr.${index}.college`)} />
          <CheckBox isChecked={watch("position_arr")[index].college} />
          초대졸
        </label>
        <label css={inputLabel} htmlFor={`four${index}`}>
          <input type="checkbox" id={`four${index}`} {...register(`position_arr.${index}.four`)} />
          <CheckBox isChecked={watch("position_arr")[index].four} />
          4년제
        </label>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>경력 조건 *</strong>
        {requiredExpArr.map((expName) => {
          return (
            <CheckLabel
              key={`${expName}${id}`}
              register={register}
              index={index}
              field="required_exp"
              value={expName}
              watch={watch("position_arr")[index].required_exp}
            />
          );
        })}
        <div css={smallInputContainer}>
          <strong css={inputTitle}>경력 기간</strong>
          <input
            type="number"
            css={smallInputBox(yearDisable)}
            {...register(`position_arr.${index}.min_year`, { valueAsNumber: true })}
            disabled={yearDisable}
          />
          년 이상
          <input
            type="number"
            css={smallInputBox(yearDisable)}
            {...register(`position_arr.${index}.max_year`, { valueAsNumber: true })}
            disabled={yearDisable}
          />
          년 이하
        </div>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>기타 조건</strong>
        <textarea css={textareaBox} {...register(`position_arr.${index}.required_etc_arr`)} />
        <p css={enterNotice}>엔터로 구분해주세요.</p>
      </div>
    </>
  );
};
