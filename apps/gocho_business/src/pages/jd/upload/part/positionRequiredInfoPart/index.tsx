import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useFieldArray } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";
import { FiMinus, FiPlus } from "react-icons/fi";
import { COLORS } from "shared-style/color";
import { SharedButton } from "shared-ui/business/sharedButton";

import { GuideChip } from "../../component/guideChip";
import { PositionRequiredInfoPartProps } from "./type";
import { contractTypeArr, requiredExpArr, requiredEtcGuideArr } from "./constant";
import { cssObj } from "./style";

export const PositionRequiredInfoPart: FunctionComponent<PositionRequiredInfoPartProps> = ({
  id,
  positionIndex,
  jobForm,
  control,
}) => {
  const [requiredEtcIsFocusedArr, setRequiredEtcIsFocusedArr] = useState<boolean[]>([false]);
  const [isMinYear, setIsMinYear] = useState<boolean>(false);
  const [isMaxYear, setIsMaxYear] = useState<boolean>(false);
  const [randomRequiredEtcGuideArr, setRandomRequiredEtcGuideArr] = useState<string[]>([]);

  const requiredEtcArr = useFieldArray({
    control,
    name: `position_arr.${positionIndex}.required_etc_arr`,
  });

  const conversionRateHandler = (event: ChangeEvent<HTMLInputElement>, isError: boolean) => {
    if (isError && Number(event.target.value) === 0) {
      jobForm.setError(`position_arr.${positionIndex}.conversion_rate`, {
        type: "required",
        message: "전환율은 필수 입력 값입니다",
      });
    }
  };

  const requiredEtcErrorMsgMaker = () => {
    const errorArray = jobForm.formState.errors.position_arr?.[positionIndex]?.required_etc_arr;
    if (errorArray) {
      const values = Object.keys(errorArray).map((key) => errorArray?.[Number(key)]);
      if (values.some((element) => element?.value?.type === "maxLength")) {
        return "각 칸의 최대 입력 길이는 70자입니다";
      }
      return "추가한 모든 칸이 채워져야 합니다";
    }
    return null;
  };

  useEffect(() => {
    setRandomRequiredEtcGuideArr(requiredEtcGuideArr.sort(() => Math.random() - 0.5).slice(0, 3));
  }, []);

  const isConversionDisabled =
    jobForm.watch("position_arr")[positionIndex].contract_type !== "인턴" &&
    jobForm.watch("position_arr")[positionIndex].contract_type !== "계약>정규";

  const isYearDisabled =
    jobForm.watch("position_arr")[positionIndex].required_exp !== "경력" &&
    jobForm.watch("position_arr")[positionIndex].required_exp !== "신입/경력";

  const isMinYearDisabled = isYearDisabled || isMinYear;
  const isMaxYearDisabled = isYearDisabled || isMaxYear;

  useEffect(() => {
    if (isMinYearDisabled) {
      jobForm.setValue(`position_arr.${positionIndex}.min_year`, null);
      jobForm.clearErrors(`position_arr.${positionIndex}.min_year`);
    }

    if (isMaxYearDisabled) {
      jobForm.setValue(`position_arr.${positionIndex}.max_year`, null);
      jobForm.clearErrors(`position_arr.${positionIndex}.max_year`);
    }
  }, [jobForm, positionIndex, isMinYearDisabled, isMaxYearDisabled]);

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
                  onChange: () => {
                    if (!isConversionDisabled) {
                      jobForm.clearErrors(`position_arr.${positionIndex}.conversion_rate`);
                      jobForm.setValue(`position_arr.${positionIndex}.conversion_rate`, null);
                    }
                  },
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
                {...jobForm.register(`position_arr.${positionIndex}.conversion_rate`, {
                  required: !isConversionDisabled,
                  disabled: isConversionDisabled,
                  onChange: (e) => conversionRateHandler(e, !isConversionDisabled),
                })}
              />
              <p css={cssObj.conversionRateLabel(jobForm.watch("position_arr")[positionIndex].conversion_rate || 0)}>
                {jobForm.watch("position_arr")[positionIndex].conversion_rate || 0}%
              </p>
            </div>
            <div css={cssObj.conversionRateInputContainer}>
              <input
                css={cssObj.activatableInput(isConversionDisabled)}
                type="number"
                min="0"
                max="100"
                {...jobForm.register(`position_arr.${positionIndex}.conversion_rate`, {
                  required: !isConversionDisabled,
                  disabled: isConversionDisabled,
                  onChange: (e) => conversionRateHandler(e, !isConversionDisabled),
                })}
              />
              %
            </div>
          </div>
          <p css={cssObj.errorMessage}>
            {!!jobForm.formState.errors.position_arr?.[positionIndex]?.conversion_rate && "전환율은 필수 입력 값입니다"}
          </p>
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
            <span css={cssObj.icon}>
              <AiOutlineExclamationCircle />
            </span>
            중복 체크 가능
          </p>
        </div>
        <p css={cssObj.errorMessage} />
      </div>
      <div css={cssObj.contractTypeWrapper}>
        <div css={cssObj.container}>
          <p>경력 조건</p>
          <div css={cssObj.labelContainer}>
            {requiredExpArr.map((expName) => (
              <label key={`${expName}${id}`} htmlFor={`${expName}${id}`} css={cssObj.label}>
                <input
                  type="radio"
                  id={`${expName}${id}`}
                  css={cssObj.radio}
                  {...jobForm.register(`position_arr.${positionIndex}.required_exp`, {
                    required: true,
                  })}
                  value={expName}
                />
                <div css={cssObj.radioBox} />
                <p css={cssObj.radioLabel}>{expName}</p>
              </label>
            ))}
          </div>
        </div>
        <div css={cssObj.container}>
          <p css={cssObj.inputTitle(!!jobForm.formState.errors.position_arr?.[positionIndex]?.min_year)}>
            최소경력(연)
          </p>
          <div css={cssObj.yearInputContainer}>
            <input
              type="number"
              min="1"
              css={cssObj.activatableInput(isMinYearDisabled)}
              {...jobForm.register(`position_arr.${positionIndex}.min_year`, {
                required: !isMinYearDisabled,
                disabled: isMinYearDisabled,
                valueAsNumber: true,
              })}
            />
            <label htmlFor="isMinYear" css={cssObj.toggleSwitch(isMinYear, isYearDisabled)}>
              <input
                type="checkbox"
                id="isMinYear"
                hidden
                disabled={isYearDisabled}
                onClick={() => {
                  if (!isMinYear) {
                    jobForm.clearErrors(`position_arr.${positionIndex}.min_year`);
                  }
                  setIsMinYear((prev) => !prev);
                }}
              />
              <span css={cssObj.toggleButton(isMinYear)} />
            </label>
            <p>무관</p>
          </div>
          <p css={cssObj.errorMessage}>
            {!!jobForm.formState.errors.position_arr?.[positionIndex]?.min_year && "최소 경력은 필수 입력 사항입니다"}
          </p>
        </div>
        <div css={cssObj.container}>
          <p css={cssObj.inputTitle(!!jobForm.formState.errors.position_arr?.[positionIndex]?.max_year)}>
            최대경력(연)
          </p>
          <div css={cssObj.yearInputContainer}>
            <input
              type="number"
              css={cssObj.activatableInput(isMaxYearDisabled)}
              {...jobForm.register(`position_arr.${positionIndex}.max_year`, {
                required: !isMaxYearDisabled,
                disabled: isMaxYearDisabled,
                valueAsNumber: true,
              })}
            />
            <label htmlFor="isMaxYear" css={cssObj.toggleSwitch(isMaxYear, isYearDisabled)}>
              <input
                type="checkbox"
                id="isMaxYear"
                hidden
                disabled={isYearDisabled}
                onClick={() => {
                  if (!isMaxYear) {
                    jobForm.clearErrors(`position_arr.${positionIndex}.max_year`);
                  }
                  setIsMaxYear((prev) => !prev);
                }}
              />
              <span css={cssObj.toggleButton(isMaxYear)} />
            </label>
            <p>무관</p>
          </div>
          <p css={cssObj.errorMessage}>
            {!!jobForm.formState.errors.position_arr?.[positionIndex]?.max_year && "최대 경력은 필수 입력 사항입니다"}
          </p>
        </div>
      </div>
      <div css={cssObj.containerWithGuide}>
        <p css={cssObj.inputTitle(!!jobForm.formState.errors.position_arr?.[positionIndex]?.required_etc_arr)}>
          기타 지원 조건
        </p>
        <div css={cssObj.inputContainerWithGuide}>
          {requiredEtcArr.fields.map((item, index) => (
            <div key={`requiredEtcArr${item.id}`}>
              <label css={cssObj.inputLabel} htmlFor={`requiredEtcArr${item.id}`}>
                <input
                  id={`requiredEtcArr${item.id}`}
                  css={cssObj.erasableInput(47)}
                  placeholder="군필 여부, 나이, 성별 등의 기타 조건을 적어주세요"
                  onFocus={() => {
                    setRequiredEtcIsFocusedArr((prev) =>
                      prev.map((stateItem, stateIndex) => {
                        if (stateIndex === index) {
                          return true;
                        }
                        return stateItem;
                      })
                    );
                  }}
                  {...jobForm.register(`position_arr.${positionIndex}.required_etc_arr.${index}.value`, {
                    required: true,
                    maxLength: 70,
                    onBlur: () => {
                      jobForm.trigger(`position_arr.${positionIndex}.required_etc_arr`);
                      setRequiredEtcIsFocusedArr((prev) =>
                        prev.map((stateItem, stateIndex) => {
                          if (stateIndex === index) {
                            return false;
                          }
                          return stateItem;
                        })
                      );
                    },
                  })}
                />
                <button
                  type="button"
                  css={cssObj.deleteInputButton}
                  onClick={() => {
                    requiredEtcArr.remove(positionIndex);
                    setRequiredEtcIsFocusedArr((prev) => prev.filter((stateItem, stateIndex) => stateIndex !== index));
                  }}
                >
                  <FiMinus />
                </button>
              </label>
              <div css={cssObj.guideChipContainer}>
                {requiredEtcIsFocusedArr[index] &&
                  randomRequiredEtcGuideArr.map((requiredEtcGuide) => (
                    <GuideChip
                      key={`${requiredEtcGuide}${item.id}`}
                      text={requiredEtcGuide}
                      onClickHandler={() => {
                        jobForm.setValue(
                          `position_arr.${positionIndex}.required_etc_arr.${index}.value`,
                          requiredEtcGuide
                        );
                        const filteredArr = requiredEtcGuideArr.filter(
                          (element) =>
                            !randomRequiredEtcGuideArr.includes(element) &&
                            !jobForm
                              .watch("position_arr")
                              [positionIndex].required_etc_arr.some(
                                (elem) => JSON.stringify({ value: element }) === JSON.stringify(elem)
                              )
                        )[0];
                        if (filteredArr) {
                          setRandomRequiredEtcGuideArr((prev) => [
                            ...prev.filter((element) => element !== requiredEtcGuide),
                            filteredArr,
                          ]);
                        } else {
                          setRandomRequiredEtcGuideArr((prev) => [
                            ...prev.filter((element) => element !== requiredEtcGuide),
                          ]);
                        }
                      }}
                    />
                  ))}
              </div>
            </div>
          ))}
          <SharedButton
            radius="round"
            fontColor={`${COLORS.GRAY10}`}
            backgroundColor={`${COLORS.GRAY100}`}
            borderColor={`${COLORS.GRAY70}`}
            size="medium"
            iconObj={{ icon: FiPlus, location: "left" }}
            text="입력칸 추가"
            onClickHandler={() => {
              requiredEtcArr.append({ value: "" });
              setRequiredEtcIsFocusedArr((prev) => [...prev, false]);
            }}
          />
        </div>
        <p css={cssObj.errorMessage}>
          {!!jobForm.formState.errors.position_arr?.[positionIndex]?.required_etc_arr && requiredEtcErrorMsgMaker()}
        </p>
      </div>
    </>
  );
};
