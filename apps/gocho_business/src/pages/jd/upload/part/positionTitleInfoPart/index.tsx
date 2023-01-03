import { FunctionComponent, useState } from "react";
import { FiChevronDown, FiChevronUp, FiMinus } from "react-icons/fi";
import { useFieldArray } from "react-hook-form";
import { CheckBox } from "shared-ui/common/atom/checkbox";
import { PositionTitleInfoPartProps } from "./type";
import { taskArr } from "./constant";
import { cssObj } from "./style";

export const PositionTitleInfoPart: FunctionComponent<PositionTitleInfoPartProps> = ({
  id,
  positionIndex,
  jobForm,
  appendPosition,
  removePosition,
  control,
  isCardOpen,
  setIsCardOpen,
}) => {
  const [isMainTaskOpen, setIsMainTaskOpen] = useState<boolean>(false);
  const [isSubTaskOpen, setIsSubTaskOpen] = useState<boolean>(false);
  const [hireNumberLabel, setHireNumberLabel] = useState<string>("");

  const taskDetailArr = useFieldArray({
    control,
    name: `position_arr.${positionIndex}.task_detail_arr`,
  });

  const selectedSubTaskObj = taskArr.find(
    (task) => jobForm.watch("position_arr")[positionIndex].task_main === task.mainTask
  );

  const mainTaskClickHandler = (task: string) => {
    jobForm.setValue(`position_arr.${positionIndex}.task_main`, task);
    jobForm.setValue(`position_arr.${positionIndex}.task_sub_arr`, []);
    setIsMainTaskOpen(false);
  };

  const subTaskClickHandler = (subTask: string) => {
    const isInList = jobForm.watch("position_arr")[positionIndex].task_sub_arr.includes(subTask);
    if (isInList) {
      jobForm.setValue(`position_arr.${positionIndex}.task_sub_arr`, [
        ...jobForm.watch("position_arr")[positionIndex].task_sub_arr.filter((element) => element !== subTask),
      ]);
    } else {
      jobForm.setValue(`position_arr.${positionIndex}.task_sub_arr`, [
        ...jobForm.watch("position_arr")[positionIndex].task_sub_arr,
        subTask,
      ]);
    }
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

  return (
    <>
      <div css={cssObj.titleContainer}>
        <strong css={cssObj.positionTitle}>
          {titleMaker(
            jobForm.watch("position_arr")[positionIndex].task_main,
            jobForm.watch("position_arr")[positionIndex].contract_type,
            jobForm.watch("position_arr")[positionIndex].hire_number
          )}
        </strong>
        <div css={cssObj.positionButtonContainer}>
          <button
            css={cssObj.openCardButton}
            type="button"
            onClick={() => {
              setIsCardOpen((prev) =>
                prev.map((item, index) => {
                  if (index === positionIndex) {
                    return !prev[positionIndex];
                  }
                  return item;
                })
              );
            }}
          >
            {isCardOpen ? (
              <>
                <FiChevronUp />
                카드접기
              </>
            ) : (
              <>
                <FiChevronDown />
                카드열기
              </>
            )}
          </button>
          <button
            type="button"
            css={cssObj.copyPositionButton}
            onClick={() => {
              appendPosition({ ...jobForm.watch("position_arr")[positionIndex] });
              setIsCardOpen((prev) => [...prev.slice(0, positionIndex + 1), false, ...prev.slice(positionIndex + 1)]);
            }}
          >
            직무 카드 복사
          </button>
          <button
            type="button"
            css={cssObj.deletePositionButton}
            onClick={() => {
              removePosition(positionIndex);
              setIsCardOpen((prev) => prev.filter((item, index) => index !== positionIndex));
            }}
          >
            직무 삭제
          </button>
        </div>
      </div>
      <div css={cssObj.container}>
        <p>채용 직무</p>
        <div css={cssObj.taskInputContainer}>
          <div>
            <div css={cssObj.taskContainer}>
              <button
                css={cssObj.input(20)}
                type="button"
                onClick={() => {
                  setIsMainTaskOpen((prev) => !prev);
                }}
              >
                {selectedSubTaskObj ? `${selectedSubTaskObj.mainTask}` : "1차직무 선택"}
                {isMainTaskOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              <div css={cssObj.taskList(isMainTaskOpen)}>
                {taskArr.map((task) => (
                  <button
                    type="button"
                    css={cssObj.option}
                    key={`${id}${task.mainTask}`}
                    value={task.mainTask}
                    onClick={() => {
                      mainTaskClickHandler(task.mainTask);
                    }}
                  >
                    {task.mainTask}
                  </button>
                ))}
              </div>
            </div>
            <p css={cssObj.desc}>1차 직무 선택 후 2차 직무가 표시됩니다</p>
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
                2차직무 선택
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
                    <CheckBox isChecked={jobForm.watch("position_arr")[positionIndex].task_sub_arr.includes(subTask)} />
                    {subTask}
                  </button>
                ))}
              </div>
            </div>
            <p css={cssObj.desc}>2차 직무는 중복 선택 가능합니다</p>
          </div>
        </div>
      </div>
      {isCardOpen && (
        <>
          <div css={cssObj.container}>
            <p>세부 직무 내용</p>
            <div css={cssObj.inputContainer}>
              {taskDetailArr.fields.map((item, index) => (
                <label css={cssObj.inputLabel(47)} key={`taskDetailArr${item.id}`} htmlFor={`taskDetailArr${item.id}`}>
                  <input
                    id={`taskDetailArr${item.id}`}
                    css={cssObj.inputWithButton}
                    placeholder="합격시 구체적으로 어떤 일을 하게 되는지 명시해주세요"
                    {...jobForm.register(`position_arr.${positionIndex}.task_detail_arr.${index}.value`)}
                  />
                  <button
                    type="button"
                    css={cssObj.deleteInputButton}
                    onClick={() => {
                      taskDetailArr.remove(positionIndex);
                    }}
                  >
                    <FiMinus />
                  </button>
                </label>
              ))}
              <button
                type="button"
                onClick={() => {
                  taskDetailArr.append({ value: "" });
                }}
              >
                + 입력칸 추가
              </button>
            </div>
          </div>
          <div css={cssObj.container}>
            <p>채용 인원</p>
            <div css={cssObj.hireNumberContainer}>
              <button
                type="button"
                css={cssObj.hireNumberButton}
                onClick={() => {
                  jobForm.setValue(`position_arr.${positionIndex}.hire_number`, -1);
                  setHireNumberLabel("0");
                }}
              >
                0명
              </button>
              <button
                type="button"
                css={cssObj.hireNumberButton}
                onClick={() => {
                  jobForm.setValue(`position_arr.${positionIndex}.hire_number`, -2);
                  setHireNumberLabel("00");
                }}
              >
                00명
              </button>
              <button
                type="button"
                css={cssObj.hireNumberButton}
                onClick={() => {
                  jobForm.setValue(`position_arr.${positionIndex}.hire_number`, -3);
                  setHireNumberLabel("000");
                }}
              >
                000명
              </button>
              <div css={cssObj.hireNumberInputContainer}>
                {/* TODO: 0, 00, 000명 버튼 누른 다음, 위에 클릭 하고 한번 더 눌러야 input에 포커싱이 됨 */}
                {jobForm.watch("position_arr")[positionIndex].hire_number < 0 ? (
                  <>
                    <button
                      css={cssObj.hireNumberCover}
                      type="button"
                      onClick={() => {
                        jobForm.setValue(`position_arr.${positionIndex}.hire_number`, 0);
                      }}
                    >
                      {hireNumberLabel}
                    </button>
                    명
                  </>
                ) : (
                  <>
                    <input
                      type="number"
                      css={cssObj.input(6)}
                      {...jobForm.register(`position_arr.${positionIndex}.hire_number`, {
                        valueAsNumber: true,
                        required: true,
                      })}
                    />
                    명
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
