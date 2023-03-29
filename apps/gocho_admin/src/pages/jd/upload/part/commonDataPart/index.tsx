import { FunctionComponent, FocusEvent, useEffect, useState } from "react";

import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";
import { CheckBoxWithDesc } from "shared-ui/common/atom/checkbox_desc";
import { EMAIL_REGEXP, URL_REGEXP } from "shared-constant/src/regExp";

import { useFindCompany } from "@/api";

import { ErrorMessage, AutoEndTimeCheckBox } from "../../component";
import { CommonDataPartProps } from "./type";
import { cssObj } from "./style";

export const CommonDataPart: FunctionComponent<CommonDataPartProps> = ({ jobForm }) => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [isAlways, setIsAlways] = useState<boolean>(false);
  const [linkType, setLinkType] = useState<"email" | "website">("website");

  const {
    watch,
    setError,
    setValue,
    resetField,
    clearErrors,
    formState: { errors },
  } = jobForm;

  const { data: companyDataObj } = useFindCompany({ word: searchWord, order: "recent" });

  const linkButtonClickHandler = (type: typeof linkType) => {
    setLinkType(type);
    setValue(`apply_url`, "");
    clearErrors("apply_url");
  };

  useEffect(() => {
    if (isAlways) {
      setValue("end_time", "9999-12-31T23:59");
    }
    if (!isAlways) {
      resetField("end_time");
    }
  }, [isAlways, resetField, setValue]);

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
            {companyDataObj?.companyDataArr.map((company) => (
              <SharedRadioButton
                key={company.name}
                id={company.name}
                value={`${company.id}`}
                registerObj={{
                  ...jobForm.register("company_id", {
                    valueAsNumber: true,
                    required: "선택된 기업이 없습니다.",
                    onChange: () => {
                      clearErrors("company_id");
                    },
                  }),
                }}
              >
                <p>
                  {company.name.split(searchWord)[0]}
                  <span css={cssObj.point}>{searchWord}</span>
                  {company.name.split(searchWord)[1]}
                </p>
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
                required: "공고 제목을 작성해주세요.",
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
          {errors.start_time && <ErrorMessage msg="공고 시작 일자를 작성해주세요" />}
          {errors.end_time && <ErrorMessage msg="공고 만료 일자를 작성해주세요" />}

          <div css={cssObj.dateBox}>
            <AutoEndTimeCheckBox
              onClickEvent={() => {
                setIsAlways((isPrev) => !isPrev);
              }}
              isChecked={isAlways}
            />
            <CheckBoxWithDesc registerObj={{ ...jobForm.register("cut") }} desc="채용시 마감" id="cut" />
            <input
              css={cssObj.dateInput}
              type="datetime-local"
              {...jobForm.register("start_time", { required: true })}
            />
            {!isAlways && (
              <input
                css={cssObj.dateInput}
                type="datetime-local"
                {...jobForm.register("end_time", { required: true })}
              />
            )}
          </div>
        </li>
        <li css={cssObj.flexLiCSS}>
          <ul>
            <li>
              <strong css={cssObj.requiredTitle}>채용 절차</strong>
              {errors.process_arr?.message && <ErrorMessage msg={errors.process_arr.message} />}
              <div css={cssObj.textareaBox}>
                <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
                <textarea
                  css={cssObj.textarea}
                  {...jobForm.register("process_arr", {
                    required: "채용절차를 작성해주세요.",
                  })}
                />
              </div>
            </li>
            <li>
              <strong css={cssObj.requiredTitle}>지원 방법</strong>
              {errors.apply_route_arr?.message && <ErrorMessage msg={errors.apply_route_arr.message} />}
              <div css={cssObj.textareaBox}>
                <p css={cssObj.textareaWarning}>엔터로 구분해주세요.</p>
                <textarea
                  css={cssObj.textarea}
                  {...jobForm.register("apply_route_arr", {
                    required: "지원방법을 작성해주세요.",
                  })}
                />
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <strong css={cssObj.requiredTitle}>채용 링크</strong>
              <div css={cssObj.linkLabelContainer}>
                <label css={cssObj.label} htmlFor="website">
                  <input
                    defaultChecked={linkType === "website"}
                    type="radio"
                    name="link"
                    id="website"
                    css={cssObj.radio}
                    onClick={() => {
                      linkButtonClickHandler("website");
                    }}
                  />
                  <div css={cssObj.radioBox} />
                  <p css={cssObj.labelTitle}>채용 링크</p>
                </label>
                <p css={cssObj.labelTitle}>또는</p>
                <label css={cssObj.label} htmlFor="email">
                  <input
                    defaultChecked={linkType === "email"}
                    type="radio"
                    name="link"
                    id="email"
                    css={cssObj.radio}
                    onClick={() => {
                      linkButtonClickHandler("email");
                    }}
                  />
                  <div css={cssObj.radioBox} />
                  <p css={cssObj.labelTitle}>이메일 링크</p>
                </label>
              </div>
              {errors.apply_url?.message && <ErrorMessage msg={errors.apply_url.message} />}
              <div css={cssObj.flexFullBox}>
                {linkType === "website" && (
                  <input
                    type="url"
                    placeholder="https://"
                    css={cssObj.inputCSS}
                    {...jobForm.register("apply_url", {
                      pattern: {
                        value: URL_REGEXP,
                        message: "http 또는 https를 포함한 url 형식을 작성해주세요.",
                      },
                      required: "채용링크를 작성해주세요.",
                    })}
                  />
                )}
                {linkType === "email" && (
                  <input
                    type="email"
                    placeholder="@"
                    css={cssObj.inputCSS}
                    {...jobForm.register("apply_url", {
                      pattern: {
                        value: EMAIL_REGEXP,
                        message: "EMAIL 형식에 맞게 작성해주세요.",
                      },
                      required: "이메일 채용링크를 작성해주세요.",
                    })}
                  />
                )}
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
