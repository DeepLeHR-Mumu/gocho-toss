import { FunctionComponent, useState } from "react";
import { FiX } from "react-icons/fi";
import { useFieldArray } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { RequiredPartProps } from "./type";
import { CERTI_ARR } from "./constant";

import { commonCssObj } from "../style";
import { cssObj } from "./style";

export const RequiredPart: FunctionComponent<RequiredPartProps> = ({ jobForm, control }) => {
  const [certiSearchWord, setCertiSearchWord] = useState<string>("");
  const [isCertiSearchFocused, setIsCertiSearchFocused] = useState<boolean>(false);

  const { watch, setValue, clearErrors, trigger, formState, register } = jobForm;

  const requiredEtcArr = useFieldArray({
    control,
    name: `required_etc_arr`,
  });

  const preferredEtcArr = useFieldArray({
    control,
    name: `preferred_etc_arr`,
  });

  const certiClickHandler = (certi: string) => {
    const totalNumber = watch("preferred_certi_arr")?.length || 0;
    const isInList = watch("preferred_certi_arr")?.includes(certi);

    if (totalNumber < 10) {
      if (isInList) {
        setValue(`preferred_certi_arr`, [
          ...(watch("preferred_certi_arr")?.filter((element) => element !== certi) || []),
        ]);
      } else {
        setValue(`preferred_certi_arr`, [...(watch("preferred_certi_arr") || []), certi]);
      }
    }
  };

  return (
    <div css={commonCssObj.partContainer}>
      <strong css={commonCssObj.partTitle}>지원 자격</strong>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle}>학력</p>
        <div css={cssObj.labelContainer}>
          <label css={cssObj.label} htmlFor="high">
            <input type="checkbox" id="high" {...register(`high`)} />
            <CheckBox isChecked={watch("high")} />
            고졸
          </label>
          <label css={cssObj.label} htmlFor="college">
            <input type="checkbox" id="college" {...register(`college`)} />
            <CheckBox isChecked={watch("college")} />
            초대졸
          </label>
          <label css={cssObj.label} htmlFor="four">
            <input type="checkbox" id="four" {...register(`four`)} />
            <CheckBox isChecked={watch("four")} />
            4년제
          </label>
        </div>
        <p css={cssObj.errorMessage} />
      </div>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.optionalInputTitle}>기타 조건</p>
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
                    clearErrors(`required_etc_arr.${index}`);
                  }}
                  {...register(`required_etc_arr.${index}.value`, {
                    required: "모든 칸이 채워져야 합니다",
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue("title", "");
                      }
                      trigger(`required_etc_arr`);
                    },
                  })}
                  autoComplete="off"
                />
              </label>
              <p css={cssObj.arrayErrorMessage}>
                {formState?.errors?.required_etc_arr?.[index] &&
                  formState?.errors?.required_etc_arr?.[index]?.value?.message}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.optionalInputTitle}>우대사항</p>
        <div css={cssObj.inputContainerWithGuide}>
          {preferredEtcArr.fields.map((item, index) => (
            <div key={`${preferredEtcArr}${item.id}`}>
              <label css={cssObj.inputLabel} htmlFor={`${preferredEtcArr}${item.id}`}>
                <input
                  id={`${preferredEtcArr}${item.id}`}
                  css={cssObj.erasableInput(47)}
                  placeholder="기타 우대 사항 (최대 70자)"
                  maxLength={70}
                  {...register(`preferred_etc_arr.${index}.value`, {
                    onBlur: () => {
                      trigger(`preferred_etc_arr`);
                    },
                  })}
                  autoComplete="off"
                />
              </label>
            </div>
          ))}
        </div>
      </div>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.optionalInputTitle}>우대 자격증</p>
        <div css={cssObj.optionContainer}>
          <input
            css={cssObj.input(20)}
            type="text"
            onFocus={() => {
              setIsCertiSearchFocused(true);
            }}
            onBlur={() => {
              setIsCertiSearchFocused(false);
            }}
            placeholder="자격증 검색"
            onChange={(e) => {
              setCertiSearchWord(e.target.value);
            }}
          />
          <div css={cssObj.optionList(isCertiSearchFocused)}>
            {CERTI_ARR.filter((prevCerti) => prevCerti.includes(certiSearchWord)).map((certi) => (
              <button
                type="button"
                css={cssObj.option}
                key={certi}
                value={certi}
                onMouseDown={(event) => {
                  event.preventDefault();
                  certiClickHandler(certi);
                }}
              >
                <CheckBox isChecked={watch("preferred_certi_arr")?.includes(certi) || false} />
                {certi}
              </button>
            ))}
          </div>
        </div>

        <div css={cssObj.selectedCertiContainer}>
          {watch("preferred_certi_arr")?.map((certi) => (
            <div key={certi} css={cssObj.certiLabel}>
              {certi}
              <button
                type="button"
                css={cssObj.smallDeleteButton}
                onClick={() => {
                  setValue(`preferred_certi_arr`, [
                    ...(jobForm.watch("preferred_certi_arr")?.filter((element) => element !== certi) || []),
                  ]);
                }}
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
