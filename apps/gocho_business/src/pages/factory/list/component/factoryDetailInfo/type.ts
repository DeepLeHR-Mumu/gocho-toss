import { UseFormReturn } from "react-hook-form";

import { FactoryRegisterDef } from "../../part/registerPart/type";

export interface FactoryDetailInfoProps {
  formObj: UseFormReturn<FactoryRegisterDef>;
  totalWorkerNumber: number;
}
