import { useState } from "react";
import type { NextPage } from "next";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { mainContainer, pageTitle } from "@style/commonStyles";
import { useFindCompany } from "@api/company/useFindCompany";
import { useAddJob } from "@api/job/useAddJob";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { JobFormValues } from "./type";
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
  positionContainer,
  positionTitle,
  smallInputContainer,
  smallInputBox,
  deletePositionButton,
  addPositionButton,
  submitButton,
} from "./style";
import { requiredExpArr, contractTypeArr, taskArr, rotationArr } from "./constant";

const JdUpload: NextPage = () => {
  const { mutate } = useAddJob();
  const [prevSearchWord, setPrevSearchWord] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");
  const { data: companyDataArr, isLoading, isError, error } = useFindCompany({ word: searchWord });

  const { register, control, handleSubmit, watch } = useForm<JobFormValues>({
    defaultValues: {
      positionArr: [
        {
          middle: false,
          high: false,
          college: false,
          four: false,
          requiredExp: "",
          minYear: undefined,
          maxYear: undefined,
          contractType: "",
          conversionRate: undefined,
          taskMain: "",
          taskSubArr: [],
          rotationArr: [],
          rotationEtc: "",
          placeArr: "",
          hireNumber: undefined,
          payArr: undefined,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "positionArr",
  });

  if (!companyDataArr || isLoading) {
    return <LoadingScreen />;
  }

  if (isError && error) {
    return <ErrorScreen />;
  }

  const jobSubmit: SubmitHandler<JobFormValues> = (jobObj) => {
    // console.log(jobObj);
    mutate(jobObj, {});
  };

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공고 업로드</h2>
      <section>
        <form css={formContainer} onSubmit={handleSubmit(jobSubmit)}>
          <h3 css={sectionTitle}>공통 공고 내용</h3>
          <div css={inputContainer}>
            <strong css={inputTitle}>기업 이름</strong>
            <input
              css={searchBox}
              type="text"
              onChange={(e) => {
                setPrevSearchWord(e.target.value);
              }}
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
            <select
              css={selectBox}
              {...register("companyId", {
                valueAsNumber: true,
                // required: true,
              })}
            >
              <option value="">기업 선택 ▼</option>
              {companyDataArr?.companyDataArr.map((company) => {
                return <option value={company.id}>{company.name}</option>;
              })}
            </select>
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>공고 제목</strong>
            <input
              css={inputBox}
              {...register("title", {
                // required: true,
              })}
            />
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>채용 기간</strong>
            <div css={flexBox}>
              <input
                css={inputBox}
                type="datetime-local"
                {...register("startTime", {
                  // required: true,
                })}
              />
              <input
                css={inputBox}
                type="datetime-local"
                {...register("endTime", {
                  // required: true,
                })}
              />
            </div>
            <label css={inputLabel} htmlFor="채용시마감">
              <input type="checkbox" id="채용시마감" {...register("cut")} />
              <CheckBox isChecked={watch("cut")} />
              채용시 마감
            </label>
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>채용 절차</strong>
            <textarea
              css={textareaBox}
              {...register("processArr", {
                // required: true,
                setValueAs: (v: string) => {
                  return v.split("\n");
                },
              })}
            />
            <p css={enterNotice}>엔터로 구분해주세요.</p>
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>지원 방법</strong>
            <textarea
              css={textareaBox}
              {...register("applyRouteArr", {
                // required: true,
                setValueAs: (v: string) => {
                  return v.split("\n");
                },
              })}
            />
            <p css={enterNotice}>엔터로 구분해주세요.</p>
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>채용 링크</strong>
            <input
              type="url"
              css={inputBox}
              {...register("applyUrl", {
                // required: true,
              })}
            />
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>기타 사항</strong>
            <textarea
              css={textareaBox}
              {...register("etcArr", {
                setValueAs: (v: string) => {
                  return v.split("\n");
                },
              })}
            />
            <p css={enterNotice}>엔터로 구분해주세요.</p>
          </div>
          <ul>
            {fields.map((item, index) => {
              const yearDisable =
                watch("positionArr")[index].requiredExp !== "경력" &&
                watch("positionArr")[index].requiredExp !== "신입/경력";

              const conversionDisable =
                watch("positionArr")[index].contractType !== "인턴" &&
                watch("positionArr")[index].contractType !== "계약>정규";

              return (
                <li css={positionContainer} key={item.id}>
                  <h3 css={positionTitle}>직무 내용</h3>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>학력 조건</strong>
                    <label css={inputLabel} htmlFor={`중졸${index}`}>
                      <input type="checkbox" id={`중졸${index}`} {...register(`positionArr.${index}.middle`)} />
                      <CheckBox isChecked={watch("positionArr")[index].middle} />
                      중졸
                    </label>
                    <label css={inputLabel} htmlFor={`고졸${index}`}>
                      <input type="checkbox" id={`고졸${index}`} {...register(`positionArr.${index}.high`)} />
                      <CheckBox isChecked={watch("positionArr")[index].high} />
                      고졸
                    </label>
                    <label css={inputLabel} htmlFor={`초대졸${index}`}>
                      <input type="checkbox" id={`초대졸${index}`} {...register(`positionArr.${index}.college`)} />
                      <CheckBox isChecked={watch("positionArr")[index].college} />
                      초대졸
                    </label>
                    <label css={inputLabel} htmlFor={`4년제${index}`}>
                      <input type="checkbox" id={`4년제${index}`} {...register(`positionArr.${index}.four`)} />
                      <CheckBox isChecked={watch("positionArr")[index].four} />
                      4년제
                    </label>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>경력 조건</strong>
                    {requiredExpArr.map((expName) => {
                      return (
                        <label css={inputLabel} htmlFor={`${expName}${index}`}>
                          <input
                            type="radio"
                            value={expName}
                            id={`${expName}${index}`}
                            {...register(`positionArr.${index}.requiredExp`)}
                          />
                          <CheckBox isChecked={watch("positionArr")[index].requiredExp === expName} />
                          {expName}
                        </label>
                      );
                    })}
                    <div css={smallInputContainer}>
                      <strong css={inputTitle}>경력 기간</strong>
                      <input
                        type="number"
                        css={smallInputBox(yearDisable)}
                        {...register(`positionArr.${index}.minYear`, {
                          valueAsNumber: true,
                        })}
                        disabled={yearDisable}
                      />
                      년 이상
                      <input
                        type="number"
                        css={smallInputBox(yearDisable)}
                        {...register(`positionArr.${index}.maxYear`, {
                          valueAsNumber: true,
                        })}
                        disabled={yearDisable}
                      />
                      년 이하
                    </div>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>기타 조건</strong>
                    <textarea
                      css={textareaBox}
                      {...register(`positionArr.${index}.requiredEtcArr`, {
                        // required: true,
                        setValueAs: (v: string) => {
                          return v.split("\n");
                        },
                      })}
                    />
                    <p css={enterNotice}>엔터로 구분해주세요.</p>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>계약 형태</strong>
                    {contractTypeArr.map((contractName) => {
                      return (
                        <label css={inputLabel} htmlFor={`${contractName}${index}`}>
                          <input
                            type="radio"
                            value={contractName}
                            id={`${contractName}${index}`}
                            {...register(`positionArr.${index}.contractType`)}
                          />
                          <CheckBox isChecked={watch("positionArr")[index].contractType === contractName} />
                          {contractName}
                        </label>
                      );
                    })}
                    <div css={smallInputContainer}>
                      <strong css={inputTitle}>전환율</strong>
                      <input
                        type="number"
                        css={smallInputBox(conversionDisable)}
                        {...register(`positionArr.${index}.conversionRate`)}
                        disabled={conversionDisable}
                      />
                    </div>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>채용 직무</strong>
                    <select
                      css={selectBox}
                      {...register(`positionArr.${index}.taskMain`, {
                        // required: true,
                      })}
                    >
                      <option value="" disabled>
                        1차직무 선택 ▼
                      </option>
                      {taskArr.map((task) => {
                        return <option value={task.mainTask}>{task.mainTask}</option>;
                      })}
                    </select>
                    <select
                      css={selectBox}
                      multiple
                      {...register(`positionArr.${index}.taskSubArr`, {
                        // required: true,
                      })}
                    >
                      <option value="" disabled>
                        2차직무 선택 ▼
                      </option>
                      {taskArr.map((task) => {
                        const isMainTask = watch("positionArr")[index].taskMain === task.mainTask;
                        if (isMainTask)
                          return task.subTaskArr.map((subTask) => {
                            return <option value={subTask}>{subTask}</option>;
                          });
                        return <> </>;
                      })}
                    </select>
                    <p css={enterNotice}>
                      1차 직무 선택 시 2차 직무가 표시됩니다.
                      <br />
                      Ctrl키를 누른 채로 중복 선택이 가능합니다.
                    </p>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>세부 직무 내용</strong>
                    <textarea
                      css={textareaBox}
                      {...register(`positionArr.${index}.taskDetailArr`, {
                        // required: true,
                        setValueAs: (v: string) => {
                          return v.split("\n");
                        },
                      })}
                    />
                    <p css={enterNotice}>엔터로 구분해주세요.</p>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>교대 형태</strong>
                    <select
                      css={selectBox}
                      placeholder="교대형태 선택"
                      multiple
                      {...register(`positionArr.${index}.rotationArr`, {
                        // required: true,
                      })}
                    >
                      <option value="" disabled>
                        교대형태 선택 ▼
                      </option>
                      {rotationArr.map((rotation) => {
                        return <option value={rotation.data}>{rotation.name}</option>;
                      })}
                    </select>
                    <p css={enterNotice}>Ctrl키를 누른 채로 중복 선택이 가능합니다.</p>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>근무지</strong>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>명수</strong>
                    <input css={inputBox} {...register(`positionArr.${index}.hireNumber`)} />
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>급여</strong>
                    <textarea
                      css={textareaBox}
                      {...register(`positionArr.${index}.payArr`, {
                        // required: true,
                        setValueAs: (v: string) => {
                          return v.split("\n");
                        },
                      })}
                    />
                    <p css={enterNotice}>엔터로 구분해주세요.</p>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>우대 자격증</strong>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>기타 우대 사항</strong>
                    <textarea
                      css={textareaBox}
                      {...register(`positionArr.${index}.preferredEtcArr`, {
                        setValueAs: (v: string) => {
                          return v.split("\n");
                        },
                      })}
                    />
                  </div>

                  <button
                    css={deletePositionButton}
                    type="button"
                    onClick={() => {
                      return remove(index);
                    }}
                  >
                    직무 삭제
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            css={addPositionButton}
            type="button"
            onClick={() => {
              append({
                middle: false,
                high: false,
                college: false,
                four: false,
                requiredExp: "",
                minYear: undefined,
                maxYear: undefined,
                requiredEtcArr: undefined,
                contractType: "",
                conversionRate: undefined,
                taskMain: "",
                taskSubArr: undefined,
                taskDetailArr: undefined,
                rotationArr: undefined,
                rotationEtc: "",
                placeArr: "",
                hireNumber: undefined,
                payArr: undefined,
                preferredCertiArr: [],
                preferredEtcArr: undefined,
              });
            }}
          >
            직무 추가
          </button>
          <button css={submitButton} type="submit">
            공고 등록하기
          </button>
        </form>
      </section>
    </main>
  );
};

export default JdUpload;
