import { FunctionComponent, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { ConditionPartProps } from "./type";
import { ROTATION_ARR } from "./constant";
import { commonCssObj } from "../style";
import { cssObj } from "./style";

export const ConditionPart: FunctionComponent<ConditionPartProps> = ({ jobForm }) => {
  const [isRotationOpen, setIsRotationOpen] = useState<boolean>(false);

  const {
    watch,
    setValue,
    clearErrors,
    trigger,
    formState: { errors },
    register,
    setError,
  } = jobForm;

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
      <div css={commonCssObj.longContainer}>
        <div css={cssObj.titleWrapper}>
          <p css={commonCssObj.inputTitle(false)}>급여</p>
        </div>
        <div css={cssObj.inputWrapper}>
          <div css={commonCssObj.labelContainer}>
            <label css={commonCssObj.label} htmlFor="companyDepend">
              <input type="checkbox" id="companyDepend" />
              <CheckBox isChecked={watch("college")} />
              회사 내규에 따름
            </label>
            <label css={commonCssObj.label} htmlFor="after">
              <input type="checkbox" id="after" />
              <CheckBox isChecked={watch("college")} />
              면접 후 결정
            </label>
            <p css={commonCssObj.errorMessage}>{errors.pay_arr && `${errors.pay_arr?.message}`}</p>
          </div>
          <textarea
            css={commonCssObj.textarea}
            placeholder="급여 정보를 엔터(Enter)로 구분하여 기재해 주세요 (항목당 최대 70자)"
            maxLength={50}
            onFocus={() => {
              clearErrors(`pay_arr`);
            }}
            {...register(`pay_arr`, {
              required: "* 급여 정보를 입력해 주세요",
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
      </div>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle(false)}>교대 형태</p>
        <div css={cssObj.rotationContainer}>
          <input
            css={cssObj.hiddenInput}
            {...register(`rotation_arr`, {
              required: "* 교대 형태를 선택해 주세요",
            })}
          />
          <button
            css={commonCssObj.select(30, Boolean(errors.rotation_arr))}
            type="button"
            onClick={() => {
              if (isRotationOpen && watch("rotation_arr").length === 0) {
                setError(`rotation_arr`, {
                  type: "required",
                  message: "* 교대 형태를 선택해 주세요",
                });
              }
              setIsRotationOpen((prev) => !prev);
            }}
            onBlur={() => {
              trigger(`rotation_arr`);
              setIsRotationOpen(false);
            }}
          >
            <p css={cssObj.rotationInnerText}>{rotationTextMaker(watch("rotation_arr"))}</p>
            {isRotationOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          <div css={commonCssObj.optionList(isRotationOpen, 12)}>
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
        <p css={commonCssObj.errorMessage}>{errors.rotation_arr && `${errors.rotation_arr?.message}`}</p>
      </div>
    </div>
  );
};
