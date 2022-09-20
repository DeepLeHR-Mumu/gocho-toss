import { UserFilterDef } from "../type/userFilter";

export const selector = (data: UserFilterDef) => {
  return {
    possibleEdu: data.possibleEdu,
    place: data.place,
    requiredExp: data.requiredExp,
    contractType: data.contractType,
    rotation: data.rotation,
    industry: data.industry,
    task: data.task,
  };
};
