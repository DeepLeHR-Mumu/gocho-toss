import { FunctionComponent, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { PositionTitleInfoPartProps } from "./type";
import { taskArr } from "./constant";
import { cssObj } from "./style";

export const PositionTitleInfoPart: FunctionComponent<PositionTitleInfoPartProps> = ({
  id,
  index,
  jobForm,
  append,
  remove,
}) => {
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);

  const mainTask = taskArr.find((task) => jobForm.watch("position_arr")[index].task_main === task.mainTask);

  return (
    <div>
      <div css={cssObj.titleContainer}>
        <strong css={cssObj.positionTitle}>모집할 직무 카드 제목</strong>
        <div css={cssObj.buttonContainer}>
          <button
            css={cssObj.openCardButton}
            type="button"
            onClick={() => {
              setIsCardOpen((prev) => !prev);
            }}
          >
            {isCardOpen ? (
              <>
                <FiChevronUp />
                카드닫기
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
            onClick={() => append({ ...jobForm.watch("position_arr")[index] })}
          >
            직무 카드 복사
          </button>
          <button type="button" css={cssObj.deletePositionButton} onClick={() => remove(index)}>
            직무 삭제
          </button>
        </div>
      </div>
      <div>
        <p>채용 직무</p>
        <div css={cssObj.inputContainer}>
          <div>
            <select css={cssObj.inputLine} {...jobForm.register(`position_arr.${index}.task_main`, { required: true })}>
              <option value="">1차직무 선택</option>
              {taskArr.map((task) => (
                <option key={`${id}${task.mainTask}`} value={task.mainTask}>
                  {task.mainTask}
                </option>
              ))}
            </select>
            <p>1차 직무 선택 후 2차 직무가 표시됩니다</p>
          </div>
          <div>
            <select
              css={cssObj.inputLine}
              multiple
              {...jobForm.register(`position_arr.${index}.task_sub_arr`, { required: true })}
            >
              <option value="" disabled>
                2차직무 선택
              </option>
              {mainTask?.subTaskArr.map((subTask) => (
                <option key={`${id}${subTask}`} value={subTask}>
                  {subTask}
                </option>
              ))}
            </select>
            <p>2차 직무는 중복 선택 가능합니다</p>
          </div>
        </div>
      </div>
      <div>
        <p>세부 직무 내용</p>
        <input
          css={cssObj.inputLine}
          placeholder="세부 직무 내용"
          {...jobForm.register(`position_arr.${index}.task_detail_arr`)}
        />
      </div>
    </div>
  );
};
