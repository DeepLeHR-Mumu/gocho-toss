import { FunctionComponent, useEffect, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useFieldArray } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";
import { FiMinus } from "react-icons/fi";
import { PositionRequiredInfoPartProps } from "./type";
import { contractTypeArr, requiredExpArr } from "./constant";
import { cssObj } from "./style";

export const PositionRequiredInfoPart: FunctionComponent<PositionRequiredInfoPartProps> = ({
  id,
  positionIndex,
  jobForm,
  control,
}) => {
  const [conversionRate, setConversionRate] = useState<number>(0);
  const [isMinYear, setIsMinYear] = useState<boolean>(false);
  const [isMaxYear, setIsMaxYear] = useState<boolean>(false);

  const requiredEtcArr = useFieldArray({
    control,
    name: `position_arr.${positionIndex}.required_etc_arr`,
  });

  const isConversionDisabled =
    jobForm.watch("position_arr")[positionIndex].contract_type !== "인턴" &&
    jobForm.watch("position_arr")[positionIndex].contract_type !== "계약>정규";

  const isYearDisabled =
    jobForm.watch("position_arr")[positionIndex].required_exp !== "경력" &&
    jobForm.watch("position_arr")[positionIndex].required_exp !== "신입/경력";

  useEffect(() => {
    if (isYearDisabled || isMinYear) {
      jobForm.setValue(`position_arr.${positionIndex}.min_year`, null);
    }
  }, [isYearDisabled, isMinYear, jobForm, positionIndex]);

  useEffect(() => {
    if (isYearDisabled || isMaxYear) {
      jobForm.setValue(`position_arr.${positionIndex}.max_year`, null);
    }
  }, [isYearDisabled, isMaxYear, jobForm, positionIndex]);

  return (
    <>
      <div css={cssObj.contractTypeWrapper}>
        <div css={cssObj.container}>
          <p>계약 형태</p>
          <div css={cssObj.labelContainer}>
            {contractTypeArr.map((contractName) => (
              <SharedRadioButton
                key={`${contractName}${id}`}
                value={contractName}
                id={`${contractName}${id}`}
                registerObj={jobForm.register(`position_arr.${positionIndex}.contract_type`, {
                  required: true,
                })}
              >
                <p css={cssObj.radioLabel}>{contractName}</p>
              </SharedRadioButton>
            ))}
          </div>
        </div>
        <div css={cssObj.container}>
          <p>전환율</p>
          <div css={cssObj.conversionRateContainer}>
            <div css={cssObj.conversionRateSliderBox}>
              <input
                css={cssObj.rangeSlider(isConversionDisabled)}
                type="range"
                min="0"
                max="100"
                step="5"
                value={conversionRate}
                onChange={(e) => {
                  setConversionRate(Number(e.target.value));
                  jobForm.setValue(`position_arr.${positionIndex}.conversion_rate`, conversionRate);
                }}
                disabled={isConversionDisabled}
              />
              <p css={cssObj.conversionRateLabel(conversionRate)}>{conversionRate}%</p>
            </div>
            <div css={cssObj.conversionRateInputContainer}>
              <input
                css={cssObj.activatableInput(isConversionDisabled)}
                type="number"
                min="0"
                max="100"
                value={conversionRate}
                disabled={isConversionDisabled}
                // TODO: 다 지웠을 때 0 남는 버그 해결
                onChange={(e) => {
                  setConversionRate(Number(e.target.value));
                  jobForm.setValue(`position_arr.${positionIndex}.conversion_rate`, conversionRate);
                }}
              />
              %
            </div>
          </div>
        </div>
      </div>
      <div css={cssObj.container}>
        <p>학력 조건</p>
        <div css={cssObj.labelContainer}>
          <label css={cssObj.label} htmlFor={`middle${positionIndex}`}>
            <input
              type="checkbox"
              id={`middle${positionIndex}`}
              {...jobForm.register(`position_arr.${positionIndex}.middle`)}
            />
            <CheckBox isChecked={jobForm.watch("position_arr")[positionIndex].middle} />
            중졸
          </label>
          <label css={cssObj.label} htmlFor={`high${positionIndex}`}>
            <input
              type="checkbox"
              id={`high${positionIndex}`}
              {...jobForm.register(`position_arr.${positionIndex}.high`)}
            />
            <CheckBox isChecked={jobForm.watch("position_arr")[positionIndex].high} />
            고졸
          </label>
          <label css={cssObj.label} htmlFor={`college${positionIndex}`}>
            <input
              type="checkbox"
              id={`college${positionIndex}`}
              {...jobForm.register(`position_arr.${positionIndex}.college`)}
            />
            <CheckBox isChecked={jobForm.watch("position_arr")[positionIndex].college} />
            초대졸
          </label>
          <label css={cssObj.label} htmlFor={`four${positionIndex}`}>
            <input
              type="checkbox"
              id={`four${positionIndex}`}
              {...jobForm.register(`position_arr.${positionIndex}.four`)}
            />
            <CheckBox isChecked={jobForm.watch("position_arr")[positionIndex].four} />
            4년제
          </label>
          <p css={cssObj.desc}>
            <AiOutlineExclamationCircle /> 중복 체크 가능
          </p>
        </div>
      </div>
      <div css={cssObj.contractTypeWrapper}>
        <div css={cssObj.container}>
          <p>경력 조건</p>
          <div css={cssObj.labelContainer}>
            {requiredExpArr.map((expName) => (
              <SharedRadioButton
                key={`${expName}${id}`}
                value={expName}
                id={`${expName}${id}`}
                registerObj={jobForm.register(`position_arr.${positionIndex}.required_exp`, {
                  required: true,
                })}
              >
                <p css={cssObj.radioLabel}>{expName}</p>
              </SharedRadioButton>
            ))}
          </div>
        </div>
        <div css={cssObj.container}>
          <p>최소경력(연)</p>
          <div css={cssObj.yearInputContainer}>
            <input
              type="number"
              min="1"
              css={cssObj.activatableInput(isYearDisabled || isMinYear)}
              disabled={isYearDisabled || isMinYear}
              {...jobForm.register(`position_arr.${positionIndex}.min_year`, { valueAsNumber: true })}
            />
            <label htmlFor="isMinYear" css={cssObj.toggleSwitch(isMinYear, isYearDisabled)}>
              <input
                type="checkbox"
                id="isMinYear"
                hidden
                disabled={isYearDisabled}
                onClick={() => {
                  setIsMinYear((prev) => !prev);
                }}
              />
              <span css={cssObj.toggleButton(isMinYear)} />
            </label>
            <p>무관</p>
          </div>
        </div>
        <div css={cssObj.container}>
          <p>최대경력(연)</p>
          <div css={cssObj.yearInputContainer}>
            <input
              type="number"
              css={cssObj.activatableInput(isYearDisabled || isMaxYear)}
              disabled={isYearDisabled || isMaxYear}
              {...jobForm.register(`position_arr.${positionIndex}.max_year`, { valueAsNumber: true })}
            />
            <label htmlFor="isMaxYear" css={cssObj.toggleSwitch(isMaxYear, isYearDisabled)}>
              <input
                type="checkbox"
                id="isMaxYear"
                hidden
                disabled={isYearDisabled}
                onClick={() => {
                  setIsMaxYear((prev) => !prev);
                }}
              />
              <span css={cssObj.toggleButton(isMaxYear)} />
            </label>
            <p>무관</p>
          </div>
        </div>
      </div>
      <div css={cssObj.container}>
        <p>기타 지원 조건</p>
        <div css={cssObj.inputContainer}>
          {requiredEtcArr.fields.map((item, index) => (
            <label css={cssObj.inputLabel(47)} key={`requiredEtcArr${item.id}`} htmlFor={`requiredEtcArr${item.id}`}>
              <input
                id={`requiredEtcArr${item.id}`}
                css={cssObj.inputWithButton}
                placeholder="군필 여부, 나이, 성별 등의 기타 조건을 적어주세요"
                {...jobForm.register(`position_arr.${positionIndex}.required_etc_arr.${index}.value`, {
                  required: true,
                  maxLength: 70,
                })}
              />
              <button
                type="button"
                css={cssObj.deleteInputButton}
                onClick={() => {
                  requiredEtcArr.remove(positionIndex);
                }}
              >
                <FiMinus />
              </button>
            </label>
          ))}
          <button
            type="button"
            onClick={() => {
              requiredEtcArr.append({ value: "" });
            }}
          >
            + 입력칸 추가
          </button>
        </div>
      </div>
    </>
  );
};
