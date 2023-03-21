import { FunctionComponent, FocusEvent, useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";

import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";
import { CheckBoxWithDesc } from "shared-ui/common/atom/checkbox_desc";

import { DatetimeBox, ErrorMessage } from "../../component";
import { CommonDataPartProps } from "./type";
import { cssObj } from "./style";

export const CommonDataPart: FunctionComponent<CommonDataPartProps> = ({ companyDataArr, jobForm, setSearchWord }) => {
  const [isAlways, setIsAlways] = useState<boolean>(false);
  const {
    watch,
    setError,
    setValue,
    formState: { errors },
  } = jobForm;

  useEffect(() => {
    if (isAlways) {
      setValue("end_time", "9999-12-31T23:59");
    }
    if (!isAlways) {
      jobForm.resetField("end_time");
    }
  }, [isAlways, jobForm, setValue]);

  return (
    <div css={cssObj.wrapper}>
      <strong css={cssObj.title}>공통 공고 내용</strong>

      <ul css={cssObj.container}>
        <li>
          <strong css={cssObj.requiredTitle}>기업 이름</strong>
          {errors.company_id?.message && <ErrorMessage msg={errors.company_id.message} />}
          <div css={cssObj.flexFullBox}>
            <input
              css={cssObj.inputCSS}
              type="text"
              placeholder="기업이름을 작성해주세요"
              onBlur={(onBlurEvent: FocusEvent<HTMLInputElement>) => {
                setSearchWord(onBlurEvent.target.value);
              }}
            />
            <button css={cssObj.buttonCSS} type="button">
              검색
            </button>
          </div>
          <div css={cssObj.companySelectBox}>
            {companyDataArr.map((company) => (
              <SharedRadioButton
                key={company.name}
                id={company.name}
                value={`${company.id}`}
                registerObj={{ ...jobForm.register("company_id", { valueAsNumber: true, required: true }) }}
              >
                <p>{company.name}</p>
              </SharedRadioButton>
            ))}
          </div>
        </li>
        <li>
          <strong css={cssObj.requiredTitle}>공고 제목</strong>
          {errors.title?.message && <ErrorMessage msg={errors.title.message} />}
          <div css={cssObj.flexFullBox}>
            <input
              css={cssObj.inputCSS}
              type="text"
              placeholder="공고제목을 작성해주세요"
              {...jobForm.register("title", {
                required: {
                  value: true,
                  message: "공고 제목을 작성해주세요",
                },
              })}
              onFocus={() => {
                if (!watch("company_id")) {
                  setError("company_id", { type: "required", message: "선택된 기업이 없습니다." });
                }
              }}
            />
          </div>
        </li>
        <li>
          <strong css={cssObj.requiredTitle}>채용 기간 </strong>
          <div css={cssObj.dateBox}>
            <label htmlFor="alwaysEndTime" css={cssObj.checkBoxLabel(isAlways)}>
              <input
                type="checkbox"
                id="alwaysEndTime"
                css={cssObj.checkBoxInput}
                onClick={() => {
                  setIsAlways((isPrev) => !isPrev);
                }}
              />
              <div css={cssObj.checkBox(isAlways)}>
                <FiCheck />
              </div>
              <p css={cssObj.checkboxDesc}>상시공고</p>
            </label>
            <CheckBoxWithDesc registerObj={{ ...jobForm.register("cut") }} desc="채용시 마감" id="cut" />
            <DatetimeBox register={jobForm.register} valueName="start_time" />
            {!isAlways && <DatetimeBox register={jobForm.register} valueName="end_time" />}
          </div>
        </li>
        <li css={cssObj.flexLiCSS}>
          <ul>
            <li>
              <strong css={cssObj.requiredTitle}>채용 절차</strong>
              <div css={cssObj.textareaBox}>
                <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
                <textarea css={cssObj.textarea} {...jobForm.register("process_arr", { required: true })} />
              </div>
            </li>
            <li>
              <strong css={cssObj.requiredTitle}>지원 방법</strong>
              <div css={cssObj.textareaBox}>
                <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
                <textarea css={cssObj.textarea} {...jobForm.register("apply_route_arr", { required: true })} />
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <strong css={cssObj.requiredTitle}>채용 링크</strong>
              <div css={cssObj.flexFullBox}>
                <input
                  type="url"
                  placeholder="https://"
                  css={cssObj.inputCSS}
                  {...jobForm.register("apply_url", { required: true })}
                />
              </div>
            </li>
            <li>
              <strong css={cssObj.noRequiredTitle}>기타 사항</strong>
              <div css={cssObj.textareaBox}>
                <p css={cssObj.textareaWarning}>엔터로 구분해주세요, 필수가 아닙니다.</p>
                <textarea css={cssObj.textarea} {...jobForm.register("etc_arr")} />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
