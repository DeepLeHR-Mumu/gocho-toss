import { FunctionComponent, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { ConditionPartProps } from "./type";
import { ROTATION_ARR } from "./constant";
import { commonCssObj } from "../style";
import { cssObj } from "./style";

export const ConditionPart: FunctionComponent<ConditionPartProps> = ({ jobForm }) => {
  const [isRotationOpen, setIsRotationOpen] = useState<boolean>(false);

  const { watch, setValue, clearErrors, trigger, formState, register, setError } = jobForm;

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
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle(false)}>급여</p>
        <input
          css={commonCssObj.input(47)}
          placeholder="급여 정보 (최대 50자)"
          maxLength={50}
          onFocus={() => {
            clearErrors(`pay_arr`);
          }}
          {...register(`pay_arr`, {
            required: "모든 칸이 채워져야 합니다",
            onBlur: (blurEvent) => {
              if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                setValue(`pay_arr`, "");
              }
              trigger(`pay_arr`);
            },
          })}
          autoComplete="off"
        />
      </div>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle(false)}>교대 형태</p>
        <div css={cssObj.optionContainer}>
          <input
            css={cssObj.hiddenInput}
            {...register(`rotation_arr`, {
              required: "교대 형태는 필수 입력 사항입니다",
            })}
          />
          <button
            css={commonCssObj.select(30)}
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
          <div css={commonCssObj.optionList(isRotationOpen)}>
            {ROTATION_ARR.map((rotation) => (
              <button
                type="button"
                css={commonCssObj.option}
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
    </div>
  );
};
