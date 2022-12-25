import { FunctionComponent } from "react";

import { PositionTitleInfoPartProps } from "./type";
import { taskArr } from "./constant";
import { cssObj } from "./style";

export const PositionTitleInfoPart: FunctionComponent<PositionTitleInfoPartProps> = ({ id, index, jobForm }) => {
  const mainTask = taskArr.find((task) => jobForm.watch("position_arr")[index].task_main === task.mainTask);

  return (
    <>
      <div>This is PositionTitleInfoPart!!</div>
      <div>
        <p>채용 직무</p>
        <div css={cssObj.inputContainer}>
          <div>
            <select {...jobForm.register(`position_arr.${index}.task_main`, { required: true })}>
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
            <select multiple {...jobForm.register(`position_arr.${index}.task_sub_arr`, { required: true })}>
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
    </>
  );
};
