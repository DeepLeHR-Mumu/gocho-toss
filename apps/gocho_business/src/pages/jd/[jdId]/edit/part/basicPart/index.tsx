import { ChangeEvent, FunctionComponent, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { SharedRadioButton } from "shared-ui/common/atom/sharedRadioButton";

import { commonCssObj } from "@/styles";

import { AddFieldButton, DeleteInputButton } from "@/pages/jd/upload/component";
import { setFieldErrorIfEmpty } from "@/pages/jd/[jdId]/edit/util";
import { BasicPartProps } from "./type";
import { CONTRACT_TYPE_ARR, TASK_ARR, REQUIRED_EXP_ARR } from "./constant";
import { cssObj } from "./style";

export const BasicPart: FunctionComponent<BasicPartProps> = ({ jobForm, taskDetailArr }) => {
  const [isTaskOpen, setIsTaskOpen] = useState<boolean>(false);
  const [hireNumberLabel, setHireNumberLabel] = useState<string>("");

  const {
    watch,
    setValue,
    clearErrors,
    trigger,
    formState: { errors },
    register,
    setError,
  } = jobForm;

  const mainTaskClickHandler = (task: string) => {
    setValue(`task_main`, task);
    setValue(`task_sub_arr`, []);
    clearErrors(`task_main`);
  };

  const subTaskClickHandler = (subTask: string) => {
    const isInList = watch("task_sub_arr")?.includes(subTask);
    const isSubtaskNone = subTask === "없음";
    let currentSubTasks = watch("task_sub_arr") || [];
    clearErrors(`task_main`);

    if (isInList) {
      currentSubTasks = isSubtaskNone ? [] : currentSubTasks.filter((element) => element !== subTask);
    } else {
      currentSubTasks = isSubtaskNone ? [subTask] : [...currentSubTasks, subTask];
    }

    setValue(`task_sub_arr`, currentSubTasks);
  };

  const hireNumberClickHandler = (value: number, label: string) => {
    setValue(`hire_number`, value);
    trigger(`hire_number`);
    setHireNumberLabel(label);
  };

  const subTaskTextMaker = (selectedSubTask: string[]) => {
    if (selectedSubTask.length === 0) return "2차 세부 직무 선택";
    return selectedSubTask.join(", ");
  };

  const taskErrorHandler = () => {
    if ((watch("task_main") === "" || watch("task_sub_arr")?.length === 0) && isTaskOpen) {
      setError(`task_main`, { type: "required", message: "* 1차 직무와 2차 세부 직무를 선택해주세요" });
    }
    setIsTaskOpen(false);
  };

  const conversionRateHandler = (event: ChangeEvent<HTMLInputElement>, isError: boolean) => {
    if (isError && Number(event.target.value) === 0) {
      setError(`conversion_rate`, {
        type: "required",
        message: "전환율은 필수 입력 값입니다",
      });
    }
  };

  const isSubTaskNone = watch("task_sub_arr")?.includes("없음");

  const isConversionActivated = watch("contract_type") === "인턴" || watch("contract_type") === "계약>정규";
  const isYearActivated = watch("required_exp") === "경력" || watch("required_exp") === "신입/경력";
  const selectedSubTaskObj = TASK_ARR.find((task) => watch("task_main") === task.mainTask);

  return (
    <div css={commonCssObj.partContainer}>
      <strong css={commonCssObj.partTitle}>모집요강</strong>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.inputTitle(true)}>채용 직무</p>
        <input
          css={cssObj.hiddenInput}
          {...register(`task_main`, {
            required: "* 1차 직무와 2차 세부 직무를 선택해주세요",
          })}
        />
        <input
          css={cssObj.hiddenInput}
          {...register(`task_sub_arr`, {
            required: "* 1차 직무와 2차 세부 직무를 선택해주세요",
          })}
        />
        <div css={cssObj.inputWrapper}>
          <div css={cssObj.taskSelectContainer}>
            <div css={cssObj.taskContainer}>
              <button
                css={commonCssObj.select(17.5, Boolean(errors.task_main))}
                type="button"
                onClick={() => {
                  if (isTaskOpen && watch("task_main") === "") {
                    setError(`task_main`, { type: "required", message: "* 1차 직무와 2차 세부 직무를 선택해주세요" });
                  }
                  setIsTaskOpen((prev) => !prev);
                }}
                onBlur={taskErrorHandler}
              >
                {selectedSubTaskObj ? `${selectedSubTaskObj.mainTask}` : "1차직무 선택"}
                {isTaskOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              <div css={commonCssObj.optionList(isTaskOpen, 26)}>
                {TASK_ARR.map((taskObj) => (
                  <button
                    type="button"
                    css={cssObj.mainTaskOption(watch("task_main") === taskObj.mainTask)}
                    key={`${taskObj.mainTask}`}
                    value={taskObj.mainTask}
                    onMouseDown={(mouseEvent) => {
                      mouseEvent.preventDefault();
                      mainTaskClickHandler(taskObj.mainTask);
                    }}
                  >
                    {taskObj.mainTask}
                  </button>
                ))}
              </div>
            </div>
            <div css={cssObj.taskContainer}>
              <button
                css={commonCssObj.select(17.5, Boolean(errors.task_main))}
                type="button"
                onClick={() => {
                  if (isTaskOpen && watch("task_sub_arr")?.length === 0) {
                    setError(`task_sub_arr`, { type: "required" });
                  }
                  setIsTaskOpen((prev) => !prev);
                }}
                onBlur={taskErrorHandler}
              >
                {subTaskTextMaker(watch("task_sub_arr") || [])}
                {isTaskOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              <div css={commonCssObj.optionList(isTaskOpen, 46)}>
                {selectedSubTaskObj?.subTaskArr.map((subTask) => (
                  <button
                    type="button"
                    css={commonCssObj.option}
                    key={`${subTask}`}
                    value={subTask}
                    onMouseDown={(mouseEvent) => {
                      mouseEvent.preventDefault();
                      subTaskClickHandler(subTask);
                    }}
                    disabled={subTask !== "없음" && isSubTaskNone}
                  >
                    <CheckBox isChecked={watch("task_sub_arr")?.includes(subTask) || false} />
                    {subTask}
                  </button>
                ))}
              </div>
            </div>
            <div css={cssObj.errorMessageContainer}>
              <p css={commonCssObj.errorMessage}>{errors.task_main && errors.task_main?.message}</p>
              <p css={commonCssObj.errorMessage}>{errors.task_detail_arr?.message}</p>
            </div>
          </div>
          <div css={commonCssObj.arrayInputContainer}>
            {taskDetailArr.fields.map((item, index) => (
              <div key={`taskDetailArr${item.id}`}>
                <label css={commonCssObj.inputLabel} htmlFor={`taskDetailArr${item.id}`}>
                  <input
                    id={`taskDetailArr${item.id}`}
                    css={commonCssObj.input(55.5, Boolean(errors.task_detail_arr))}
                    placeholder="합격 시 구체적으로 어떤 일을 하게 되는지 세부 직무 내용을 기재해 주세요 (최대 50자)"
                    maxLength={50}
                    {...register(`task_detail_arr.${index}.value`, {
                      onBlur: (blurEvent) => {
                        if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                          setValue(`task_detail_arr.${index}.value`, "");
                        }
                        setFieldErrorIfEmpty(watch, jobForm, "task_detail_arr", "* 세부 직무 내용을 입력해 주세요");
                      },
                    })}
                  />
                  {index !== 0 && (
                    <DeleteInputButton
                      onClickHandler={() => {
                        taskDetailArr.remove(index);
                        setFieldErrorIfEmpty(watch, jobForm, "task_detail_arr", "* 세부 직무 내용을 입력해 주세요");
                      }}
                    />
                  )}
                </label>
                <p css={commonCssObj.errorMessage}>
                  {errors.task_detail_arr?.[index] && errors.task_detail_arr?.[index]?.value?.message}
                </p>
              </div>
            ))}
            <div css={commonCssObj.addButtonWrapper}>
              {taskDetailArr.fields.length < 15 && (
                <AddFieldButton
                  onClickHandler={() => {
                    taskDetailArr.append({ value: "" });
                    setFieldErrorIfEmpty(watch, jobForm, "task_detail_arr", "* 세부 직무 내용을 입력해 주세요");
                  }}
                />
              )}
            </div>
          </div>
          <p css={commonCssObj.errorMessage}>{errors.task_detail_arr && errors.task_detail_arr?.message}</p>
        </div>
      </div>
      <div css={commonCssObj.longContainer}>
        <p css={commonCssObj.inputTitle(true)}>채용 인원</p>
        <div>
          <div css={cssObj.hireNumberContainer}>
            {(watch("hire_number") || 1) < 0 ? (
              <>
                <div css={cssObj.hireNumberCover}>{hireNumberLabel}</div>명
                <button
                  css={cssObj.hireNumberResetButton}
                  type="button"
                  onClick={() => {
                    setValue(`hire_number`, null);
                  }}
                >
                  값 다시 입력하기
                </button>
              </>
            ) : (
              <>
                <input
                  type="number"
                  max="9999"
                  css={commonCssObj.input(6.625, Boolean(errors.hire_number))}
                  {...register(`hire_number`, {
                    valueAsNumber: true,
                    required: "* 채용 인원 수를 입력해 주세요",
                    max: { value: 9999, message: "* 최대값은 9999명입니다" },
                  })}
                  placeholder="숫자만 입력"
                />
                명
              </>
            )}
            <p css={commonCssObj.errorMessage}>{errors.hire_number && errors.hire_number?.message}</p>
          </div>
          <div css={cssObj.hireNumberContainer}>
            <button type="button" css={cssObj.hireNumberButton} onClick={() => hireNumberClickHandler(-1, "0")}>
              0명
            </button>
            <button type="button" css={cssObj.hireNumberButton} onClick={() => hireNumberClickHandler(-2, "00")}>
              00명
            </button>
            <button type="button" css={cssObj.hireNumberButton} onClick={() => hireNumberClickHandler(-3, "000")}>
              000명
            </button>
          </div>
        </div>
      </div>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle(false)}>계약 형태</p>
        <div css={commonCssObj.labelContainer}>
          {CONTRACT_TYPE_ARR.map((contractName) => (
            <SharedRadioButton
              key={contractName}
              value={contractName}
              id={contractName}
              registerObj={register(`contract_type`, {
                required: "* 계약 형태를 선택해주세요",
                onChange: () => {
                  if (isConversionActivated) {
                    clearErrors(`conversion_rate`);
                    setValue(`conversion_rate`, null);
                  }
                },
              })}
            >
              <p css={cssObj.radioLabel}>{contractName}</p>
            </SharedRadioButton>
          ))}
        </div>
        <p css={commonCssObj.errorMessage}>{errors.contract_type && errors.contract_type?.message}</p>
        {isConversionActivated && (
          <>
            <div css={cssObj.borderLine} />
            <div css={cssObj.optionalInputContainer}>
              <p>전환율</p>
              <input
                css={cssObj.optionalInput}
                type="number"
                min="0"
                max="100"
                step="1"
                {...register(`conversion_rate`, {
                  required: { value: isConversionActivated, message: "* 전환율을 입력해 주세요" },
                  min: { value: 0, message: "* 최소값은 1입니다" },
                  max: { value: 100, message: "* 최대값은 100입니다" },
                  valueAsNumber: true,
                  disabled: !isConversionActivated,
                  onChange: (e) => conversionRateHandler(e, isConversionActivated),
                })}
              />
              %
            </div>
            <p css={commonCssObj.errorMessage}>{errors.conversion_rate && errors.conversion_rate?.message}</p>
          </>
        )}
      </div>
      <div css={commonCssObj.container}>
        <p css={commonCssObj.inputTitle(false)}>경력 조건</p>
        <div css={commonCssObj.labelContainer}>
          {REQUIRED_EXP_ARR.map((expName) => (
            <SharedRadioButton
              key={expName}
              value={expName}
              id={expName}
              registerObj={register(`required_exp`, {
                required: "* 경력 조건을 선택해 주세요",
              })}
            >
              <p css={cssObj.radioLabel}>{expName}</p>
            </SharedRadioButton>
          ))}
        </div>
        <p css={commonCssObj.errorMessage}>{errors.required_exp && errors.required_exp?.message}</p>
        {isYearActivated && (
          <>
            <div css={cssObj.borderLine} />
            <div css={cssObj.yearInputWrapper}>
              <div css={cssObj.optionalInputContainer}>
                <p>최소경력</p>
                <input
                  type="number"
                  min="1"
                  max="50"
                  css={cssObj.optionalInput}
                  {...register(`min_year`, {
                    min: { value: 1, message: "* 최소 경력은 1년 이상이어야 합니다" },
                    max: { value: 50, message: "* 최소 경력은 50년 이하이어야 합니다" },
                    onBlur: () => trigger(`max_year`),
                    valueAsNumber: true,
                  })}
                />
                년
              </div>
              <div css={cssObj.errorMessageWrapper}>
                <p css={commonCssObj.errorMessage}>{errors.min_year && errors.min_year?.message}</p>
              </div>
            </div>
            <div css={cssObj.yearInputWrapper}>
              <div css={cssObj.optionalInputContainer}>
                <p>최대경력</p>
                <input
                  type="number"
                  min="1"
                  max="100"
                  css={cssObj.optionalInput}
                  {...register(`max_year`, {
                    max: { value: 50, message: "* 최대 경력은 50년 이하이어야 합니다" },
                    validate: (value) =>
                      (value || 1) > (watch("min_year") || 0) || "* 최소 경력 조건이 최대보다 작거나 같을 수 없습니다.",
                    valueAsNumber: true,
                  })}
                />
                년
              </div>
              <div css={cssObj.errorMessageWrapper}>
                <p css={commonCssObj.errorMessage}>{errors.max_year && errors.max_year?.message}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
