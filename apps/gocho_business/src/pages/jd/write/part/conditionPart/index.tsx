import { FunctionComponent, useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { UseFieldArrayReturn } from "react-hook-form";

import { CheckBox } from "shared-ui/common/checkbox";
import { commonCssObj } from "@/styles";
import { jdRotationClickEvent } from "@/ga";

import { AddFieldButton, DeleteInputButton } from "../../component";
import { AddJdFormValues } from "../../../upload/type";
import { setFieldErrorIfEmpty } from "../../../upload/util";
import { ConditionPartProps } from "./type";
import { SHIFT_ARR } from "./constant";
import { cssObj } from "./style";

export const ConditionPart: FunctionComponent<ConditionPartProps> = ({ jdForm, payArr }) => {
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
  } = jdForm;

  const shiftClickHandler = (shift: string) => {
    const isInList = watch("detail.shift").includes(shift);
    clearErrors(`detail.shift`);
    if (isInList) {
      setValue(`detail.shift`, [...watch("detail.shift").filter((element) => element !== shift)]);
    } else {
      setValue(`detail.shift`, [...watch("detail.shift"), shift]);
    }
  };

  const shiftTextMaker = (selectedShfit: string[]) => {
    if (!selectedShfit || selectedShfit.length === 0) return "교대 형태 선택";
    return selectedShfit.map((shift) => SHIFT_ARR.find((shiftObj) => shiftObj.data === shift)?.name).join(", ");
  };

  const payArrCheckboxClickHandler = (
    currentCheck: boolean,
    anotherCheck: boolean,
    setCurrentCheck: (value: ((prevState: boolean) => boolean) | boolean) => void,
    arr: UseFieldArrayReturn<AddJdFormValues, "detail.pay", "id">,
    text: string
  ) => {
    if (currentCheck) {
      const index = arr.fields.findIndex((item) => item.value === text);
      if (index !== -1) {
        if (arr.fields.length !== 1) arr.remove(index);
        else setValue("detail.pay", [{ value: "" }]);
      }
    } else if (anotherCheck) {
      arr.append({ value: text });
    } else {
      setValue("detail.pay", [{ value: text }]);
    }

    setCurrentCheck((prev) => !prev);
    clearErrors("detail.pay");
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
                  }}
                />
                <CheckBox isChecked={afterPass} />
                면접 후 결정
              </label>
              <p css={commonCssObj.errorMessage}>{errors.detail?.pay?.message}</p>
            </div>
          </div>
          <div css={commonCssObj.arrayInputContainer}>
            {payArr.fields.map((item, index) => (
              <div key={`payArr${item.id}`}>
                <label css={commonCssObj.inputLabel} htmlFor={`payArr${item.id}`}>
                  <input
                    id={`payArr${item.id}`}
                    css={commonCssObj.input(55.5, Boolean(errors.detail?.pay))}
                    placeholder="급여 정보를 기재해주세요 (최대 30자)"
                    maxLength={30}
                    disabled={isPayArrDisabled}
                    {...register(`detail.pay.${index}.value`, {
                      onBlur: (blurEvent) => {
                        if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                          setValue(`detail.pay.${index}.value`, "");
                        }
                        setFieldErrorIfEmpty(watch, jdForm, "detail.pay", "* 급여 정보를 입력해 주세요");
                      },
                      maxLength: { value: 30, message: "최대 길이는 30자입니다." },
                    })}
                  />
                  {index !== 0 && !isPayArrDisabled && (
                    <DeleteInputButton
                      onClickHandler={() => {
                        payArr.remove(index);
                        setFieldErrorIfEmpty(watch, jdForm, "detail.pay", "* 급여 정보를 입력해 주세요");
                      }}
                    />
                  )}
                </label>
                <p css={commonCssObj.errorMessage}>
                  {errors.detail?.pay?.[index] && errors.detail.pay?.[index]?.value?.message}
                </p>
              </div>
            ))}
            <div css={commonCssObj.addButtonWrapper}>
              {payArr.fields.length < 15 && !isPayArrDisabled && (
                <AddFieldButton
                  onClickHandler={() => {
                    payArr.append({ value: "" });
                    setFieldErrorIfEmpty(watch, jdForm, "detail.pay", "* 급여 정보를 입력해 주세요");
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
        <div css={cssObj.shiftContainer}>
          <input
            css={cssObj.hiddenInput}
            {...register(`detail.shift`, {
              required: "* 교대 형태를 선택해 주세요",
            })}
          />
          <button
            css={commonCssObj.select(30, Boolean(errors.detail?.shift))}
            type="button"
            onClick={() => {
              jdRotationClickEvent();
              if (isRotationOpen && watch("detail.shift").length === 0) {
                setError(`detail.shift`, {
                  type: "required",
                  message: "* 교대 형태를 선택해 주세요",
                });
              }
              setIsRotationOpen((prev) => !prev);
            }}
            onBlur={() => {
              trigger(`detail.shift`);
              setIsRotationOpen(false);
            }}
          >
            <p css={cssObj.shiftInnerText}>{shiftTextMaker(watch("detail.shift"))}</p>
            {isRotationOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          <div css={commonCssObj.optionList(isRotationOpen, 12)}>
            {SHIFT_ARR.map((shift) => (
              <button
                type="button"
                css={commonCssObj.option}
                key={shift.data}
                value={shift.data}
                onMouseDown={(event) => {
                  event.preventDefault();
                  shiftClickHandler(shift.data);
                }}
              >
                <CheckBox isChecked={watch("detail.shift")?.includes(shift.data) || false} />
                {shift.name}
              </button>
            ))}
          </div>
        </div>
        <p css={commonCssObj.errorMessage}>{errors.detail?.shift && `${errors.detail.shift.message}`}</p>
      </div>
    </div>
  );
};
