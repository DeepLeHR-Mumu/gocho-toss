import { FunctionComponent, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { useFieldArray } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { DeleteInputButton, AddFieldButton, GuideChip } from "../../component";
import { focusedArrOnBlurHandler, focusedArrOnFocusHandler } from "../util";
import { ConditionPartProps } from "./type";
import { ROTATION_ARR } from "./constant";
import { commonCssObj } from "../style";
import { cssObj } from "./style";

export const ConditionPart: FunctionComponent<ConditionPartProps> = ({ jobForm, control }) => {
  const [payIsFocusedArr, setPayIsFocusedArr] = useState<boolean[]>([false]);
  const [isRotationOpen, setIsRotationOpen] = useState<boolean>(false);

  const { watch, setValue, clearErrors, trigger, formState, register, setError } = jobForm;

  const payArr = useFieldArray({
    control,
    name: `pay_arr`,
  });

  const rotationClickHandler = (rotation: string) => {
    const isInList = watch("rotation_arr").includes(rotation);
    clearErrors(`rotation_arr`);
    if (isInList) {
      setValue(`rotation_arr`, [...watch("rotation_arr").filter((element) => element !== rotation)]);
    } else {
      setValue(`rotation_arr`, [...watch("rotation_arr"), rotation]);
    }
  };

  const rotationTextMaker = (selectedRotation: string[]) => {
    if (!selectedRotation || selectedRotation.length === 0) return "교대 형태 선택";
    return selectedRotation
      .map((rotation) => ROTATION_ARR.find((rotationObj) => rotationObj.data === rotation)?.name)
      .join(", ");
  };

  return (
    <div css={commonCssObj.partContainer}>
      <strong css={commonCssObj.partTitle}>근무 조건</strong>
      <div css={cssObj.container}>
        <p css={commonCssObj.inputTitle}>교대 형태</p>
        <div css={cssObj.optionContainer}>
          <input
            css={cssObj.hiddenInput}
            {...register(`rotation_arr`, {
              required: "교대 형태는 필수 입력 사항입니다",
            })}
          />
          <button
            css={cssObj.input(20)}
            type="button"
            onClick={() => {
              if (isRotationOpen && watch("rotation_arr").length === 0) {
                setError(`rotation_arr`, {
                  type: "required",
                  message: "교대 형태는 필수 입력 사항입니다",
                });
              }
              setIsRotationOpen((prev) => !prev);
            }}
            onBlur={() => {
              setIsRotationOpen(false);
            }}
          >
            <p css={cssObj.rotationInnerText}>{rotationTextMaker(watch("rotation_arr"))}</p>
            {isRotationOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          <div css={cssObj.optionList(isRotationOpen)}>
            {ROTATION_ARR.map((rotation) => (
              <button
                type="button"
                css={cssObj.option}
                key={rotation.data}
                value={rotation.data}
                onMouseDown={(event) => {
                  event.preventDefault();
                  rotationClickHandler(rotation.data);
                }}
              >
                <CheckBox isChecked={watch("rotation_arr")?.includes(rotation.data) || false} />
                {rotation.name}
              </button>
            ))}
          </div>
        </div>
        <p css={cssObj.errorMessage}>
          {formState.errors?.rotation_arr && `${formState.errors?.rotation_arr?.message}`}
        </p>
      </div>
      <div css={cssObj.containerWithGuide}>
        <p css={commonCssObj.inputTitle}>급여</p>
        <div css={cssObj.inputContainerWithGuide}>
          {payArr.fields.map((item, index) => (
            <div key={`${payArr}${item.id}`}>
              <label css={cssObj.inputLabel} htmlFor={`${payArr}${item.id}`}>
                <input
                  id={`${payArr}${item.id}`}
                  css={cssObj.erasableInput(47)}
                  placeholder="급여 정보 (최대 70자)"
                  maxLength={70}
                  onFocus={() => {
                    clearErrors(`pay_arr.${index}`);
                    focusedArrOnFocusHandler(setPayIsFocusedArr, index);
                  }}
                  {...register(`pay_arr.${index}.value`, {
                    required: "모든 칸이 채워져야 합니다",
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue(`pay_arr.${index}.value`, "");
                      }
                      trigger(`pay_arr`);
                      focusedArrOnBlurHandler(setPayIsFocusedArr, index);
                    },
                  })}
                  autoComplete="off"
                />
                {index !== 0 && (
                  <DeleteInputButton
                    onClickHandler={() => {
                      payArr.remove(index);
                      setPayIsFocusedArr((prev) => prev.filter((stateItem, stateIndex) => stateIndex !== index));
                    }}
                  />
                )}
              </label>
              <p css={cssObj.arrayErrorMessage}>
                {formState?.errors?.pay_arr?.[index] && formState?.errors?.pay_arr?.[index]?.value?.message}
              </p>
              <div css={cssObj.guideChipContainer}>
                {payIsFocusedArr[index] && (
                  <GuideChip
                    text="회사 내규에 따름"
                    onClickHandler={() => {
                      setValue(`pay_arr.${index}.value`, "회사 내규에 따름");
                    }}
                  />
                )}
              </div>
            </div>
          ))}
          {payArr.fields.length < 10 && (
            <AddFieldButton
              onClickHandler={() => {
                payArr.append({ value: "" });
                setPayIsFocusedArr((prev) => [...prev, false]);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
