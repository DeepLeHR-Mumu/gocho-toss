import { FunctionComponent, useState } from "react";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { FiMinus, FiLink, FiAtSign, FiExternalLink } from "react-icons/fi";
import { MdOutlineNavigateNext } from "react-icons/md";
import { cssObj } from "./style";
import { BasicInfoPartProps } from "./type";

export const BasicInfoPart: FunctionComponent<BasicInfoPartProps> = ({
  jobForm,
  processArr,
  applyRouteArr,
  etcArr,
}) => {
  const [isAlways, setIsAlways] = useState<boolean>(false);
  const [linkType, setLinkType] = useState<"website" | "email">("website");

  const alwaysButtonClickHandler = () => {
    if (isAlways) {
      jobForm.setValue(`end_time`, "");
    } else {
      jobForm.setValue(`end_time`, "9999-12-31T23:59");
    }

    setIsAlways((prev) => !prev);
  };

  const linkButtonClickHandler = (type: typeof linkType) => {
    setLinkType(type);
    jobForm.setValue(`apply_url`, "");
  };

  return (
    <div css={cssObj.partContainer}>
      <h2 css={cssObj.title}>접수 정보</h2>
      <p>공고 접수와 관련된 공통 정보들 입니다</p>
      <div css={cssObj.container}>
        <p>공고 제목</p>
        <input css={cssObj.input(47)} placeholder="공고 제목" {...jobForm.register("title", { required: true })} />
      </div>
      <div css={cssObj.dateInputContainer}>
        <div>
          <p>채용시작 일시</p>
          <input css={cssObj.input(20)} type="datetime-local" {...jobForm.register("start_time", { required: true })} />
        </div>
        <div>
          <p>채용마감 일시</p>
          {isAlways ? (
            <div css={cssObj.isAlwaysBlock}>상시 모집</div>
          ) : (
            <input css={cssObj.input(20)} type="datetime-local" {...jobForm.register("end_time", { required: true })} />
          )}
        </div>
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
            <input type="checkbox" id="cut" {...jobForm.register("cut")} />
            <CheckBox isChecked={jobForm.watch("cut") || isAlways} />
            채용시 마감
          </label>
        </div>
      </div>
      <div css={cssObj.container}>
        <p>채용 절차</p>
        <div css={cssObj.inputContainer}>
          {processArr.fields.map((item, index) => (
            <>
              <label css={cssObj.inputLabel(12)} key={`processArr${item.id}`} htmlFor={`processArr${item.id}`}>
                <input
                  id={`processArr${item.id}`}
                  css={cssObj.erasableInput}
                  placeholder={`${index + 1}차`}
                  {...jobForm.register(`process_arr.${index}.value`, { required: true })}
                />
                <button
                  type="button"
                  css={cssObj.deleteInputButton}
                  onClick={() => {
                    processArr.remove(index);
                  }}
                >
                  <FiMinus />
                </button>
              </label>
              {index + 1 !== processArr.fields.length && (
                <div css={cssObj.icon}>
                  <MdOutlineNavigateNext />
                </div>
              )}
            </>
          ))}
          <button
            type="button"
            onClick={() => {
              processArr.append({ value: "" });
            }}
          >
            + 입력칸 추가
          </button>
        </div>
      </div>
      <div css={cssObj.container}>
        <p>지원 방법/제출 서류</p>
        <div css={cssObj.inputContainer}>
          {applyRouteArr.fields.map((item, index) => (
            <label css={cssObj.inputLabel(18)} key={`applyRouteArr${item.id}`} htmlFor={`applyRouteArr${item.id}`}>
              <input
                id={`applyRouteArr${item.id}`}
                css={cssObj.erasableInput}
                placeholder="지원 방법/제출 서류"
                {...jobForm.register(`apply_route_arr.${index}.value`, { required: true })}
              />
              <button
                type="button"
                css={cssObj.deleteInputButton}
                onClick={() => {
                  applyRouteArr.remove(index);
                }}
              >
                <FiMinus />
              </button>
            </label>
          ))}
          <button
            type="button"
            onClick={() => {
              applyRouteArr.append({ value: "" });
            }}
          >
            + 입력칸 추가
          </button>
        </div>
      </div>
      <div css={cssObj.container}>
        <div css={cssObj.linkLabelContainer}>
          <label css={cssObj.label} htmlFor="website">
            <input
              checked={linkType === "website"}
              type="radio"
              name="link"
              id="website"
              css={cssObj.radio}
              onClick={() => {
                linkButtonClickHandler("website");
              }}
            />
            <div css={cssObj.radioBox} />
            채용 링크
          </label>
          <p>또는</p>
          <label css={cssObj.label} htmlFor="email">
            <input
              checked={linkType === "email"}
              type="radio"
              name="link"
              id="email"
              css={cssObj.radio}
              onClick={() => {
                linkButtonClickHandler("email");
              }}
            />
            <div css={cssObj.radioBox} />
            이메일 링크
          </label>
        </div>
        <div>
          {linkType === "website" ? (
            <div>
              <div css={cssObj.applyUrlInputContainer}>
                <label css={cssObj.inputLabel(47)} key="applyUrlWebsite" htmlFor="applyUrlWebsite">
                  <FiLink />
                  <input
                    css={cssObj.applyUrlInput}
                    placeholder="http"
                    {...jobForm.register("apply_url", { required: true })}
                  />
                </label>
                <a href={`${jobForm.watch("apply_url")}`} target="_blank" rel="noreferrer noopener">
                  링크 미리보기 <FiExternalLink />
                </a>
              </div>
              <div css={cssObj.linkButtonContainer}>
                <p>링크 복사하러 가기</p>
                <a
                  css={cssObj.outerLinkButton}
                  href="https://www.jobkorea.co.kr/Corp/Index"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  잡코리아
                  <FiExternalLink />
                </a>
                <a
                  css={cssObj.outerLinkButton}
                  href="https://www.saramin.co.kr/zf_user/auth?ut=c"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  사람인
                  <FiExternalLink />
                </a>
                <a
                  css={cssObj.outerLinkButton}
                  href="https://www.work.go.kr/member/bodyLogin.do?redirectEncodeYn=Y&redirectUrl=L2NvTWVtYmVyU3J2L3dhbnRlZEluZm9BZG1pbi93YW50ZWRBZG1pbi5kbz9wYWdlSW5kZXg9MQ=="
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  워크넷
                  <FiExternalLink />
                </a>
              </div>
            </div>
          ) : (
            <label css={cssObj.inputLabel(47)} key="applyUrlWebsite" htmlFor="applyUrlWebsite">
              <FiAtSign />
              <input css={cssObj.applyUrlInput} {...jobForm.register("apply_url", { required: true })} />
            </label>
          )}
        </div>
      </div>
      <div css={cssObj.container}>
        <p>기타 사항 (선택)</p>
        <div css={cssObj.inputContainer}>
          {etcArr.fields.map((item, index) => (
            <label css={cssObj.inputLabel(47)} key={`etcArr${item.id}`} htmlFor={`etcArr${item.id}`}>
              <input
                id={`etcArr${item.id}`}
                css={cssObj.erasableInput}
                placeholder="기타 사항 (선택)"
                {...jobForm.register(`etc_arr.${index}.value`, { required: true })}
              />
              <button
                type="button"
                css={cssObj.deleteInputButton}
                onClick={() => {
                  etcArr.remove(index);
                }}
              >
                <FiMinus />
              </button>
            </label>
          ))}
          <button
            type="button"
            onClick={() => {
              etcArr.append({ value: "" });
            }}
          >
            + 입력칸 추가
          </button>
        </div>
      </div>
    </div>
  );
};
