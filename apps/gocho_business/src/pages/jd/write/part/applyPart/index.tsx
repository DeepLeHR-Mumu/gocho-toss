import { FunctionComponent, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

import { CheckBox } from "shared-ui/common/checkbox";
import { commonCssObj } from "@/styles";

import { jdMailClickEvent } from "@/ga";
import { AddFieldButton, DeleteInputButton } from "../../component";
import { setFieldErrorIfEmpty } from "../../../upload/util";
import { ApplyPartProps } from "./type";
import { cssObj } from "./style";

export const ApplyPart: FunctionComponent<ApplyPartProps> = ({ jdForm, processArr, applyDocumentArr, etcArr }) => {
  const [isAlways, setIsAlways] = useState<boolean>(false);
  const [linkType, setLinkType] = useState<"고초대졸닷컴으로 지원받기" | "외부 링크" | "이메일 지원">(
    "고초대졸닷컴으로 지원받기"
  );

  const {
    watch,
    setValue,
    trigger,
    formState: { errors },
    register,
    clearErrors,
  } = jdForm;

  const alwaysButtonClickHandler = () => {
    setValue(`apply.end_time`, isAlways ? "" : "9999-12-31T14:59:00");
    setValue(`apply.cut`, !isAlways);
    setIsAlways((prev) => !prev);
  };

  const linkButtonClickHandler = (type: typeof linkType) => {
    const newRoute: { is_direct: boolean; email: string | null; link: string | null } = {
      is_direct: type === "고초대졸닷컴으로 지원받기",
      email: null,
      link: null,
    };

    setLinkType(type);
    setValue(`apply.route`, newRoute);
    clearErrors("apply.route");
  };

  return (
    <section css={commonCssObj.partContainer}>
      <strong css={commonCssObj.partTitle}>접수방법</strong>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle(false)}>채용기간</p>
        <div css={cssObj.dateInputContainer}>
          <div css={cssObj.dateWrapper}>
            <input
              css={commonCssObj.input(17.5, Boolean(errors.apply?.start_time))}
              type="datetime-local"
              onFocus={() => {
                clearErrors("apply.start_time");
              }}
              {...register("apply.start_time", {
                required: "* 공고 시작 날짜를 선택해 주세요",
                onBlur: () => trigger("apply.end_time"),
              })}
            />
            <div css={cssObj.errorMessageWrapper}>
              <p css={commonCssObj.errorMessage}>{errors.apply?.start_time && errors.apply.start_time.message}</p>
            </div>
          </div>
          <p>~</p>
          <div css={cssObj.dateWrapper}>
            {isAlways ? (
              <div css={cssObj.isAlwaysBlock}>상시 모집</div>
            ) : (
              <>
                <input
                  css={commonCssObj.input(17.5, Boolean(errors.apply?.end_time))}
                  type="datetime-local"
                  onFocus={() => {
                    clearErrors("apply.end_time");
                  }}
                  {...register("apply.end_time", {
                    required: "* 공고 마감 날짜를 선택해 주세요",
                    validate: {
                      isFasterThanStart: (value) =>
                        !new Date(watch("apply.start_time")).getTime() ||
                        new Date(watch("apply.start_time")).getTime() < new Date(value).getTime() ||
                        "시작 일시가 마감 일시보다 느릴 수 없습니다.",
                      isFasterThanNow: (value) =>
                        new Date(value).getTime() > new Date().getTime() ||
                        "마감 일시가 현재 시각보다 빠를 수 없습니다.",
                    },
                  })}
                />
                <div css={cssObj.errorMessageWrapper}>
                  <p css={commonCssObj.errorMessage}>{errors.apply?.end_time && errors.apply.end_time.message}</p>
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
            <input type="checkbox" id="cut" {...register("apply.cut")} disabled={isAlways} />
            <CheckBox isChecked={watch("apply.cut")} />
            채용시 마감
          </label>
        </div>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.inputTitle(true)}>채용 절차</p>
        <div>
          <div css={commonCssObj.arrayInputContainer}>
            {processArr.fields.map((item, index) => (
              <div key={`processArr${item.id}`} css={cssObj.processBox}>
                <div>
                  <label css={commonCssObj.inputLabel} htmlFor={`processArr${item.id}`}>
                    <input
                      id={`processArr${item.id}`}
                      css={commonCssObj.input(11.5, Boolean(errors.apply?.process))}
                      placeholder={`${index + 1}차 (최대 10자)`}
                      maxLength={10}
                      {...register(`apply.process.${index}.value`, {
                        onBlur: (blurEvent) => {
                          if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                            setValue(`apply.process.${index}.value`, "");
                          }
                          setFieldErrorIfEmpty(
                            watch,
                            jdForm,
                            "apply.process",
                            "* 채용절차는 최소 1개 이상 기재해 주세요"
                          );
                        },
                        maxLength: { value: 10, message: "최대 길이는 10자입니다." },
                      })}
                    />
                    {index !== 0 && (
                      <DeleteInputButton
                        onClickHandler={() => {
                          if (processArr.fields.length > 1) processArr.remove(index);
                          setFieldErrorIfEmpty(
                            watch,
                            jdForm,
                            "apply.process",
                            "* 채용절차는 최소 1개 이상 기재해 주세요"
                          );
                        }}
                      />
                    )}
                  </label>
                  <p css={commonCssObj.errorMessage}>
                    {errors.apply?.process?.[index] && errors.apply.process?.[index]?.value?.message}
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
                    setFieldErrorIfEmpty(watch, jdForm, "apply.process", "* 채용절차는 최소 1개 이상 기재해 주세요");
                  }}
                />
              )}
            </div>
          </div>
          <div css={cssObj.errorMessageWrapper}>
            <p css={commonCssObj.errorMessage}>{errors.apply?.process?.message}</p>
          </div>
        </div>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.inputTitle(false)}>지원 방법</p>
        <div>
          <div css={cssObj.linkLabelContainer}>
            <label css={commonCssObj.label} htmlFor="gocho">
              <input
                checked={linkType === "고초대졸닷컴으로 지원받기"}
                type="radio"
                // name="link"
                id="gocho"
                css={commonCssObj.radio}
                // {...register(`apply.route.${index}.type`)}
                onClick={() => {
                  linkButtonClickHandler("고초대졸닷컴으로 지원받기");
                }}
              />
              <div css={commonCssObj.radioBox} />
              <p>고초대졸닷컴으로 지원받기</p>
            </label>
            <label css={commonCssObj.label} htmlFor="email">
              <input
                checked={linkType === "이메일 지원"}
                type="radio"
                // name="link"
                id="email"
                css={commonCssObj.radio}
                // {...register(`apply.route.${index}.type`)}
                onClick={() => {
                  linkButtonClickHandler("이메일 지원");
                }}
              />
              <div css={commonCssObj.radioBox} />
              <p>이메일</p>
            </label>
            <label css={commonCssObj.label} htmlFor="website">
              <input
                checked={linkType === "외부 링크"}
                type="radio"
                // name="link"
                id="website"
                css={commonCssObj.radio}
                // {...register(`apply.route.${index}.type`)}
                onClick={() => {
                  linkButtonClickHandler("외부 링크");
                }}
              />
              <div css={commonCssObj.radioBox} />
              <p>외부링크</p>
            </label>
            {errors.apply?.route?.link && <p css={commonCssObj.errorMessage}>{errors.apply.route.link.message}</p>}
            {errors.apply?.route?.email && <p css={commonCssObj.errorMessage}>{errors.apply.route.email.message}</p>}
          </div>
          <div>
            {linkType === "외부 링크" && (
              <div>
                <label css={commonCssObj.inputLabel} key="applyUrlWebsite" htmlFor="applyUrlWebsite">
                  <input
                    css={commonCssObj.input(47, Boolean(errors.apply?.route?.link))}
                    onClick={() => jdMailClickEvent()}
                    placeholder="https://"
                    maxLength={20}
                    {...register(`apply.route.link`, {
                      required: "* 채용 사이트 링크 또는 이메일을 기입해 주세요",
                      validate: () => true,
                      onBlur: (blurEvent) => {
                        if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                          setValue(`apply.route.link`, "");
                        }
                      },
                      maxLength: { value: 20, message: "최대 길이는 20자입니다." },
                    })}
                  />
                </label>
              </div>
            )}
            {linkType === "이메일 지원" && (
              <div>
                <label css={commonCssObj.inputLabel} key="applyUrlWebsite" htmlFor="applyUrlWebsite">
                  <input
                    css={commonCssObj.input(47, Boolean(errors.apply?.route?.email))}
                    onClick={() => jdMailClickEvent()}
                    placeholder="gocho@gocho.com"
                    maxLength={20}
                    {...register(`apply.route.email`, {
                      required: "* 채용 사이트 링크 또는 이메일을 기입해 주세요",
                      validate: (value) =>
                        (value ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : false) || "이메일 형식이 올바르지 않습니다",
                      onBlur: (blurEvent) => {
                        if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                          setValue(`apply.route.email`, "");
                        }
                      },
                      maxLength: { value: 20, message: "최대 길이는 20자입니다." },
                    })}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.optionalInputTitle(true)}>제출서류</p>
        <div css={commonCssObj.arrayInputContainer}>
          {applyDocumentArr.fields.map((item, index) => (
            <div key={`applyDocumentArr${item.id}`}>
              <label css={commonCssObj.inputLabel} htmlFor={`applyDocumentArr${item.id}`}>
                <input
                  id={`applyDocumentArr${item.id}`}
                  css={commonCssObj.input(15, Boolean(errors.apply?.document))}
                  placeholder="예) 이력서 (최대 20자)"
                  maxLength={20}
                  {...register(`apply.document.${index}.value`, {
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue(`apply.document.${index}.value`, "");
                      }
                    },
                    maxLength: { value: 20, message: "최대 길이는 20자입니다." },
                  })}
                />
                {index !== 0 && (
                  <DeleteInputButton
                    onClickHandler={() => {
                      applyDocumentArr.remove(index);
                    }}
                  />
                )}
              </label>
              <p css={commonCssObj.errorMessage}>
                {errors.apply?.document?.[index] && errors.apply?.document?.[index]?.value?.message}
              </p>
            </div>
          ))}
          <div css={commonCssObj.addButtonWrapper}>
            {applyDocumentArr.fields.length < 15 && (
              <AddFieldButton
                onClickHandler={() => {
                  applyDocumentArr.append({ value: "" });
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.optionalInputTitle(true)}>기타 사항</p>
        <div css={commonCssObj.arrayInputContainer}>
          {etcArr.fields.map((item, index) => (
            <div key={`etcArr${item.id}`}>
              <label css={commonCssObj.inputLabel} htmlFor={`etcArr${item.id}`}>
                <input
                  id={`etcArr${item.id}`}
                  css={commonCssObj.input(55.5, Boolean(errors.apply?.etc))}
                  placeholder="기타 사항이 있는 경우 기재해 주세요 (최대 30자)"
                  maxLength={30}
                  {...register(`apply.etc.${index}.value`, {
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue(`apply.etc.${index}.value`, "");
                      }
                    },
                    maxLength: { value: 30, message: "최대 길이는 30자입니다." },
                  })}
                />
                {index !== 0 && (
                  <DeleteInputButton
                    onClickHandler={() => {
                      etcArr.remove(index);
                    }}
                  />
                )}
              </label>
              <p css={commonCssObj.errorMessage}>
                {errors.apply?.etc?.[index] && errors.apply.etc[index]?.value?.message}
              </p>
            </div>
          ))}
          <div css={commonCssObj.addButtonWrapper}>
            {etcArr.fields.length < 15 && (
              <AddFieldButton
                onClickHandler={() => {
                  etcArr.append({ value: "" });
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
