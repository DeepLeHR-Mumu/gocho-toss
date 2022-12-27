import { FunctionComponent } from "react";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { CheckLabel } from "../../component/checkLabel";
import { PositionRequiredInfoPartProps } from "./type";
import { contractTypeArr, requiredExpArr } from "./constant";
import { cssObj } from "./style";

export const PositionRequiredInfoPart: FunctionComponent<PositionRequiredInfoPartProps> = ({ id, index, jobForm }) => {
  const isConversionDisabled =
    jobForm.watch("position_arr")[index].contract_type !== "인턴" &&
    jobForm.watch("position_arr")[index].contract_type !== "계약>정규";

  return (
    <>
      <div css={cssObj.contractTypeWrapper}>
        <div css={cssObj.inputContainer}>
          <p>계약 형태</p>
          <div css={cssObj.labelContainer}>
            {contractTypeArr.map((contractName) => (
              <CheckLabel
                key={`${contractName}${id}`}
                register={jobForm.register}
                index={index}
                field="contract_type"
                value={contractName}
                watch={jobForm.watch("position_arr")[index].contract_type}
              />
            ))}
          </div>
        </div>
        <div css={cssObj.inputContainer}>
          <p>전환율</p>
          <input
            type="number"
            css={cssObj.inputLine}
            {...jobForm.register(`position_arr.${index}.conversion_rate`)}
            disabled={isConversionDisabled}
          />
        </div>
      </div>
      <div css={cssObj.inputContainer}>
        <p>학력 조건 *</p>
        <div css={cssObj.labelContainer}>
          <label css={cssObj.label} htmlFor={`middle${index}`}>
            <input type="checkbox" id={`middle${index}`} {...jobForm.register(`position_arr.${index}.middle`)} />
            <CheckBox isChecked={jobForm.watch("position_arr")[index].middle} />
            중졸
          </label>
          <label css={cssObj.label} htmlFor={`high${index}`}>
            <input type="checkbox" id={`high${index}`} {...jobForm.register(`position_arr.${index}.high`)} />
            <CheckBox isChecked={jobForm.watch("position_arr")[index].high} />
            고졸
          </label>
          <label css={cssObj.label} htmlFor={`college${index}`}>
            <input type="checkbox" id={`college${index}`} {...jobForm.register(`position_arr.${index}.college`)} />
            <CheckBox isChecked={jobForm.watch("position_arr")[index].college} />
            초대졸
          </label>
          <label css={cssObj.label} htmlFor={`four${index}`}>
            <input type="checkbox" id={`four${index}`} {...jobForm.register(`position_arr.${index}.four`)} />
            <CheckBox isChecked={jobForm.watch("position_arr")[index].four} />
            4년제
          </label>
        </div>
      </div>
      <div css={cssObj.contractTypeWrapper}>
        <div css={cssObj.inputContainer}>
          <p>경력 조건</p>
          <div css={cssObj.labelContainer}>
            {requiredExpArr.map((expName) => (
              <CheckLabel
                key={`${expName}${id}`}
                register={jobForm.register}
                index={index}
                field="contract_type"
                value={expName}
                watch={jobForm.watch("position_arr")[index].required_exp}
              />
            ))}
          </div>
        </div>
        <div css={cssObj.inputContainer}>
          <p>최소경력(연)</p>
          <input
            type="number"
            css={cssObj.inputLine}
            {...jobForm.register(`position_arr.${index}.min_year`, { valueAsNumber: true })}
          />
        </div>
        <div css={cssObj.inputContainer}>
          <p>최대경력(연)</p>
          <input
            type="number"
            css={cssObj.inputLine}
            {...jobForm.register(`position_arr.${index}.max_year`, { valueAsNumber: true })}
          />
        </div>
      </div>
      <div css={cssObj.inputContainer}>
        <p>기타 지원 조건</p>
        <input
          css={cssObj.inputLine}
          placeholder="기타 지원자격 조건"
          {...jobForm.register(`position_arr.${index}.required_etc_arr`, { required: true })}
        />
      </div>
    </>
  );
};
