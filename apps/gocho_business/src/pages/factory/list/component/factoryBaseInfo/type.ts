import { FormState, UseFormRegister, UseFormSetValue } from "react-hook-form";

import { FactoryRegisterDef } from "../../part/registerPart/type";

export interface FactoryBaseInfoProps {
  register: UseFormRegister<FactoryRegisterDef>;
  setValue: UseFormSetValue<FactoryRegisterDef>;
  formState: FormState<FactoryRegisterDef>;
}
