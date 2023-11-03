import { FunctionComponent } from "react";
import { FiX } from "react-icons/fi";

import { CheckBox } from "shared-ui/common/checkbox";
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

  const isSchoolAllSelected =
    watch("qualification.highschool") && watch("qualification.college") && watch("qualification.university");

  return (
    <div css={commonCssObj.partContainer}>
      <strong css={commonCssObj.partTitle}>지원 자격</strong>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle(false)}>학력</p>
        <div css={commonCssObj.labelContainer}>
          <button type="button" onClick={() => jdAcademicClickEvent()} onKeyDown={() => jdAcademicClickEvent()}>
            <label css={commonCssObj.label} htmlFor="highschool">
              <input
                type="checkbox"
                id="highschool"
                {...register(`qualification.highschool`)}
                onClick={() => clearErrors("qualification.highschool")}
              />
              <CheckBox isChecked={watch("qualification.highschool")} />
              고졸
            </label>
          </button>
          <button type="button" onClick={() => jdAcademicClickEvent()} onKeyDown={() => jdAcademicClickEvent()}>
            <label css={commonCssObj.label} htmlFor="college">
              <input
                type="checkbox"
                id="college"
                {...register(`qualification.college`)}
                onClick={() => clearErrors("qualification.college")}
              />
              <CheckBox isChecked={watch("qualification.college")} />
              초대졸
            </label>
          </button>
          <button type="button" onClick={() => jdAcademicClickEvent()} onKeyDown={() => jdAcademicClickEvent()}>
            <label css={commonCssObj.label} htmlFor="university">
              <input
                type="checkbox"
                id="university"
                {...register(`qualification.university`)}
                onClick={() => clearErrors("qualification.university")}
              />
              <CheckBox isChecked={watch("qualification.university")} />
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
                    setValue("qualification.highschool", false);
                    setValue("qualification.college", false);
                    setValue("qualification.university", false);
                  } else {
                    setValue("qualification.highschool", true);
                    setValue("qualification.college", true);
                    setValue("qualification.university", true);
                  }
                  clearErrors("qualification.highschool");
                }}
              />
              <CheckBox isChecked={isSchoolAllSelected} />
              학력무관
            </label>
          </button>
        </div>
        <p css={commonCssObj.errorMessage}>{errors.qualification?.highschool?.message}</p>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.optionalInputTitle(true)}>기타 조건</p>
        <div css={commonCssObj.arrayInputContainer}>
          {requiredEtcArr.fields.map((item, index) => (
            <div key={`requiredEtcArr${item.id}`}>
              <label css={commonCssObj.inputLabel} htmlFor={`requiredEtcArr${item.id}`}>
                <input
                  id={`requiredEtcArr${item.id}`}
                  css={commonCssObj.input(55.5, Boolean(errors.qualification?.required_etc))}
                  placeholder="예) 군필자, 전공 무관, 운전 가능자 등 (최대 30자)"
                  maxLength={30}
                  {...register(`qualification.required_etc.${index}.value`, {
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue(`qualification.required_etc.${index}.value`, "");
                      }
                    },
                    maxLength: { value: 30, message: "최대 길이는 30자입니다." },
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
                {errors.qualification?.required_etc?.[index] &&
                  errors.qualification.required_etc?.[index]?.value?.message}
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
                  css={commonCssObj.input(55.5, Boolean(errors.qualification?.preferred_etc))}
                  placeholder="예) 인근거주자, 차량소지자 (최대 20자)"
                  maxLength={20}
                  {...register(`qualification.preferred_etc.${index}.value`, {
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue(`qualification.preferred_etc.${index}.value`, "");
                      }
                    },
                    maxLength: { value: 20, message: "최대 길이는 20자입니다." },
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
                {errors.qualification?.preferred_etc?.[index] &&
                  errors.qualification.preferred_etc?.[index]?.value?.message}
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
          {watch("qualification.preferred_certification")?.map((certi) => (
            <div key={certi} css={cssObj.certiLabel}>
              {certi}
              <button
                type="button"
                css={cssObj.smallDeleteButton}
                onClick={() => {
                  setValue(`qualification.preferred_certification`, [
                    ...(jdForm.watch("qualification.preferred_certification")?.filter((element) => element !== certi) ||
                      []),
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
