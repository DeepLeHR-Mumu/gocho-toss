import { FunctionComponent, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useFieldArray } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import { DeleteInputButton, AddFieldButton } from "../../component";
import { PositionTitleInfoPartProps } from "./type";
import { TASK_ARR } from "./constant";
import { cssObj } from "./style";

export const PositionTitleInfoPart: FunctionComponent<PositionTitleInfoPartProps> = ({ jobForm, control }) => {
  const [isMainTaskOpen, setIsMainTaskOpen] = useState<boolean>(false);
  const [isSubTaskOpen, setIsSubTaskOpen] = useState<boolean>(false);
  const [hireNumberLabel, setHireNumberLabel] = useState<string>("");

  const { watch, setValue, clearErrors, trigger, formState, register, setError } = jobForm;

  const taskDetailArr = useFieldArray({
    control,
    name: `task_detail_arr`,
  });

  const selectedSubTaskObj = TASK_ARR.find((task) => watch("task_main") === task.mainTask);

  const mainTaskClickHandler = (task: string) => {
    setValue(`task_main`, task);
    setValue(`task_sub_arr`, []);
    clearErrors(`task_main`);
    setIsMainTaskOpen(false);
  };

  const subTaskClickHandler = (subTask: string) => {
    const isInList = watch("task_sub_arr")?.includes(subTask);
    clearErrors(`task_sub_arr`);
    if (isInList) {
      setValue(`task_sub_arr`, [...(watch("task_sub_arr")?.filter((element) => element !== subTask) || [])]);
    } else {
      setValue(`task_sub_arr`, [...(watch("task_sub_arr") || []), subTask]);
    }
  };

  const hireNumberClickHandler = (value: number, label: string) => {
    setValue(`hire_number`, value);
    trigger(`hire_number`);
    setHireNumberLabel(label);
  };

  const subTaskTextMaker = (selectedSubTask: string[]) => {
    if (selectedSubTask.length === 0) return "2차직무 선택";
    return selectedSubTask.join(", ");
  };

  return (
    <>
      <div css={cssObj.titleContainer}>
        <strong css={cssObj.positionTitle}>채용 세부사항</strong>
      </div>
      <div css={cssObj.container}>
        <input
          css={cssObj.hiddenInput}
          {...register(`task_main`, {
            required: "1차 직무는 필수 입력 사항입니다",
          })}
        />
        <input
          css={cssObj.hiddenInput}
          {...register(`task_sub_arr`, {
            required: "2차 직무는 필수 입력 사항입니다",
          })}
        />
        <p css={cssObj.inputTitle(Boolean(formState.errors?.task_main || formState.errors?.task_sub_arr))}>채용 직무</p>
        <div css={cssObj.taskInputContainer}>
          <div>
            <div css={cssObj.taskContainer}>
              <button
                css={cssObj.input(20)}
                type="button"
                onClick={() => {
                  if (isMainTaskOpen && watch("task_main") === "") {
                    setError(`task_main`, { type: "required" });
                  }
                  setIsMainTaskOpen((prev) => !prev);
                }}
                onBlur={() => {
                  if (isMainTaskOpen && watch("task_main") === "") {
                    setError(`task_main`, { type: "required" });
                  }
                  setIsMainTaskOpen(false);
                }}
              >
                {selectedSubTaskObj ? `${selectedSubTaskObj.mainTask}` : "1차직무 선택"}
                {isMainTaskOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              <div css={cssObj.taskList(isMainTaskOpen)}>
                {TASK_ARR.map((taskObj) => (
                  <button
                    type="button"
                    css={cssObj.option}
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
            <p css={cssObj.desc(Boolean(formState.errors?.task_main))}>
              {formState.errors?.task_main
                ? "1차 직무는 필수 선택 사항입니다"
                : "1차 직무 선택 후 2차 직무가 표시됩니다"}
            </p>
          </div>
          <div>
            <div css={cssObj.taskContainer}>
              <button
                css={cssObj.input(20)}
                type="button"
                onClick={() => {
                  if (isSubTaskOpen && watch("task_sub_arr")?.length === 0) {
                    setError(`task_sub_arr`, { type: "required" });
                  }
                  setIsSubTaskOpen((prev) => !prev);
                }}
                onBlur={() => {
                  if (isSubTaskOpen && watch("task_sub_arr")?.length === 0) {
                    setError(`task_sub_arr`, { type: "required" });
                  }
                  setIsSubTaskOpen(false);
                }}
              >
                {subTaskTextMaker(watch("task_sub_arr") || [])}
                {isSubTaskOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              <div css={cssObj.taskList(isSubTaskOpen)}>
                {selectedSubTaskObj?.subTaskArr.map((subTask) => (
                  <button
                    type="button"
                    css={cssObj.option}
                    key={`${subTask}`}
                    value={subTask}
                    onMouseDown={(mouseEvent) => {
                      mouseEvent.preventDefault();
                      subTaskClickHandler(subTask);
                    }}
                  >
                    <CheckBox isChecked={watch("task_sub_arr")?.includes(subTask) || false} />
                    {subTask}
                  </button>
                ))}
              </div>
            </div>
            <p css={cssObj.desc(Boolean(formState.errors?.task_sub_arr))}>
              {formState.errors?.task_sub_arr
                ? "2차 직무는 필수 선택 사항입니다. 해당 사항이 없으면 없음을 선택해주세요"
                : "2차 직무는 중복 선택이 가능합니다"}
            </p>
          </div>
        </div>
      </div>
      <div css={cssObj.container}>
        <p css={cssObj.inputTitle(Boolean(formState.errors?.task_detail_arr))}>세부 직무 내용</p>
        <div css={cssObj.inputContainer}>
          {taskDetailArr.fields.map((item, index) => (
            <div key={`taskDetailArr${item.id}`}>
              <label css={cssObj.inputLabel} htmlFor={`taskDetailArr${item.id}`}>
                <input
                  id={`taskDetailArr${item.id}`}
                  css={cssObj.erasableInput(47)}
                  onFocus={() => {
                    clearErrors(`task_detail_arr.${index}`);
                  }}
                  placeholder="합격시 구체적으로 어떤 일을 하게 되는지 명시해주세요 (최대 70자)"
                  maxLength={70}
                  {...register(`task_detail_arr.${index}.value`, {
                    required: "모든 칸이 채워져야 합니다",
                    onBlur: (blurEvent) => {
                      if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                        setValue(`task_detail_arr.${index}.value`, "");
                      }
                    },
                  })}
                />
                {index !== 0 && (
                  <DeleteInputButton
                    onClickHandler={() => {
                      taskDetailArr.remove(index);
                    }}
                  />
                )}
              </label>
              <p css={cssObj.arrayErrorMessage}>
                {formState?.errors?.task_detail_arr?.[index] &&
                  formState?.errors?.task_detail_arr?.[index]?.value?.message}
              </p>
            </div>
          ))}
          {taskDetailArr.fields.length < 10 && (
            <AddFieldButton
              onClickHandler={() => {
                taskDetailArr.append({ value: "" });
              }}
            />
          )}
        </div>
      </div>
      <div css={cssObj.container}>
        <p css={cssObj.inputTitle(Boolean(formState.errors?.hire_number))}>채용 인원</p>
        <div css={cssObj.hireNumberContainer}>
          <div css={cssObj.hireNumberInputContainer}>
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
                  css={cssObj.input(6)}
                  {...register(`hire_number`, {
                    valueAsNumber: true,
                    required: "채용 인원은 필수 입력 값입니다",
                    max: { value: 9999, message: "최대값은 9999명입니다" },
                  })}
                />
                명
              </>
            )}
          </div>
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
        <p css={cssObj.errorMessage}>{formState.errors?.hire_number && formState.errors?.hire_number?.message}</p>
      </div>
    </>
  );
};
