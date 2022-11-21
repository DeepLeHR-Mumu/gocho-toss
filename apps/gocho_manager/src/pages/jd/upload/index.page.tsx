import { useState } from "react";
import type { NextPage } from "next";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { useFindCompany } from "@api/company/useFindCompany";
import { useAddJob } from "@api/job/useAddJob";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { PositionBox } from "./component/positionBox";
import { DatetimeBox } from "./component/datetimeBox";
import { JobFormValues, JobSubmitValues } from "./type";
import {
  formContainer,
  sectionTitle,
  inputContainer,
  inputTitle,
  searchBox,
  searchCompanyButton,
  selectBox,
  inputBox,
  textareaBox,
  enterNotice,
  flexBox,
  inputLabel,
  addPositionButton,
  submitButton,
  checkMsgBox,
} from "./style";
import { blankPosition } from "./constant";

const JdUpload: NextPage = () => {
  const [prevSearchWord, setPrevSearchWord] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");

  const [checkMsg, setCheckMsg] = useState<string>();

  const { data: companyDataArr, isLoading, isError, error } = useFindCompany({ word: searchWord, order: "recent" });
  const { mutate } = useAddJob();

  const { register, control, handleSubmit, watch, setValue } = useForm<JobFormValues>({
    defaultValues: {
      position_arr: [blankPosition],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "position_arr",
  });

  if (!companyDataArr || isLoading) {
    return <LoadingScreen />;
  }

  if (isError && error) {
    return <ErrorScreen />;
  }

  const jobSubmit: SubmitHandler<JobFormValues> = (jobObj) => {
    const newJobObj: JobSubmitValues = {
      ...jobObj,
      process_arr: jobObj.process_arr?.split("\n"),
      apply_route_arr: jobObj.apply_route_arr?.split("\n"),
      etc_arr: jobObj.etc_arr?.split("\n"),
      position_arr: jobObj.position_arr.map((position) => {
        return {
          ...position,
          required_etc_arr: position.required_etc_arr?.split("\n"),
          task_detail_arr: position.task_detail_arr?.split("\n"),
          pay_arr: position.pay_arr?.split("\n"),
          preferred_etc_arr: position.preferred_etc_arr?.split("\n"),
        };
      }),
    };
    const formData = new FormData();
    const json = JSON.stringify(newJobObj);
    const blob = new Blob([json], { type: "application/json" });
    formData.append("dto", blob);

    mutate(
      { dto: formData },
      {
        onSuccess: () => {
          setCheckMsg("서버에 공고가 업로드 되었습니다.");
        },

        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
        },
      }
    );
  };

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공고 업로드</h2>
      <section>
        <form css={formContainer} onSubmit={handleSubmit(jobSubmit)}>
          <h3 css={sectionTitle}>공통 공고 내용</h3>
          <div css={inputContainer}>
            <strong css={inputTitle}>기업 이름 *</strong>
            <input
              css={searchBox}
              type="text"
              onChange={(e) => {
                setPrevSearchWord(e.target.value);
              }}
              // onBlur={(e) => {
              //   console.log(e.target.value);
              // }}
            />
            <button
              css={searchCompanyButton}
              type="button"
              onClick={() => {
                setSearchWord(prevSearchWord);
              }}
            >
              검색
            </button>
            <select css={selectBox} {...register("company_id", { valueAsNumber: true, required: true })}>
              <option value="">기업 선택 ▼</option>
              {companyDataArr?.companyDataArr.map((company) => {
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
            <input css={inputBox} {...register("title", { required: true })} />
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>채용 기간 *</strong>
            <div css={flexBox}>
              <DatetimeBox register={register} valueName="start_time" />
              <DatetimeBox register={register} valueName="end_time" />
            </div>
            <button
              css={searchCompanyButton}
              type="button"
              onClick={() => {
                setValue(`end_time`, "9999-12-31T23:59");
              }}
            >
              상시공고
            </button>
            <label css={inputLabel} htmlFor="채용시마감">
              <input type="checkbox" id="채용시마감" {...register("cut")} />
              <CheckBox isChecked={watch("cut")} />
              채용시 마감
            </label>
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>채용 절차 *</strong>
            <textarea css={textareaBox} {...register("process_arr", { required: true })} />
            <p css={enterNotice}>엔터로 구분해주세요.</p>
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>지원 방법 *</strong>
            <textarea css={textareaBox} {...register("apply_route_arr", { required: true })} />
            <p css={enterNotice}>엔터로 구분해주세요.</p>
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>채용 링크 *</strong>
            <input type="url" css={inputBox} {...register("apply_url", { required: true })} />
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>기타 사항</strong>
            <textarea css={textareaBox} {...register("etc_arr")} />
            <p css={enterNotice}>엔터로 구분해주세요.</p>
          </div>
          <ul>
            {fields.map((item, index) => {
              return (
                <PositionBox
                  key={item.id}
                  id={item.id}
                  index={index}
                  register={register}
                  watch={watch}
                  setValue={setValue}
                  append={append}
                  remove={remove}
                />
              );
            })}
          </ul>
          <button
            css={addPositionButton}
            type="button"
            onClick={() => {
              append(blankPosition);
            }}
          >
            직무 추가
          </button>
          <button css={submitButton} type="submit">
            공고 등록하기
          </button>
          {checkMsg && <p css={checkMsgBox}>{checkMsg}</p>}
        </form>
      </section>
    </main>
  );
};

export default JdUpload;
