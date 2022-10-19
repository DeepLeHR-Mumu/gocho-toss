import { ChangeEvent, useState } from "react";
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
  deletePlaceButton,
  hireNumberButton,
  buttonContainer,
  copyPositionButton,
  deletePositionButton,
  addPositionButton,
  submitButton,
  checkMsgBox,
} from "./style";
import {
  requiredExpArr,
  contractTypeArr,
  taskArr,
  rotationArr,
  certificateArr,
  placeArr,
  placeTypeArr,
} from "./constant";

const JdUpload: NextPage = () => {
  const [prevSearchWord, setPrevSearchWord] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");
  const [bigPlace, setBigPlace] = useState<string>();
  const [smallPlace, setSmallPlace] = useState<string>();
  const [checkMsg, setCheckMsg] = useState<string>();
  const { data: companyDataArr, isLoading, isError, error } = useFindCompany({ word: searchWord });

  const { mutate } = useAddJob();
  const { register, control, handleSubmit, watch, setValue } = useForm<JobFormValues>({
    defaultValues: {
      position_arr: [
        {
          middle: false,
          high: false,
          college: false,
          four: false,
          required_exp: "",
          min_year: null,
          max_year: null,
          required_etc_arr: undefined,
          contract_type: "",
          conversion_rate: null,
          task_main: "",
          task_sub_arr: undefined,
          task_detail_arr: undefined,
          rotation_arr: undefined,
          rotation_etc: null,
          place: {
            type: "",
            address_arr: [],
            factory_arr: [],
            etc: "",
          },
          hire_number: undefined,
          pay_arr: undefined,
          preferred_certi_arr: undefined,
          preferred_etc_arr: undefined,
        },
      ],
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
    mutate(jobObj, {
      onSuccess: () => {
        setCheckMsg("서버에 공고가 업로드 되었습니다.");
      },

      onError: () => {
        setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 운영자에게 문의해주세요.");
      },
    });
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
              {...register("company_id", {
                valueAsNumber: true,
                required: true,
              })}
            >
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
            <input
              css={inputBox}
              {...register("title", {
                required: true,
              })}
            />
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>채용 기간 *</strong>
            <div css={flexBox}>
              <input
                css={inputBox}
                type="datetime-local"
                {...register("start_time", {
                  required: true,
                  setValueAs: (d: Date) => {
                    const date = new Date(d);
                    return date.getTime();
                  },
                })}
              />
              <input
                css={inputBox}
                type="datetime-local"
                {...register("end_time", {
                  required: true,
                  setValueAs: (d: Date) => {
                    const date = new Date(d);
                    return date.getTime();
                  },
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
            <strong css={inputTitle}>채용 절차 *</strong>
            <textarea
              css={textareaBox}
              {...register("process_arr", {
                required: true,
                setValueAs: (v: string) => {
                  return v.split("\n");
                },
              })}
            />
            <p css={enterNotice}>엔터로 구분해주세요.</p>
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>지원 방법 *</strong>
            <textarea
              css={textareaBox}
              {...register("apply_route_arr", {
                required: true,
                setValueAs: (v: string) => {
                  return v.split("\n");
                },
              })}
            />
            <p css={enterNotice}>엔터로 구분해주세요.</p>
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>채용 링크 *</strong>
            <input
              type="url"
              css={inputBox}
              {...register("apply_url", {
                required: true,
              })}
            />
          </div>
          <div css={inputContainer}>
            <strong css={inputTitle}>기타 사항</strong>
            <textarea
              css={textareaBox}
              {...register("etc_arr", {
                setValueAs: (v: string) => {
                  if (v === "" || v === undefined) return null;
                  return v.split("\n");
                },
              })}
            />
            <p css={enterNotice}>엔터로 구분해주세요.</p>
          </div>
          <ul>
            {fields.map((item, index) => {
              const yearDisable =
                watch("position_arr")[index].required_exp !== "경력" &&
                watch("position_arr")[index].required_exp !== "신입/경력";

              const conversionDisable =
                watch("position_arr")[index].contract_type !== "인턴" &&
                watch("position_arr")[index].contract_type !== "계약>정규";

              return (
                <li css={positionContainer} key={item.id}>
                  <h3 css={positionTitle}>직무 내용</h3>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>학력 조건 *</strong>
                    <label css={inputLabel} htmlFor={`중졸${index}`}>
                      <input type="checkbox" id={`중졸${index}`} {...register(`position_arr.${index}.middle`)} />
                      <CheckBox isChecked={watch("position_arr")[index].middle} />
                      중졸
                    </label>
                    <label css={inputLabel} htmlFor={`고졸${index}`}>
                      <input type="checkbox" id={`고졸${index}`} {...register(`position_arr.${index}.high`)} />
                      <CheckBox isChecked={watch("position_arr")[index].high} />
                      고졸
                    </label>
                    <label css={inputLabel} htmlFor={`초대졸${index}`}>
                      <input type="checkbox" id={`초대졸${index}`} {...register(`position_arr.${index}.college`)} />
                      <CheckBox isChecked={watch("position_arr")[index].college} />
                      초대졸
                    </label>
                    <label css={inputLabel} htmlFor={`4년제${index}`}>
                      <input type="checkbox" id={`4년제${index}`} {...register(`position_arr.${index}.four`)} />
                      <CheckBox isChecked={watch("position_arr")[index].four} />
                      4년제
                    </label>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>경력 조건 *</strong>
                    {requiredExpArr.map((expName) => {
                      return (
                        <label css={inputLabel} key={`${item.id}${expName}`} htmlFor={`${expName}${index}`}>
                          <input
                            type="radio"
                            value={expName}
                            id={`${expName}${index}`}
                            {...register(`position_arr.${index}.required_exp`, {
                              required: true,
                            })}
                          />
                          <CheckBox isChecked={watch("position_arr")[index].required_exp === expName} />
                          {expName}
                        </label>
                      );
                    })}
                    <div css={smallInputContainer}>
                      <strong css={inputTitle}>경력 기간</strong>
                      <input
                        type="number"
                        css={smallInputBox(yearDisable)}
                        {...register(`position_arr.${index}.min_year`, {
                          valueAsNumber: true,
                        })}
                        disabled={yearDisable}
                      />
                      년 이상
                      <input
                        type="number"
                        css={smallInputBox(yearDisable)}
                        {...register(`position_arr.${index}.max_year`, {
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
                      {...register(`position_arr.${index}.required_etc_arr`, {
                        setValueAs: (v: string) => {
                          if (v === "" || v === undefined) return null;
                          return v.split("\n");
                        },
                      })}
                    />
                    <p css={enterNotice}>엔터로 구분해주세요.</p>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>계약 형태 *</strong>
                    {contractTypeArr.map((contractName) => {
                      return (
                        <label css={inputLabel} key={`${item.id}${contractName}`} htmlFor={`${contractName}${index}`}>
                          <input
                            type="radio"
                            value={contractName}
                            id={`${contractName}${index}`}
                            {...register(`position_arr.${index}.contract_type`, {
                              required: true,
                            })}
                          />
                          <CheckBox isChecked={watch("position_arr")[index].contract_type === contractName} />
                          {contractName}
                        </label>
                      );
                    })}
                    <div css={smallInputContainer}>
                      <strong css={inputTitle}>전환율</strong>
                      <input
                        type="number"
                        css={smallInputBox(conversionDisable)}
                        {...register(`position_arr.${index}.conversion_rate`)}
                        disabled={conversionDisable}
                      />
                    </div>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>채용 직무 *</strong>
                    <select
                      css={selectBox}
                      {...register(`position_arr.${index}.task_main`, {
                        required: true,
                      })}
                    >
                      <option value="" selected disabled>
                        1차직무 선택 ▼
                      </option>
                      {taskArr.map((task) => {
                        return (
                          <option key={`${item.id}${task.mainTask}`} value={task.mainTask}>
                            {task.mainTask}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      css={selectBox}
                      multiple
                      {...register(`position_arr.${index}.task_sub_arr`, {
                        required: true,
                      })}
                    >
                      <option value="" disabled>
                        2차직무 선택 ▼
                      </option>
                      {taskArr.map((task) => {
                        const isMainTask = watch("position_arr")[index].task_main === task.mainTask;
                        if (isMainTask)
                          return task.subTaskArr.map((subTask) => {
                            return (
                              <option key={`${item.id}${subTask}`} value={subTask}>
                                {subTask}
                              </option>
                            );
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
                    <strong css={inputTitle}>세부 직무 내용 *</strong>
                    <textarea
                      css={textareaBox}
                      {...register(`position_arr.${index}.task_detail_arr`, {
                        required: true,
                        setValueAs: (v: string) => {
                          if (v === "" || v === undefined) return null;
                          return v.split("\n");
                        },
                      })}
                    />
                    <p css={enterNotice}>엔터로 구분해주세요.</p>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>교대 형태 *</strong>
                    <select
                      css={selectBox}
                      multiple
                      {...register(`position_arr.${index}.rotation_arr`, {
                        required: true,
                      })}
                    >
                      <option value="" disabled>
                        교대형태 선택 ▼
                      </option>
                      {rotationArr.map((rotation) => {
                        return (
                          <option key={`${item.id}${rotation.data}`} value={rotation.data}>
                            {rotation.name}
                          </option>
                        );
                      })}
                    </select>
                    <p css={enterNotice}>Ctrl키를 누른 채로 중복 선택이 가능합니다.</p>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>기타 교대 형태</strong>
                    <input css={inputBox} {...register(`position_arr.${index}.rotation_etc`, {})} />
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>근무지 종류 *</strong>
                    <select
                      css={selectBox}
                      {...register(`position_arr.${index}.place.type`, {
                        required: true,
                      })}
                    >
                      <option value="" selected disabled>
                        근무지 종류 선택 ▼
                      </option>
                      {placeTypeArr.map((placeType) => {
                        return (
                          <option key={`${item.id}${placeType}`} value={placeType}>
                            {placeType}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>일반 근무지</strong>
                    <select
                      css={selectBox}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                        setBigPlace(e.target.value);
                      }}
                    >
                      <option value="" selected disabled>
                        도/시 선택 ▼
                      </option>
                      {placeArr.map((place) => {
                        return (
                          <option key={`${item.id}${place}`} value={place}>
                            {place}
                          </option>
                        );
                      })}
                    </select>
                    <input
                      css={inputBox}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setSmallPlace(e.target.value);
                      }}
                    />
                    <button
                      type="button"
                      css={hireNumberButton}
                      onClick={() => {
                        setValue(`position_arr.${index}.place.address_arr`, [
                          ...watch("position_arr")[index].place.address_arr,
                          `${bigPlace} ${smallPlace}`,
                        ]);
                      }}
                    >
                      일반 근무지 추가
                    </button>
                  </div>
                  <div css={flexBox}>
                    {watch("position_arr")[index].place.address_arr.map((place) => {
                      return (
                        <div key={`${item.id}${place}`} css={inputContainer}>
                          {place}
                          <button
                            type="button"
                            css={deletePlaceButton}
                            onClick={() => {
                              setValue(`position_arr.${index}.place.address_arr`, [
                                ...watch("position_arr")[index].place.address_arr.filter((element) => {
                                  return element !== place;
                                }),
                              ]);
                            }}
                          >
                            삭제
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>기타 근무지</strong>
                    <input css={inputBox} {...register(`position_arr.${index}.place.etc`)} />
                    <p css={enterNotice}>전국/해외/기타일 경우 입력</p>
                  </div>

                  <div css={inputContainer}>
                    <strong css={inputTitle}>명수 *</strong>
                    <button
                      type="button"
                      css={hireNumberButton}
                      onClick={() => {
                        setValue(`position_arr.${index}.hire_number`, -1);
                      }}
                    >
                      0명 채용
                    </button>
                    <button
                      type="button"
                      css={hireNumberButton}
                      onClick={() => {
                        setValue(`position_arr.${index}.hire_number`, -2);
                      }}
                    >
                      00명 채용
                    </button>
                    <button
                      type="button"
                      css={hireNumberButton}
                      onClick={() => {
                        setValue(`position_arr.${index}.hire_number`, -3);
                      }}
                    >
                      000명 채용
                    </button>
                    <input
                      type="number"
                      css={smallInputBox(false)}
                      {...register(`position_arr.${index}.hire_number`, { valueAsNumber: true, required: true })}
                    />
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>급여 *</strong>
                    <textarea
                      css={textareaBox}
                      {...register(`position_arr.${index}.pay_arr`, {
                        required: true,
                        setValueAs: (v: string) => {
                          if (v === "" || v === undefined) return null;
                          return v.split("\n");
                        },
                      })}
                    />
                    <p css={enterNotice}>엔터로 구분해주세요.</p>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>우대 자격증</strong>
                    <select css={selectBox} multiple {...register(`position_arr.${index}.preferred_certi_arr`, {})}>
                      <option value="">자격증 선택 ▼</option>
                      {certificateArr.map((certi) => {
                        return (
                          <option key={`${item.id}${certi}`} value={certi}>
                            {certi}
                          </option>
                        );
                      })}
                    </select>
                    <p css={enterNotice}>Ctrl+F로 검색해서 찾으면 편리합니다.</p>
                  </div>
                  <div css={inputContainer}>
                    <strong css={inputTitle}>기타 우대 사항</strong>
                    <textarea
                      css={textareaBox}
                      {...register(`position_arr.${index}.preferred_etc_arr`, {
                        setValueAs: (v: string) => {
                          if (v === "" || v === undefined) return null;
                          return v.split("\n");
                        },
                      })}
                    />
                  </div>

                  <div css={buttonContainer}>
                    <button
                      type="button"
                      css={copyPositionButton}
                      onClick={() => {
                        return append({
                          middle: watch("position_arr")[index].middle,
                          high: watch("position_arr")[index].high,
                          college: watch("position_arr")[index].college,
                          four: watch("position_arr")[index].four,
                          required_exp: watch("position_arr")[index].required_exp,
                          min_year: watch("position_arr")[index].min_year,
                          max_year: watch("position_arr")[index].max_year,
                          required_etc_arr: undefined,
                          contract_type: watch("position_arr")[index].contract_type,
                          conversion_rate: watch("position_arr")[index].conversion_rate,
                          task_main: watch("position_arr")[index].task_main,
                          task_sub_arr: watch("position_arr")[index].task_sub_arr,
                          task_detail_arr: undefined,
                          rotation_arr: watch("position_arr")[index].rotation_arr,
                          rotation_etc: watch("position_arr")[index].rotation_etc,
                          place: {
                            type: watch("position_arr")[index].place.type,
                            address_arr: watch("position_arr")[index].place.address_arr,
                            factory_arr: watch("position_arr")[index].place.factory_arr,
                            etc: watch("position_arr")[index].place.etc,
                          },
                          hire_number: watch("position_arr")[index].hire_number,
                          pay_arr: undefined,
                          preferred_certi_arr: watch("position_arr")[index].preferred_certi_arr,
                          preferred_etc_arr: undefined,
                        });
                      }}
                    >
                      해당 직무 복사
                    </button>
                    <button
                      css={deletePositionButton}
                      type="button"
                      onClick={() => {
                        return remove(index);
                      }}
                    >
                      직무 삭제
                    </button>
                  </div>
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
                required_exp: "",
                min_year: null,
                max_year: null,
                required_etc_arr: undefined,
                contract_type: "",
                conversion_rate: null,
                task_main: "",
                task_sub_arr: undefined,
                task_detail_arr: undefined,
                rotation_arr: undefined,
                rotation_etc: null,
                place: {
                  type: "",
                  address_arr: [],
                  factory_arr: [],
                  etc: "",
                },
                hire_number: undefined,
                pay_arr: undefined,
                preferred_certi_arr: undefined,
                preferred_etc_arr: undefined,
              });
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
