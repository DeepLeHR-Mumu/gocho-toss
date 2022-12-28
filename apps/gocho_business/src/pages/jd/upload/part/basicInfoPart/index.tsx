import { FunctionComponent, useState } from "react";

import { CheckBox } from "shared-ui/common/atom/checkbox";
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
      jobForm.reset({ end_time: "" });
    } else {
      jobForm.setValue(`end_time`, "9999-12-31T23:59");
    }

    setIsAlways((prev) => !prev);
  };

  return (
    <div css={cssObj.partContainer}>
      <h2 css={cssObj.title}>접수 정보</h2>
      <p>공고 접수와 관련된 공통 정보들 입니다</p>
      <div css={cssObj.inputContainer}>
        <p>공고 제목</p>
        <input css={cssObj.inputLine} placeholder="공고 제목" {...jobForm.register("title", { required: true })} />
      </div>
      <div css={cssObj.dateInputContainer}>
        <div>
          <p>채용시작 일시</p>
          <input css={cssObj.inputLine} type="datetime-local" {...jobForm.register("start_time", { required: true })} />
        </div>
        <div>
          <p>채용마감 일시</p>
          {isAlways ? (
            <div css={cssObj.isAlwaysBlock}>상시 모집</div>
          ) : (
            <input css={cssObj.inputLine} type="datetime-local" {...jobForm.register("end_time", { required: true })} />
          )}
        </div>
        <div css={cssObj.dateLabelContainer}>
          <label css={cssObj.label} htmlFor="always">
            상시공고
            <input
              type="checkbox"
              id="always"
              onClick={() => {
                alwaysButtonClickHandler();
              }}
            />
            <CheckBox isChecked={isAlways} />
          </label>
          <label css={cssObj.label} htmlFor="cut">
            채용시 마감
            <input type="checkbox" id="cut" {...jobForm.register("cut")} />
            <CheckBox isChecked={jobForm.watch("cut") || isAlways} />
          </label>
        </div>
      </div>
      <div css={cssObj.inputContainer}>
        <p>채용 절차</p>
        <div css={cssObj.processArrContainer}>
          {processArr.fields.map((item, index) => (
            <input
              key={`processArr${item.id}`}
              css={cssObj.smallInputLine}
              placeholder="채용 절차"
              {...jobForm.register(`process_arr.${index}.value`, { required: true })}
            />
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
      <div css={cssObj.inputContainer}>
        <p>지원 방법/제출 서류</p>
        <div css={cssObj.applyRouteArrContainer}>
          {applyRouteArr.fields.map((item, index) => (
            <input
              key={`applyRouteArr${item.id}`}
              css={cssObj.smallInputLine}
              placeholder="지원 방법/제출 서류"
              {...jobForm.register(`apply_route_arr.${index}.value`, { required: true })}
            />
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
      <div css={cssObj.inputContainer}>
        <div css={cssObj.linkLabelContainer}>
          <label css={cssObj.label} htmlFor="website">
            <CheckBox isChecked={linkType === "website"} />
            채용 링크
            <input
              type="radio"
              id="website"
              onClick={() => {
                setLinkType("website");
              }}
            />
          </label>
          <p>또는</p>
          <label css={cssObj.label} htmlFor="email">
            <CheckBox isChecked={linkType === "email"} />
            이메일 링크
            <input
              type="radio"
              id="email"
              onClick={() => {
                setLinkType("email");
              }}
            />
          </label>
        </div>
        <div>
          <input css={cssObj.inputLine} placeholder="https://" {...jobForm.register("apply_url", { required: true })} />
        </div>
      </div>
      <div css={cssObj.inputContainer}>
        <p>기타 사항 (선택)</p>
        {etcArr.fields.map((item, index) => (
          <input
            key={`etcArr${item.id}`}
            css={cssObj.inputLine}
            placeholder="기타 사항 (선택)"
            {...jobForm.register(`etc_arr.${index}.value`, { required: true })}
          />
        ))}
        <button
          type="button"
          onClick={() => {
            etcArr.append({ value: "" });
          }}
        >
          + 입력칸 추가
        </button>
        <input />
      </div>
    </div>
  );
};
