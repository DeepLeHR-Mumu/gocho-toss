import { FunctionComponent, useState } from "react";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { cssObj } from "./style";
import { BasicInfoPartProps } from "./type";

export const BasicInfoPart: FunctionComponent<BasicInfoPartProps> = ({ jobForm }) => {
  const [isAlways, setIsAlways] = useState<boolean>(false);
  const [linkType, setLinkType] = useState<"website" | "email">("website");

  return (
    <>
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
          <input css={cssObj.inputLine} type="datetime-local" {...jobForm.register("end_time", { required: true })} />
        </div>
        <label css={cssObj.label} htmlFor="always">
          상시공고
          <input
            type="checkbox"
            id="always"
            onClick={() => {
              jobForm.setValue(`end_time`, "9999-12-31T23:59");
              setIsAlways((prev) => !prev);
            }}
          />
          <CheckBox isChecked={isAlways} />
        </label>
        <label css={cssObj.label} htmlFor="cut">
          채용시 마감
          <input type="checkbox" id="cut" {...jobForm.register("cut")} />
          <CheckBox isChecked={jobForm.watch("cut")} />
        </label>
      </div>
      <div css={cssObj.inputContainer}>
        <p>채용 절차</p>
        <input
          css={cssObj.inputLine}
          placeholder="채용 절차"
          {...jobForm.register("process_arr", { required: true })}
        />
      </div>
      <div css={cssObj.inputContainer}>
        <p>지원 방법/제출 서류</p>
        <input
          css={cssObj.inputLine}
          placeholder="지원 방법/제출 서류"
          {...jobForm.register("process_arr", { required: true })}
        />
      </div>
      <div css={cssObj.inputContainer}>
        <div css={cssObj.labelContainer}>
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
        <input
          css={cssObj.inputLine}
          placeholder="기타 사항 (선택)"
          {...jobForm.register("process_arr", { required: true })}
        />
      </div>
    </>
  );
};
