import { ResponseObjDef } from "./type";

export const managerArrSelector = ({ data }: ResponseObjDef) =>
  data.map((manager) => ({
    email: manager.email,
    name: manager.name,
    department: manager.department,
    createdTime: manager.created_time,
  }));
