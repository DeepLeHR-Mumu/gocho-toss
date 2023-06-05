import { FunctionComponent } from "react";
import { FiX } from "react-icons/fi";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { RequiredPartProps } from "./type";
// import { CERTI_ARR } from "./constant";
import { AddFieldButton } from "../../component";
import { commonCssObj } from "../style";
import { cssObj } from "./style";

export const RequiredPart: FunctionComponent<RequiredPartProps> = ({ jobForm }) => {
  const { watch, setValue, clearErrors, trigger, register } = jobForm;

  // const certiClickHandler = (certi: string) => {
  //   const totalNumber = watch("preferred_certi_arr")?.length || 0;
  //   const isInList = watch("preferred_certi_arr")?.includes(certi);
  //
  //   if (totalNumber < 10) {
  //     if (isInList) {
  //       setValue(`preferred_certi_arr`, [
  //         ...(watch("preferred_certi_arr")?.filter((element) => element !== certi) || []),
  //       ]);
  //     } else {
  //       setValue(`preferred_certi_arr`, [...(watch("preferred_certi_arr") || []), certi]);
  //     }
  //   }
  // };

  const isSchoolAllSelected = watch("high") && watch("college") && watch("four");

  return (
    <div css={commonCssObj.partContainer}>
      <strong css={commonCssObj.partTitle}>지원 자격</strong>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle(false)}>학력</p>
        <div css={commonCssObj.labelContainer}>
          <label css={commonCssObj.label} htmlFor="high">
            <input css={cssObj.input} type="checkbox" id="high" {...register(`high`)} />
            <CheckBox isChecked={watch("high")} />
            고졸
          </label>
          <label css={commonCssObj.label} htmlFor="college">
            <input css={cssObj.input} type="checkbox" id="college" {...register(`college`)} />
            <CheckBox isChecked={watch("college")} />
            초대졸
          </label>
          <label css={commonCssObj.label} htmlFor="four">
            <input css={cssObj.input} type="checkbox" id="four" {...register(`four`)} />
            <CheckBox isChecked={watch("four")} />
            4년제
          </label>
          <label css={commonCssObj.label} htmlFor="all">
            <input
              css={cssObj.input}
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
              }}
            />
            <CheckBox isChecked={isSchoolAllSelected} />
            학력무관
          </label>
        </div>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.optionalInputTitle(true)}>기타 조건</p>
        <textarea
          css={commonCssObj.textarea}
          placeholder="군필 여부, 나이, 성별 등의 기타 조건을 엔터(Enter)로 구분하여 적어주세요 (최대 70자)"
          onFocus={() => {
            clearErrors(`required_etc_arr`);
          }}
          {...register(`required_etc_arr`, {
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
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.optionalInputTitle(true)}>우대사항</p>
        <textarea
          css={commonCssObj.textarea}
          placeholder="엔터(Enter)로 구분하여 기입해 주세요 (최대 70자) Ex) 인근거주자, 차량소지자"
          {...register(`preferred_etc_arr`, {
            onBlur: () => {
              trigger(`preferred_etc_arr`);
            },
          })}
          autoComplete="off"
        />
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
                    ...(jobForm.watch("preferred_certi_arr")?.filter((element) => element !== certi) || []),
                  ]);
                }}
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
        <AddFieldButton text="자격증 추가" onClickHandler={() => null} />
      </div>
    </div>
  );
};
