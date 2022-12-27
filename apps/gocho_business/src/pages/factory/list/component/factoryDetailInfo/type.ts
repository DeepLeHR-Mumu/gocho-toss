import { FormState, UseFormRegister } from "react-hook-form";

import { FactoryRegisterDef } from "../../part/registerPart/type";

export interface FactoryDetailInfoProps {
  register: UseFormRegister<FactoryRegisterDef>;
  totalWorkerNumber: number;
  formState: FormState<FactoryRegisterDef>;
}
