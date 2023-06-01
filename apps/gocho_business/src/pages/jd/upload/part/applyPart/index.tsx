import { FunctionComponent, useEffect, useState } from "react";
import { FiLink, FiAtSign } from "react-icons/fi";
import { MdOutlineNavigateNext } from "react-icons/md";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { SharedTextLink } from "shared-ui/business/sharedTextLink";
import { SharedBoxLink } from "shared-ui/business/sharedBoxLink";

import { DeleteInputButton, GuideChip, AddFieldButton } from "../../component";
import { focusedArrOnBlurHandler, focusedArrOnFocusHandler } from "../util";
import { ApplyPartProps } from "./type";
import { PROCESS_GUIDE_ARR, APPLY_ROUTE_GUIDE_ARR, APPLY_EXTERNAL_LINK_ARR } from "./constant";
import { commonCssObj } from "../style";
import { cssObj } from "./style";

export const ApplyPart: FunctionComponent<ApplyPartProps> = ({ jobForm, processArr, applyRouteArr, etcArr }) => {
  const [processIsFocusedArr, setProcessIsFocusedArr] = useState<boolean[]>(new Array(8).fill(false));
  const [applyRouteIsFocusedArr, setApplyRouteIsFocusedArr] = useState<boolean[]>([false]);
  const [isAlways, setIsAlways] = useState<boolean>(false);
  const [linkType, setLinkType] = useState<"website" | "email">("website");
  const [randomApplyRouteGuideArr, setRandomApplyRouteGuideArr] = useState<string[]>([]);

  const { watch, setValue, trigger, formState, register, clearErrors } = jobForm;

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

  const externalLinkMaker = (link: string) => {
    if (/^http/.test(link)) return link;
    return `https://${link}`;
  };

  useEffect(() => {
    setRandomApplyRouteGuideArr(APPLY_ROUTE_GUIDE_ARR.sort(() => Math.random() - 0.5).slice(0, 3));
  }, []);

  return (
    <section css={commonCssObj.partContainer}>
      <strong css={commonCssObj.partTitle}>접수방법</strong>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle}>채용기간</p>
        <input
          css={cssObj.input(20)}
          type="datetime-local"
          onFocus={() => {
            clearErrors("start_time");
          }}
          {...register("start_time", {
            required: "시작 일시는 필수 입력 사항입니다",
            onBlur: () => trigger("end_time"),
          })}
        />
        <p css={cssObj.errorMessage}>{formState.errors.start_time && formState.errors.start_time.message}</p>
        {isAlways ? (
          <div css={cssObj.isAlwaysBlock}>상시 모집</div>
        ) : (
          <>
            <input
              css={cssObj.input(20)}
              type="datetime-local"
              onFocus={() => {
                clearErrors("end_time");
              }}
              {...register("end_time", {
                required: "마감 일시는 필수 입력 사항입니다",
                validate: {
                  isFasterThanStart: (value) =>
                    !new Date(watch("start_time")).getTime() ||
                    new Date(watch("start_time")).getTime() < new Date(value).getTime() ||
                    "시작 일시가 마감 일시보다 느릴 수 없습니다.",
                  isFasterThanNow: (value) =>
                    new Date(value).getTime() > new Date().getTime() || "마감 일시가 현재 시각보다 빠를 수 없습니다.",
                },
              })}
            />
            <p css={cssObj.errorMessage}>{formState.errors.end_time && formState.errors.end_time.message}</p>
          </>
        )}
        <div css={cssObj.dateLabelContainer}>
          <label css={cssObj.label} htmlFor="always">
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
          <label css={cssObj.label} htmlFor="cut">
            <input type="checkbox" id="cut" {...register("cut")} disabled={isAlways} />
            <CheckBox isChecked={watch("cut")} />
            채용시 마감
          </label>
        </div>
      </div>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle}>채용 절차</p>
        <div css={cssObj.inputContainerWithGuide}>
          {processArr.fields.map((item, index) => (
            <div key={`processArr${item.id}`} css={cssObj.processBox}>
              <div>
                <label css={cssObj.inputLabel} htmlFor={`processArr${item.id}`}>
                  <input
                    id={`processArr${item.id}`}
                    css={cssObj.erasableInput(11.5)}
                    placeholder={`${index + 1}차 (최대 30자)`}
                    maxLength={30}
                    onFocus={() => {
                      clearErrors(`process_arr.${index}`);
                      focusedArrOnFocusHandler(setProcessIsFocusedArr, index);
                    }}
                    {...register(`process_arr.${index}.value`, {
                      required: "모든 칸이 채워져야 합니다",
                      onBlur: (blurEvent) => {
                        if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                          setValue(`process_arr.${index}.value`, "");
                        }
                        trigger(`process_arr`);
                        focusedArrOnBlurHandler(setProcessIsFocusedArr, index);
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
                  {formState?.errors?.process_arr?.[index] && formState?.errors?.process_arr?.[index]?.value?.message}
                </p>
                <div css={cssObj.guideChipContainer}>
                  {processIsFocusedArr[index] &&
                    PROCESS_GUIDE_ARR[index].map((processGuide) => (
                      <GuideChip
                        key={`${processGuide}${item.id}`}
                        text={processGuide}
                        onClickHandler={() => {
                          setValue(`process_arr.${index}.value`, processGuide);
                        }}
                      />
                    ))}
                </div>
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
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle}>지원 방법/제출 서류</p>
        <div css={cssObj.inputContainerWithGuide}>
          {applyRouteArr.fields.map((item, index) => (
            <div key={`applyRouteArr${item.id}`}>
              <label css={cssObj.inputLabel} htmlFor={`applyRouteArr${item.id}`}>
                <input
                  id={`applyRouteArr${item.id}`}
                  css={cssObj.erasableInput(18)}
                  placeholder="지원 방법/제출 서류 (최대 50자)"
                  maxLength={50}
                  onFocus={() => {
                    clearErrors(`apply_route_arr.${index}`);
                    focusedArrOnFocusHandler(setApplyRouteIsFocusedArr, index);
                  }}
                  {...register(`apply_route_arr.${index}.value`, {
                    required: "모든 칸이 채워져야 합니다",
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue(`apply_route_arr.${index}.value`, "");
                      }
                      trigger(`apply_route_arr`);
                      focusedArrOnBlurHandler(setApplyRouteIsFocusedArr, index);
                    },
                  })}
                  autoComplete="off"
                />
                {index !== 0 && (
                  <DeleteInputButton
                    onClickHandler={() => {
                      applyRouteArr.remove(index);
                      setApplyRouteIsFocusedArr((prev) => prev.filter((stateItem, stateIndex) => stateIndex !== index));
                    }}
                  />
                )}
              </label>
              <p css={cssObj.arrayErrorMessage}>
                {formState?.errors?.apply_route_arr?.[index] &&
                  formState?.errors?.apply_route_arr?.[index]?.value?.message}
              </p>
              <div css={cssObj.guideChipContainer}>
                {applyRouteIsFocusedArr[index] &&
                  randomApplyRouteGuideArr.map((applyRouteGuide) => (
                    <GuideChip
                      key={`${applyRouteGuide}${item.id}`}
                      text={applyRouteGuide}
                      onClickHandler={() => {
                        setValue(`apply_route_arr.${index}.value`, applyRouteGuide);
                        const filteredElement = APPLY_ROUTE_GUIDE_ARR.filter(
                          (element) =>
                            !randomApplyRouteGuideArr.includes(element) &&
                            !jobForm
                              .watch("apply_route_arr")
                              .some((elem) => JSON.stringify({ value: element }) === JSON.stringify(elem))
                        )[0];
                        if (filteredElement) {
                          setRandomApplyRouteGuideArr((prev) => [
                            ...prev.filter((element) => element !== applyRouteGuide),
                            filteredElement,
                          ]);
                        } else {
                          setRandomApplyRouteGuideArr((prev) => [
                            ...prev.filter((element) => element !== applyRouteGuide),
                          ]);
                        }
                      }}
                    />
                  ))}
              </div>
            </div>
          ))}
          <div css={cssObj.addButtonWrapper}>
            {applyRouteArr.fields.length < 15 && (
              <AddFieldButton
                onClickHandler={() => {
                  applyRouteArr.append({ value: "" });
                  setApplyRouteIsFocusedArr((prev) => [...prev, false]);
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle}>접수링크</p>
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
            <p css={cssObj.labelTitle(Boolean(formState.errors.apply_url))}>채용 링크</p>
          </label>
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
            <p css={cssObj.labelTitle(Boolean(formState.errors.apply_url))}>이메일 링크</p>
          </label>
        </div>
        <div>
          {linkType === "website" ? (
            <div>
              <div css={cssObj.applyUrlInputContainer}>
                <label css={cssObj.inputLabel} key="applyUrlWebsite" htmlFor="applyUrlWebsite">
                  <span css={cssObj.inputLogo}>
                    <FiLink />
                  </span>
                  <input
                    css={cssObj.applyUrlInput(47)}
                    placeholder="http"
                    {...register("apply_url", {
                      required: "링크는 필수 입력 사항입니다",
                      validate: () => true,
                      onBlur: (blurEvent) => {
                        if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                          setValue("apply_url", "");
                        }
                      },
                    })}
                  />
                </label>
                <SharedTextLink
                  // TODO: apply_url을 입력할 때 마다 버튼이 계속 리랜더링 될 수 있다?
                  externalUrl={externalLinkMaker(watch("apply_url"))}
                  fontColor="blue"
                  text="링크 미리보기"
                />
              </div>
              <p css={cssObj.errorMessage}>{formState.errors.apply_url && formState.errors.apply_url.message}</p>
              <div css={cssObj.linkButtonContainer}>
                <p>링크 복사하러 가기</p>
                {APPLY_EXTERNAL_LINK_ARR.map((linkObj) => (
                  <SharedBoxLink
                    key={`${linkObj.url}`}
                    colorVariation="gray"
                    text={linkObj.text}
                    externalUrl={linkObj.url}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <label css={cssObj.inputLabel} key="applyUrlWebsite" htmlFor="applyUrlWebsite">
                <span css={cssObj.inputLogo}>
                  <FiAtSign />
                </span>
                <input
                  css={cssObj.applyUrlInput(47)}
                  {...register("apply_url", {
                    required: "링크는 필수 입력 사항입니다",
                    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "이메일 형식이 올바르지 않습니다",
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue("apply_url", "");
                      }
                    },
                  })}
                />
              </label>
              <p css={cssObj.errorMessage}>{formState.errors.apply_url && formState.errors.apply_url.message}</p>
            </div>
          )}
        </div>
      </div>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.optionalInputTitle}>기타 사항</p>
        <div css={cssObj.inputContainer}>
          {etcArr.fields.map((item, index) => (
            <label css={cssObj.inputLabel} key={`etcArr${item.id}`} htmlFor={`etcArr${item.id}`}>
              <input
                id={`etcArr${item.id}`}
                css={cssObj.erasableInput(47)}
                placeholder="기타 사항 (선택, 최대 70자)"
                maxLength={70}
                {...register(`etc_arr.${index}.value`)}
              />
              {index !== 0 && (
                <DeleteInputButton
                  onClickHandler={() => {
                    if (etcArr.fields.length > 1) etcArr.remove(index);
                  }}
                />
              )}
            </label>
          ))}
          <div css={cssObj.addButtonWrapper}>
            {etcArr.fields.length < 10 && (
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
