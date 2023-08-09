import { FunctionComponent } from "react";
import { FiX } from "react-icons/fi";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { commonCssObj } from "@/styles";
import { useModal } from "@/globalStates";
import { jdAcademicClickEvent } from "@/ga";

import { AddFieldButton, DeleteInputButton } from "../../component";
import { RequiredPartProps } from "./type";
import { cssObj } from "./style";

export const RequiredPart: FunctionComponent<RequiredPartProps> = ({ jdForm, requiredEtcArr, preferredEtcArr }) => {
  const { setModal } = useModal();

  const {
    watch,
    setValue,
    register,
    clearErrors,
    formState: { errors },
  } = jdForm;

  const isSchoolAllSelected = watch("high") && watch("college") && watch("four");

  return (
    <div css={commonCssObj.partContainer}>
      <strong css={commonCssObj.partTitle}>지원 자격</strong>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle(false)}>학력</p>
        <div css={commonCssObj.labelContainer}>
          <button type="button" onClick={() => jdAcademicClickEvent()} onKeyDown={() => jdAcademicClickEvent()}>
            <label css={commonCssObj.label} htmlFor="high">
              <input type="checkbox" id="high" {...register(`high`)} onClick={() => clearErrors("high")} />
              <CheckBox isChecked={watch("high")} />
              고졸
            </label>
          </button>
          <button type="button" onClick={() => jdAcademicClickEvent()} onKeyDown={() => jdAcademicClickEvent()}>
            <label css={commonCssObj.label} htmlFor="college">
              <input type="checkbox" id="college" {...register(`college`)} onClick={() => clearErrors("high")} />
              <CheckBox isChecked={watch("college")} />
              초대졸
            </label>
          </button>
          <button type="button" onClick={() => jdAcademicClickEvent()} onKeyDown={() => jdAcademicClickEvent()}>
            <label css={commonCssObj.label} htmlFor="four">
              <input type="checkbox" id="four" {...register(`four`)} onClick={() => clearErrors("high")} />
              <CheckBox isChecked={watch("four")} />
              4년제
            </label>
          </button>
          <button type="button" onClick={() => jdAcademicClickEvent()} onKeyDown={() => jdAcademicClickEvent()}>
            <label css={commonCssObj.label} htmlFor="all">
              <input
                type="checkbox"
                id="all"
                onClick={() => {
                  if (isSchoolAllSelected) {
                    setValue("high", false);
                    setValue("college", false);
                    setValue("four", false);
                  } else {
                    setValue("high", true);
                    setValue("college", true);
                    setValue("four", true);
                  }
                  clearErrors("high");
                }}
              />
              <CheckBox isChecked={isSchoolAllSelected} />
              학력무관
            </label>
          </button>
        </div>
        <p css={commonCssObj.errorMessage}>{errors.high?.message}</p>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.optionalInputTitle(true)}>기타 조건</p>
        <div css={commonCssObj.arrayInputContainer}>
          {requiredEtcArr.fields.map((item, index) => (
            <div key={`requiredEtcArr${item.id}`}>
              <label css={commonCssObj.inputLabel} htmlFor={`requiredEtcArr${item.id}`}>
                <input
                  id={`requiredEtcArr${item.id}`}
                  css={commonCssObj.input(55.5, Boolean(errors.required_etc_arr))}
                  placeholder="예) 군필자, 전공 무관, 운전 가능자 등 (최대 50자)"
                  maxLength={50}
                  {...register(`required_etc_arr.${index}.value`, {
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue(`required_etc_arr.${index}.value`, "");
                      }
                    },
                    maxLength: { value: 50, message: "최대 길이는 50자입니다." },
                  })}
                />
                {index !== 0 && (
                  <DeleteInputButton
                    onClickHandler={() => {
                      requiredEtcArr.remove(index);
                    }}
                  />
                )}
              </label>
              <p css={commonCssObj.errorMessage}>
                {errors.required_etc_arr?.[index] && errors.required_etc_arr?.[index]?.value?.message}
              </p>
            </div>
          ))}
          <div css={commonCssObj.addButtonWrapper}>
            {requiredEtcArr.fields.length < 15 && (
              <AddFieldButton
                onClickHandler={() => {
                  requiredEtcArr.append({ value: "" });
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.optionalInputTitle(true)}>우대사항</p>
        <div css={commonCssObj.arrayInputContainer}>
          {preferredEtcArr.fields.map((item, index) => (
            <div key={`preferredEtcArr${item.id}`}>
              <label css={commonCssObj.inputLabel} htmlFor={`preferredEtcArr${item.id}`}>
                <input
                  id={`preferredEtcArr${item.id}`}
                  css={commonCssObj.input(55.5, Boolean(errors.preferred_etc_arr))}
                  placeholder="예) 인근거주자, 차량소지자 (최대 50자)"
                  maxLength={50}
                  {...register(`preferred_etc_arr.${index}.value`, {
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue(`preferred_etc_arr.${index}.value`, "");
                      }
                    },
                    maxLength: { value: 50, message: "최대 길이는 50자입니다." },
                  })}
                />
                {index !== 0 && (
                  <DeleteInputButton
                    onClickHandler={() => {
                      preferredEtcArr.remove(index);
                    }}
                  />
                )}
              </label>
              <p css={commonCssObj.errorMessage}>
                {errors.preferred_etc_arr?.[index] && errors.preferred_etc_arr?.[index]?.value?.message}
              </p>
            </div>
          ))}
          <div css={commonCssObj.addButtonWrapper}>
            {preferredEtcArr.fields.length < 15 && (
              <AddFieldButton
                onClickHandler={() => {
                  preferredEtcArr.append({ value: "" });
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.optionalInputTitle(true)}>우대 자격증</p>
        <div css={cssObj.selectedCertiContainer}>
          {watch("preferred_certi_arr")?.map((certi) => (
            <div key={certi} css={cssObj.certiLabel}>
              {certi}
              <button
                type="button"
                css={cssObj.smallDeleteButton}
                onClick={() => {
                  setValue(`preferred_certi_arr`, [
                    ...(jdForm.watch("preferred_certi_arr")?.filter((element) => element !== certi) || []),
                  ]);
                }}
              >
                <FiX />
              </button>
            </div>
          ))}
          <AddFieldButton text="자격증 추가" onClickHandler={() => setModal("certiAddModal", { jdForm })} />
        </div>
      </div>
    </div>
  );
};
