import { FunctionComponent, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { UseFieldArrayReturn } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { commonCssObj } from "@/styles";

import { AddFieldButton, DeleteInputButton } from "../../component";
import { JobFormValues } from "../../type";
import { ConditionPartProps } from "./type";
import { ROTATION_ARR } from "./constant";
import { cssObj } from "./style";

export const ConditionPart: FunctionComponent<ConditionPartProps> = ({ jobForm, payArr }) => {
  const [companyDepend, setCompanyDepend] = useState<boolean>(false);
  const [afterPass, setAfterPass] = useState<boolean>(false);
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

  const payArrCheckboxClickHandler = (
    currentCheck: boolean,
    anotherCheck: boolean,
    setCurrentCheck: (value: ((prevState: boolean) => boolean) | boolean) => void,
    arr: UseFieldArrayReturn<JobFormValues, "pay_arr", "id">,
    text: string
  ) => {
    if (currentCheck) {
      const index = arr.fields.findIndex((item) => item.value === text);
      if (index !== -1) {
        if (arr.fields.length !== 1) arr.remove(index);
        else setValue("pay_arr", [{ value: "" }]);
      }
    } else if (anotherCheck) {
      arr.append({ value: text });
    } else {
      setValue("pay_arr", [{ value: text }]);
    }
    setCurrentCheck((prev) => !prev);
  };

  const isPayArrDisabled = companyDepend || afterPass;

  return (
    <div css={commonCssObj.partContainer}>
      <strong css={commonCssObj.partTitle}>근무 조건</strong>
      <div css={commonCssObj.longContainer}>
        <div css={cssObj.titleWrapper}>
          <p css={commonCssObj.inputTitle(false)}>급여</p>
        </div>
        <div css={cssObj.inputWrapper}>
          <div css={cssObj.payLabelContainer}>
            <div css={commonCssObj.labelContainer}>
              <label css={commonCssObj.label} htmlFor="companyDepend">
                <input
                  type="checkbox"
                  id="companyDepend"
                  onClick={() => {
                    payArrCheckboxClickHandler(companyDepend, afterPass, setCompanyDepend, payArr, "회사 내규에 따름");
                  }}
                />
                <CheckBox isChecked={companyDepend} />
                회사 내규에 따름
              </label>
              <label css={commonCssObj.label} htmlFor="afterPass">
                <input
                  type="checkbox"
                  id="afterPass"
                  onClick={() => {
                    payArrCheckboxClickHandler(afterPass, companyDepend, setAfterPass, payArr, "면접 후 결정");
                    // if (afterPass) {
                    //   const index = payArr.fields.findIndex((item) => item.value === "면접 후 결정");
                    //   if (index !== -1) {
                    //     if (payArr.fields.length !== 1) payArr.remove(index);
                    //     else setValue("pay_arr", [{ value: "" }]);
                    //   }
                    // } else if (companyDepend) {
                    //   payArr.append({ value: "면접 후 결정" });
                    // } else {
                    //   setValue("pay_arr", [{ value: "면접 후 결정" }]);
                    // }
                    // setAfterPass((prev) => !prev);
                  }}
                />
                <CheckBox isChecked={afterPass} />
                면접 후 결정
              </label>
              <p css={commonCssObj.errorMessage}>{errors.pay_arr && `${errors.pay_arr?.message}`}</p>
            </div>
          </div>
          <div css={commonCssObj.arrayInputContainer}>
            {payArr.fields.map((item, index) => (
              <div key={`payArr${item.id}`}>
                <label css={commonCssObj.inputLabel} htmlFor={`payArr${item.id}`}>
                  <input
                    id={`payArr${item.id}`}
                    css={commonCssObj.input(55.5, Boolean(errors.pay_arr))}
                    placeholder="급여 정보를 기재해주세요 (최대 50자)"
                    maxLength={50}
                    disabled={isPayArrDisabled}
                    onFocus={() => {
                      clearErrors(`pay_arr.${index}`);
                    }}
                    {...register(`pay_arr.${index}.value`, {
                      required: "* 모든 칸이 채워져야 합니다",
                      onBlur: (blurEvent) => {
                        if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                          setValue(`pay_arr.${index}.value`, "");
                        }
                        trigger(`pay_arr`);
                      },
                    })}
                    autoComplete="off"
                  />
                  {index !== 0 && (
                    <DeleteInputButton
                      onClickHandler={() => {
                        payArr.remove(index);
                      }}
                    />
                  )}
                </label>
                <p css={commonCssObj.errorMessage}>
                  {errors.pay_arr?.[index] && errors.pay_arr?.[index]?.value?.message}
                </p>
              </div>
            ))}
            <div css={commonCssObj.addButtonWrapper}>
              {payArr.fields.length < 15 && (
                <AddFieldButton
                  onClickHandler={() => {
                    payArr.append({ value: "" });
                  }}
                  disabled={isPayArrDisabled}
                />
              )}
            </div>
          </div>
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
