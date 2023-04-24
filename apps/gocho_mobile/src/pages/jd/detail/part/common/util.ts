import { getJobTitleCreatorDef } from "./type";

export const getJobTitleCreator: getJobTitleCreatorDef = (positionObj) => {
  return `[${positionObj.task.mainTask}]|${positionObj.contractType.type} ${positionObj.hireNumber}명 채용`;
};
