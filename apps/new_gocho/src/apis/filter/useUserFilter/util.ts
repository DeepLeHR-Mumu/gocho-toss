import { UserFilterDef } from "../type/userFilter";

export const selector = (data: UserFilterDef) => ({
    possibleEdu: data.possible_edu,
    place: data.place,
    requiredExp: data.required_exp,
    contractType: data.contract_type,
    rotation: data.rotation,
    industry: data.industry,
    task: data.task,
  });
