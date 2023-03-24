import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useFieldArray } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";

import { DeleteInputButton, GuideChip, AddFieldButton } from "../../component";
import { focusedArrOnBlurHandler, focusedArrOnFocusHandler } from "../../util";
import { PositionRequiredInfoPartProps } from "./type";
import { CONTRACT_TYPE_ARR, REQUIRED_EXP_ARR, REQUIRED_ETC_GUIDE_ARR } from "./constant";
import { cssObj } from "./style";

export const PositionRequiredInfoPart: FunctionComponent<PositionRequiredInfoPartProps> = ({
  id,
  positionIndex,
  jdForm,
  control,
}) => {
  const [requiredEtcIsFocusedArr, setRequiredEtcIsFocusedArr] = useState<boolean[]>([false]);
  const [isMinYear, setIsMinYear] = useState<boolean>(false);
  const [isMaxYear, setIsMaxYear] = useState<boolean>(false);
  const [randomRequiredEtcGuideArr, setRandomRequiredEtcGuideArr] = useState<string[]>([]);

  const { watch, setValue, clearErrors, trigger, formState, register, setError } = jdForm;

  const requiredEtcArr = useFieldArray({
    control,
    name: `position_arr.${positionIndex}.required_etc_arr`,
  });

  const conversionRateHandler = (event: ChangeEvent<HTMLInputElement>, isError: boolean) => {
    if (isError && Number(event.target.value) === 0) {
      setError(`position_arr.${positionIndex}.conversion_rate`, {
        type: "required",
        message: "전환율은 필수 입력 값입니다",
      });
    }
  };

  useEffect(() => {
    setRandomRequiredEtcGuideArr(REQUIRED_ETC_GUIDE_ARR.sort(() => Math.random() - 0.5).slice(0, 3));
  }, []);

  const isConversionDisabled =
    watch("position_arr")[positionIndex].contract_type !== "인턴" &&
    watch("position_arr")[positionIndex].contract_type !== "계약>정규";

  const isYearDisabled =
    watch("position_arr")[positionIndex].required_exp !== "경력" &&
    watch("position_arr")[positionIndex].required_exp !== "신입/경력";

  const isMinYearDisabled = isYearDisabled || isMinYear;
  const isMaxYearDisabled = isYearDisabled || isMaxYear;

  useEffect(() => {
    if (isMinYearDisabled) {
      setValue(`position_arr.${positionIndex}.min_year`, null);
      clearErrors(`position_arr.${positionIndex}.min_year`);
    }

    if (isMaxYearDisabled) {
      setValue(`position_arr.${positionIndex}.max_year`, null);
      clearErrors(`position_arr.${positionIndex}.max_year`);
    }
  }, [jdForm, positionIndex, isMinYearDisabled, isMaxYearDisabled, setValue, clearErrors]);

  return (
    <>
      <div css={cssObj.contractTypeWrapper}>
        <div css={cssObj.container}>
          <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.contract_type))}>
            계약 형태
          </p>
          <div css={cssObj.labelContainer}>
            {CONTRACT_TYPE_ARR.map((contractName) => (
              <SharedRadioButton
                key={`${contractName}${id}`}
                value={contractName}
                id={`${contractName}${id}`}
                registerObj={register(`position_arr.${positionIndex}.contract_type`, {
                  required: "계약 형태는 필수 입력 값입니다",
                  onChange: () => {
                    if (!isConversionDisabled) {
                      clearErrors(`position_arr.${positionIndex}.conversion_rate`);
                      setValue(`position_arr.${positionIndex}.conversion_rate`, null);
                    }
                  },
                })}
              >
                <p css={cssObj.radioLabel}>{contractName}</p>
              </SharedRadioButton>
            ))}
          </div>
          <p css={cssObj.errorMessage}>
            {formState.errors.position_arr?.[positionIndex]?.contract_type &&
              formState.errors.position_arr?.[positionIndex]?.contract_type?.message}
          </p>
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
                disabled={isConversionDisabled}
                value={watch("position_arr")[positionIndex].conversion_rate || 0}
                onChange={(e) => {
                  setValue(`position_arr.${positionIndex}.conversion_rate`, Number(e.target.value));
                  conversionRateHandler(e, !isConversionDisabled);
                  if (Number(e.target.value) !== 0) clearErrors(`position_arr.${positionIndex}.conversion_rate`);
                }}
              />
              <p css={cssObj.conversionRateLabel(watch("position_arr")[positionIndex].conversion_rate || 0)}>
                {watch("position_arr")[positionIndex].conversion_rate || 0}%
              </p>
            </div>
            <div css={cssObj.conversionRateInputContainer}>
              <input
                css={cssObj.activatableInput(isConversionDisabled)}
                type="number"
                min="0"
                max="100"
                step="1"
                {...register(`position_arr.${positionIndex}.conversion_rate`, {
                  required: { value: !isConversionDisabled, message: "전환율은 필수 입력 값입니다" },
                  min: { value: 0, message: "최소값은 1입니다" },
                  max: { value: 100, message: "최대값은 100입니다" },
                  valueAsNumber: true,
                  disabled: isConversionDisabled,
                  onChange: (e) => conversionRateHandler(e, !isConversionDisabled),
                })}
              />
              %
            </div>
          </div>
          <p css={cssObj.errorMessage}>
            {formState.errors.position_arr?.[positionIndex]?.conversion_rate &&
              formState.errors.position_arr?.[positionIndex]?.conversion_rate?.message}
          </p>
        </div>
      </div>
      <div css={cssObj.container}>
        <p>지원 가능 학력</p>
        <div css={cssObj.labelContainer}>
          <label css={cssObj.label} htmlFor={`middle${positionIndex}`}>
            <input
              type="checkbox"
              id={`middle${positionIndex}`}
              {...register(`position_arr.${positionIndex}.middle`)}
            />
            <CheckBox isChecked={watch("position_arr")[positionIndex].middle} />
            중졸
          </label>
          <label css={cssObj.label} htmlFor={`high${positionIndex}`}>
            <input type="checkbox" id={`high${positionIndex}`} {...register(`position_arr.${positionIndex}.high`)} />
            <CheckBox isChecked={watch("position_arr")[positionIndex].high} />
            고졸
          </label>
          <label css={cssObj.label} htmlFor={`college${positionIndex}`}>
            <input
              type="checkbox"
              id={`college${positionIndex}`}
              {...register(`position_arr.${positionIndex}.college`)}
            />
            <CheckBox isChecked={watch("position_arr")[positionIndex].college} />
            초대졸
          </label>
          <label css={cssObj.label} htmlFor={`four${positionIndex}`}>
            <input type="checkbox" id={`four${positionIndex}`} {...register(`position_arr.${positionIndex}.four`)} />
            <CheckBox isChecked={watch("position_arr")[positionIndex].four} />
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
          <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.required_exp))}>
            경력 조건
          </p>
          <div css={cssObj.labelContainer}>
            {REQUIRED_EXP_ARR.map((expName) => (
              <label key={`${expName}${id}`} htmlFor={`${expName}${id}`} css={cssObj.label}>
                <input
                  type="radio"
                  id={`${expName}${id}`}
                  css={cssObj.radio}
                  {...register(`position_arr.${positionIndex}.required_exp`, {
                    required: "경력 조건은 필수 입력 사항입니다",
                  })}
                  value={expName}
                />
                <div css={cssObj.radioBox} />
                <p css={cssObj.radioLabel}>{expName}</p>
              </label>
            ))}
          </div>
          <p css={cssObj.errorMessage}>
            {formState.errors.position_arr?.[positionIndex]?.required_exp &&
              formState.errors.position_arr?.[positionIndex]?.required_exp?.message}
          </p>
        </div>
        <div css={cssObj.container}>
          <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.min_year))}>최소경력(연)</p>
          <div css={cssObj.yearInputContainer}>
            <input
              type="number"
              min="1"
              max="50"
              css={cssObj.activatableInput(isMinYearDisabled)}
              {...register(`position_arr.${positionIndex}.min_year`, {
                required: { value: !isMinYearDisabled, message: "최소 경력은 필수 입력 사항입니다" },
                disabled: isMinYearDisabled,
                min: { value: 1, message: "최소 경력은 1년 이상이어야 합니다" },
                max: { value: 50, message: "최소 경력은 50년 이하이어야 합니다" },
                onBlur: () => trigger(`position_arr.${positionIndex}.max_year`),
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
                    clearErrors(`position_arr.${positionIndex}.min_year`);
                  }
                  setIsMinYear((prev) => !prev);
                }}
              />
              <span css={cssObj.toggleButton(isMinYear)} />
            </label>
            <p>무관</p>
          </div>
          <p css={cssObj.errorMessage}>
            {formState.errors.position_arr?.[positionIndex]?.min_year &&
              formState.errors.position_arr?.[positionIndex]?.min_year?.message}
          </p>
        </div>
        <div css={cssObj.container}>
          <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.max_year))}>최대경력(연)</p>
          <div css={cssObj.yearInputContainer}>
            <input
              type="number"
              min="1"
              max="100"
              css={cssObj.activatableInput(isMaxYearDisabled)}
              {...register(`position_arr.${positionIndex}.max_year`, {
                required: { value: !isMaxYearDisabled, message: "최대 경력은 필수 입력 사항입니다" },
                disabled: isMaxYearDisabled,
                max: { value: 50, message: "최소 경력은 50년 이하이어야 합니다" },
                validate: (value) =>
                  (value || 1) > (watch("position_arr")[positionIndex].min_year || 0) ||
                  "최소 경력 조건이 최대보다 작거나 같을 수 없습니다.",
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
                    clearErrors(`position_arr.${positionIndex}.max_year`);
                  }
                  setIsMaxYear((prev) => !prev);
                }}
              />
              <span css={cssObj.toggleButton(isMaxYear)} />
            </label>
            <p>무관</p>
          </div>
          <p css={cssObj.errorMessage}>
            {formState.errors.position_arr?.[positionIndex]?.max_year &&
              formState.errors.position_arr?.[positionIndex]?.max_year?.message}
          </p>
        </div>
      </div>
      <div css={cssObj.containerWithGuide}>
        <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.required_etc_arr))}>
          기타 지원 조건
        </p>
        <div css={cssObj.inputContainerWithGuide}>
          {requiredEtcArr.fields.map((item, index) => (
            <div key={`requiredEtcArr${item.id}`}>
              <label css={cssObj.inputLabel} htmlFor={`requiredEtcArr${item.id}`}>
                <input
                  id={`requiredEtcArr${item.id}`}
                  css={cssObj.erasableInput(47)}
                  placeholder="군필 여부, 나이, 성별 등의 기타 조건을 적어주세요 (최대 70자)"
                  maxLength={70}
                  onFocus={() => {
                    clearErrors(`position_arr.${positionIndex}.required_etc_arr.${index}`);
                    focusedArrOnFocusHandler(setRequiredEtcIsFocusedArr, index);
                  }}
                  {...register(`position_arr.${positionIndex}.required_etc_arr.${index}.value`, {
                    required: "모든 칸이 채워져야 합니다",
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue("title", "");
                      }
                      trigger(`position_arr.${positionIndex}.required_etc_arr`);
                      focusedArrOnBlurHandler(setRequiredEtcIsFocusedArr, index);
                    },
                  })}
                  autoComplete="off"
                />
                <DeleteInputButton
                  onClickHandler={() => {
                    requiredEtcArr.remove(index);
                    setRequiredEtcIsFocusedArr((prev) => prev.filter((stateItem, stateIndex) => stateIndex !== index));
                  }}
                />
              </label>
              <p css={cssObj.arrayErrorMessage}>
                {formState?.errors?.position_arr?.[positionIndex]?.required_etc_arr?.[index] &&
                  formState?.errors?.position_arr?.[positionIndex]?.required_etc_arr?.[index]?.value?.message}
              </p>
              <div css={cssObj.guideChipContainer}>
                {requiredEtcIsFocusedArr[index] &&
                  randomRequiredEtcGuideArr.map((requiredEtcGuide) => (
                    <GuideChip
                      key={`${requiredEtcGuide}${item.id}`}
                      text={requiredEtcGuide}
                      onClickHandler={() => {
                        setValue(`position_arr.${positionIndex}.required_etc_arr.${index}.value`, requiredEtcGuide);
                        const filteredArr = REQUIRED_ETC_GUIDE_ARR.filter(
                          (element) =>
                            !randomRequiredEtcGuideArr.includes(element) &&
                            !jdForm
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
          {requiredEtcArr.fields.length < 10 && (
            <AddFieldButton
              onClickHandler={() => {
                requiredEtcArr.append({ value: "" });
                setRequiredEtcIsFocusedArr((prev) => [...prev, false]);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};
