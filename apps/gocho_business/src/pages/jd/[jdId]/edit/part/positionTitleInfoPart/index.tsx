import { FunctionComponent, useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useFieldArray } from "react-hook-form";

import { CheckBox } from "shared-ui/common/atom/checkbox";
import { SharedButton } from "shared-ui/business/sharedButton";
import { COLORS } from "shared-style/color";

import { DeleteInputButton } from "../../component/deleteInputButton";
import { AddFieldButton } from "../../component/addFieldButton";
import { PositionTitleInfoPartProps } from "./type";
import { taskArr } from "./constant";
import { cssObj } from "./style";

export const PositionTitleInfoPart: FunctionComponent<PositionTitleInfoPartProps> = ({
  id,
  positionIndex,
  jdForm,
  appendPosition,
  removePosition,
  control,
  isCardOpen,
  setIsCardOpen,
}) => {
  const [isMainTaskOpen, setIsMainTaskOpen] = useState<boolean>(false);
  const [isSubTaskOpen, setIsSubTaskOpen] = useState<boolean>(false);
  const [hireNumberLabel, setHireNumberLabel] = useState<string>("");

  const { watch, setValue, clearErrors, trigger, formState, register, setError } = jdForm;

  const taskDetailArr = useFieldArray({
    control,
    name: `position_arr.${positionIndex}.task_detail_arr`,
  });

  const selectedSubTaskObj = taskArr.find((task) => watch("position_arr")[positionIndex].task_main === task.mainTask);

  const mainTaskClickHandler = (task: string) => {
    setValue(`position_arr.${positionIndex}.task_main`, task);
    setValue(`position_arr.${positionIndex}.task_sub_arr`, []);
    clearErrors(`position_arr.${positionIndex}.task_main`);
    setIsMainTaskOpen(false);
  };

  const subTaskClickHandler = (subTask: string) => {
    const isInList = watch("position_arr")[positionIndex].task_sub_arr?.includes(subTask);
    clearErrors(`position_arr.${positionIndex}.task_sub_arr`);
    if (isInList) {
      setValue(`position_arr.${positionIndex}.task_sub_arr`, [
        ...(watch("position_arr")[positionIndex].task_sub_arr?.filter((element) => element !== subTask) || []),
      ]);
    } else {
      setValue(`position_arr.${positionIndex}.task_sub_arr`, [
        ...(watch("position_arr")[positionIndex].task_sub_arr || []),
        subTask,
      ]);
    }
  };

  const hireNumberClickHandler = (value: number, label: string) => {
    setValue(`position_arr.${positionIndex}.hire_number`, value);
    trigger(`position_arr.${positionIndex}.hire_number`);
    setHireNumberLabel(label);
  };

  const subTaskTextMaker = (selectedSubTask: string[]) => {
    if (selectedSubTask.length === 0) return "2차직무 선택";
    return selectedSubTask.join(", ");
  };

  const titleMaker = (task: string, contract: string, hire: number) => {
    const taskPart = task ? `[${task}]` : "1차직무";
    const contractPart = contract ? `${contract}` : "{계약형태}";
    let hireNumberPart;

    if (hire) {
      if (hire < 0) hireNumberPart = hireNumberLabel;
      else hireNumberPart = hire;
    } else {
      hireNumberPart = "{명수}";
    }

    if (!(!!task || !!contract || !!hire)) return "직무 카드";
    return `${taskPart} ${contractPart} ${hireNumberPart}명 채용`;
  };

  useEffect(() => {
    const hireNumber = watch("position_arr")[positionIndex].hire_number;

    if (hireNumber === -1) setHireNumberLabel("0");
    else if (hireNumber === -2) setHireNumberLabel("0");
    else if (hireNumber === -3) setHireNumberLabel("0");
    else setHireNumberLabel(String(hireNumber));
  }, [watch, positionIndex]);

  return (
    <>
      <div css={cssObj.titleContainer}>
        <strong css={cssObj.positionTitle}>
          {titleMaker(
            watch("position_arr")[positionIndex].task_main,
            watch("position_arr")[positionIndex].contract_type,
            watch("position_arr")[positionIndex].hire_number || 0
          )}
        </strong>
        <div css={cssObj.positionButtonContainer}>
          <SharedButton
            radius="circle"
            fontColor={COLORS.GRAY30}
            backgroundColor={COLORS.GRAY80}
            size="medium"
            text={isCardOpen ? "카드접기" : "카드열기"}
            iconObj={{ icon: isCardOpen ? FiChevronUp : FiChevronDown, location: "left" }}
            onClickHandler={() => {
              setIsCardOpen((prev) =>
                prev.map((item, index) => {
                  if (index === positionIndex) {
                    return !prev[positionIndex];
                  }
                  return item;
                })
              );
            }}
          />
          <SharedButton
            radius="round"
            fontColor={`${COLORS.GRAY10}`}
            borderColor={`${COLORS.GRAY70}`}
            backgroundColor={`${COLORS.GRAY100}`}
            size="medium"
            text="직무 카드 복사"
            onClickHandler={() => {
              appendPosition({ ...watch("position_arr")[positionIndex] });
              setIsCardOpen((prev) => [...prev.slice(0, positionIndex + 1), false, ...prev.slice(positionIndex + 1)]);
            }}
          />
          <SharedButton
            radius="round"
            fontColor={`${COLORS.GRAY10}`}
            backgroundColor="#FFC8C8"
            size="medium"
            text="직무 삭제"
            onClickHandler={() => {
              removePosition(positionIndex);
              setIsCardOpen((prev) => prev.filter((item, index) => index !== positionIndex));
            }}
          />
        </div>
      </div>
      <div css={cssObj.container}>
        <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.task_main))}>채용 직무</p>
        <div css={cssObj.taskInputContainer}>
          <div>
            <div css={cssObj.taskContainer}>
              <button
                css={cssObj.input(20)}
                type="button"
                onClick={() => {
                  if (isMainTaskOpen && watch("position_arr")[positionIndex].task_main === "") {
                    setError(`position_arr.${positionIndex}.task_main`, { type: "required" });
                  }
                  setIsMainTaskOpen((prev) => !prev);
                }}
              >
                {selectedSubTaskObj ? `${selectedSubTaskObj.mainTask}` : "1차직무 선택"}
                {isMainTaskOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              <div css={cssObj.taskList(isMainTaskOpen)}>
                {taskArr.map((taskObj) => (
                  <button
                    type="button"
                    css={cssObj.option}
                    key={`${id}${taskObj.mainTask}`}
                    value={taskObj.mainTask}
                    onClick={() => {
                      mainTaskClickHandler(taskObj.mainTask);
                    }}
                  >
                    {taskObj.mainTask}
                  </button>
                ))}
              </div>
            </div>
            <p css={cssObj.desc(Boolean(formState.errors.position_arr?.[positionIndex]?.task_main))}>
              {formState.errors.position_arr?.[positionIndex]?.task_main
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
                  setIsSubTaskOpen((prev) => !prev);
                }}
              >
                {subTaskTextMaker(watch("position_arr")[positionIndex].task_sub_arr || [])}
                {isSubTaskOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              <div css={cssObj.taskList(isSubTaskOpen)}>
                {selectedSubTaskObj?.subTaskArr.map((subTask) => (
                  <button
                    type="button"
                    css={cssObj.option}
                    key={`${id}${subTask}`}
                    value={subTask}
                    onClick={() => {
                      subTaskClickHandler(subTask);
                    }}
                  >
                    <CheckBox
                      isChecked={watch("position_arr")[positionIndex].task_sub_arr?.includes(subTask) || false}
                    />
                    {subTask}
                  </button>
                ))}
              </div>
            </div>
            <p css={cssObj.desc(false)}>2차 직무는 중복 선택이 가능합니다</p>
          </div>
        </div>
      </div>
      {isCardOpen && (
        <>
          <div css={cssObj.container}>
            <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.task_detail_arr))}>
              세부 직무 내용
            </p>
            <div css={cssObj.inputContainer}>
              {taskDetailArr.fields.map((item, index) => (
                <div key={`taskDetailArr${item.id}`}>
                  <label css={cssObj.inputLabel} htmlFor={`taskDetailArr${item.id}`}>
                    <input
                      id={`taskDetailArr${item.id}`}
                      css={cssObj.erasableInput(47)}
                      onFocus={() => {
                        clearErrors(`position_arr.${positionIndex}.task_detail_arr.${index}`);
                      }}
                      placeholder="합격시 구체적으로 어떤 일을 하게 되는지 명시해주세요 (최대 70자)"
                      maxLength={70}
                      {...register(`position_arr.${positionIndex}.task_detail_arr.${index}.value`, {
                        required: "모든 칸이 채워져야 합니다",
                        onBlur: (blurEvent) => {
                          if (blurEvent.target.value.trim().length === 0 && blurEvent.target.value.length > 0) {
                            setValue(`position_arr.${positionIndex}.task_detail_arr.${index}.value`, "");
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
                    {formState?.errors?.position_arr?.[positionIndex]?.task_detail_arr?.[index] &&
                      formState?.errors?.position_arr?.[positionIndex]?.task_detail_arr?.[index]?.value?.message}
                  </p>
                </div>
              ))}
              <AddFieldButton
                onClickHandler={() => {
                  if (taskDetailArr.fields.length < 10) taskDetailArr.append({ value: "" });
                }}
              />
            </div>
          </div>
          <div css={cssObj.container}>
            <p css={cssObj.inputTitle(Boolean(formState.errors.position_arr?.[positionIndex]?.hire_number))}>
              채용 인원
            </p>
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
              <div css={cssObj.hireNumberInputContainer}>
                {(watch("position_arr")[positionIndex].hire_number || 1) < 0 ? (
                  <>
                    <div css={cssObj.hireNumberCover}>{hireNumberLabel}</div>명
                    <button
                      css={cssObj.hireNumberResetButton}
                      type="button"
                      onClick={() => {
                        setValue(`position_arr.${positionIndex}.hire_number`, null);
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
                      {...register(`position_arr.${positionIndex}.hire_number`, {
                        valueAsNumber: true,
                        required: "채용 인원은 필수 입력 값입니다",
                        max: { value: 9999, message: "최대값은 9999명입니다" },
                      })}
                    />
                    명
                  </>
                )}
              </div>
            </div>
            <p css={cssObj.errorMessage}>
              {formState.errors.position_arr?.[positionIndex]?.hire_number &&
                formState.errors.position_arr?.[positionIndex]?.hire_number?.message}
            </p>
          </div>
        </>
      )}
    </>
  );
};
