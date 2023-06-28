import { FunctionComponent, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineNavigateNext } from "react-icons/md";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { commonCssObj } from "@/styles";

import { AddFieldButton, DeleteInputButton } from "../../component";
import { ApplyPartProps } from "./type";
import { APPLY_EXTERNAL_LINK_ARR } from "./constant";
import { cssObj } from "./style";

export const ApplyPart: FunctionComponent<ApplyPartProps> = ({ jobForm, processArr, applyRouteArr }) => {
  const [isAlways, setIsAlways] = useState<boolean>(false);
  const [linkType, setLinkType] = useState<"website" | "email">("website");

  const {
    watch,
    setValue,
    trigger,
    formState: { errors },
    register,
    clearErrors,
  } = jobForm;

  const alwaysButtonClickHandler = () => {
    setValue(`end_time`, isAlways ? "" : "9999-12-31T14:59:00");
    setValue(`cut`, !isAlways);
    setIsAlways((prev) => !prev);
  };

  const linkButtonClickHandler = (type: typeof linkType) => {
    setLinkType(type);
    setValue(`apply_url`, "");
    clearErrors("apply_url");
  };

  return (
    <section css={commonCssObj.partContainer}>
      <strong css={commonCssObj.partTitle}>접수방법</strong>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle(false)}>채용기간</p>
        <div css={cssObj.dateInputContainer}>
          <div css={cssObj.dateWrapper}>
            <input
              css={commonCssObj.input(17.5, Boolean(errors.start_time))}
              type="datetime-local"
              onFocus={() => {
                clearErrors("start_time");
              }}
              {...register("start_time", {
                required: "* 공고 시작 날짜를 선택해 주세요",
                onBlur: () => trigger("end_time"),
              })}
            />
            <div css={cssObj.errorMessageWrapper}>
              <p css={commonCssObj.errorMessage}>{errors.start_time && errors.start_time.message}</p>
            </div>
          </div>
          <p>~</p>
          <div css={cssObj.dateWrapper}>
            {isAlways ? (
              <div css={cssObj.isAlwaysBlock}>상시 모집</div>
            ) : (
              <>
                <input
                  css={commonCssObj.input(17.5, Boolean(errors.end_time))}
                  type="datetime-local"
                  onFocus={() => {
                    clearErrors("end_time");
                  }}
                  {...register("end_time", {
                    required: "* 공고 마감 날짜를 선택해 주세요",
                    validate: {
                      isFasterThanStart: (value) =>
                        !new Date(watch("start_time")).getTime() ||
                        new Date(watch("start_time")).getTime() < new Date(value).getTime() ||
                        "시작 일시가 마감 일시보다 느릴 수 없습니다.",
                      isFasterThanNow: (value) =>
                        new Date(value).getTime() > new Date().getTime() ||
                        "마감 일시가 현재 시각보다 빠를 수 없습니다.",
                    },
                  })}
                />
                <div css={cssObj.errorMessageWrapper}>
                  <p css={commonCssObj.errorMessage}>{errors.end_time && errors.end_time.message}</p>
                </div>
              </>
            )}
          </div>
          <label css={commonCssObj.label} htmlFor="always">
            <input
              type="checkbox"
              id="always"
              onClick={() => {
                alwaysButtonClickHandler();
              }}
            />
            <CheckBox isChecked={isAlways} />
            상시공고
          </label>
          <label css={commonCssObj.label} htmlFor="cut">
            <input type="checkbox" id="cut" {...register("cut")} disabled={isAlways} />
            <CheckBox isChecked={watch("cut")} />
            채용시 마감
          </label>
        </div>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.inputTitle(true)}>채용 절차</p>
        <div css={cssObj.arrayInputContainer}>
          {processArr.fields.map((item, index) => (
            <div key={`processArr${item.id}`} css={cssObj.processBox}>
              <div>
                <label css={cssObj.inputLabel} htmlFor={`processArr${item.id}`}>
                  <input
                    id={`processArr${item.id}`}
                    css={commonCssObj.input(11.5, Boolean(errors.process_arr))}
                    placeholder={`${index + 1}차 (최대 30자)`}
                    maxLength={30}
                    onFocus={() => {
                      clearErrors(`process_arr.${index}`);
                    }}
                    {...register(`process_arr.${index}.value`, {
                      required: "* 모든 칸이 채워져야 합니다",
                      onBlur: (blurEvent) => {
                        if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                          setValue(`process_arr.${index}.value`, "");
                        }
                        trigger(`process_arr`);
                      },
                    })}
                    autoComplete="off"
                  />
                  {index !== 0 && (
                    <DeleteInputButton
                      onClickHandler={() => {
                        if (processArr.fields.length > 1) processArr.remove(index);
                      }}
                    />
                  )}
                </label>
                <p css={cssObj.arrayErrorMessage}>
                  {errors.process_arr?.[index] && errors.process_arr?.[index]?.value?.message}
                </p>
              </div>
              {index + 1 !== processArr.fields.length && (
                <div css={cssObj.icon}>
                  <MdOutlineNavigateNext />
                </div>
              )}
            </div>
          ))}
          <div css={cssObj.addButtonWrapper}>
            {processArr.fields.length < 8 && (
              <AddFieldButton
                onClickHandler={() => {
                  processArr.append({ value: "" });
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.inputTitle(true)}>제출 서류</p>
        <div css={cssObj.arrayInputContainer}>
          {applyRouteArr.fields.map((item, index) => (
            <div key={`applyRouteArr${item.id}`}>
              <label css={cssObj.inputLabel} htmlFor={`applyRouteArr${item.id}`}>
                <input
                  id={`applyRouteArr${item.id}`}
                  css={commonCssObj.input(15, Boolean(errors.apply_route_arr))}
                  placeholder="제출 서류 (최대 50자)"
                  maxLength={50}
                  onFocus={() => {
                    clearErrors(`apply_route_arr.${index}`);
                  }}
                  {...register(`apply_route_arr.${index}.value`, {
                    required: "* 모든 칸이 채워져야 합니다",
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue(`apply_route_arr.${index}.value`, "");
                      }
                      trigger(`apply_route_arr`);
                    },
                  })}
                  autoComplete="off"
                />
                {index !== 0 && (
                  <DeleteInputButton
                    onClickHandler={() => {
                      applyRouteArr.remove(index);
                    }}
                  />
                )}
              </label>
              <p css={cssObj.arrayErrorMessage}>
                {errors.apply_route_arr?.[index] && errors.apply_route_arr?.[index]?.value?.message}
              </p>
            </div>
          ))}
          <div css={cssObj.addButtonWrapper}>
            {applyRouteArr.fields.length < 15 && (
              <AddFieldButton
                onClickHandler={() => {
                  applyRouteArr.append({ value: "" });
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.inputTitle(false)}>접수링크</p>
        <div>
          <div css={cssObj.linkLabelContainer}>
            <label css={commonCssObj.label} htmlFor="website">
              <input
                defaultChecked={linkType === "website"}
                type="radio"
                name="link"
                id="website"
                css={commonCssObj.radio}
                onClick={() => {
                  linkButtonClickHandler("website");
                }}
              />
              <div css={commonCssObj.radioBox} />
              <p>채용 링크</p>
            </label>
            <label css={commonCssObj.label} htmlFor="email">
              <input
                defaultChecked={linkType === "email"}
                type="radio"
                name="link"
                id="email"
                css={commonCssObj.radio}
                onClick={() => {
                  linkButtonClickHandler("email");
                }}
              />
              <div css={commonCssObj.radioBox} />
              <p>이메일</p>
            </label>
            <p css={commonCssObj.errorMessage}>{errors.apply_url && errors.apply_url.message}</p>
          </div>
          <div>
            {linkType === "website" ? (
              <div>
                <label css={cssObj.inputLabel} key="applyUrlWebsite" htmlFor="applyUrlWebsite">
                  <input
                    css={commonCssObj.input(47, Boolean(errors.apply_url))}
                    placeholder="https://"
                    {...register("apply_url", {
                      required: "* 접수 링크는 필수 입력 사항입니다",
                      validate: () => true,
                      onBlur: (blurEvent) => {
                        if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                          setValue("apply_url", "");
                        }
                      },
                    })}
                  />
                </label>
                <div css={cssObj.linkButtonContainer}>
                  {APPLY_EXTERNAL_LINK_ARR.map((linkObj) => (
                    <a
                      key={linkObj.url}
                      href={linkObj.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      css={cssObj.externalLinkButton}
                    >
                      {linkObj.text}
                      <FiExternalLink />
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <label css={cssObj.inputLabel} key="applyUrlWebsite" htmlFor="applyUrlWebsite">
                  <input
                    css={commonCssObj.input(47, Boolean(errors.apply_url))}
                    placeholder="@"
                    {...register("apply_url", {
                      required: "* 접수 링크는 필수 입력 사항입니다",
                      validate: (value) =>
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "이메일 형식이 올바르지 않습니다",
                      onBlur: (blurEvent) => {
                        if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                          setValue("apply_url", "");
                        }
                      },
                    })}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.optionalInputTitle(true)}>기타 사항</p>
        <textarea
          css={commonCssObj.textarea}
          placeholder="기타 사항을 엔터(Enter)로 구분하여 기재해 주세요 (항목당 최대 70자)"
          maxLength={70}
          {...register("etc_arr")}
        />
      </div>
    </section>
  );
};
