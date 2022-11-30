import { FunctionComponent } from "react";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { DatetimeBox } from "@pages/jd/upload/component/datetimeBox";
import {
  enterNotice,
  flexBox,
  inputBox,
  inputContainer,
  inputLabel,
  inputTitle,
  searchBox,
  searchCompanyButton,
  sectionTitle,
  selectBox,
  textareaBox,
} from "./style";
import { CommonDataPartProps } from "./type";

export const CommonDataPart: FunctionComponent<CommonDataPartProps> = ({
  jobData,
  companyDataArr,
  jobForm,
  setSearchWord,
}) => {
  return (
    <>
      <h3 css={sectionTitle}>공통 공고 내용</h3>
      <div css={inputContainer}>
        <strong css={inputTitle}>기업 이름 *</strong>
        <input
          css={searchBox}
          type="text"
          value={jobData.companyName}
          onBlur={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <button css={searchCompanyButton} type="button">
          검색
        </button>
        <select css={selectBox} {...jobForm.register("company_id", { valueAsNumber: true })}>
          <option value="">기업 선택 ▼</option>
          {companyDataArr.map((company) => {
            return (
              <option key={company.name} value={company.id}>
                {company.name}
              </option>
            );
          })}
        </select>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>공고 제목 *</strong>
        <input css={inputBox} {...jobForm.register("title", { required: true })} />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>채용 기간 *</strong>
        <div css={flexBox}>
          <DatetimeBox register={jobForm.register} valueName="start_time" />
          <DatetimeBox register={jobForm.register} valueName="end_time" />
        </div>
        <button
          css={searchCompanyButton}
          type="button"
          onClick={() => {
            jobForm.setValue(`end_time`, "9999-12-31T23:59");
          }}
        >
          상시공고
        </button>
        <label css={inputLabel} htmlFor="cut">
          <input type="checkbox" id="cut" {...jobForm.register("cut")} />
          <CheckBox isChecked={jobForm.watch("cut")} />
          채용시 마감
        </label>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>채용 절차 *</strong>
        <textarea css={textareaBox} {...jobForm.register("process_arr", { required: true })} />
        <p css={enterNotice}>엔터로 구분해주세요.</p>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>지원 방법 *</strong>
        <textarea css={textareaBox} {...jobForm.register("apply_route_arr", { required: true })} />
        <p css={enterNotice}>엔터로 구분해주세요.</p>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>채용 링크 *</strong>
        <input type="url" css={inputBox} {...jobForm.register("apply_url", { required: true })} />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>기타 사항</strong>
        <textarea css={textareaBox} {...jobForm.register("etc_arr")} />
        <p css={enterNotice}>엔터로 구분해주세요.</p>
      </div>
    </>
  );
};
