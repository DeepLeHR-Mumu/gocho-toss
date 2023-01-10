import { UseFormReturn } from "react-hook-form";

import { FactoryRegisterDef } from "../../part/registerPart/type";

export interface FactoryBaseInfoProps {
  formObj: UseFormReturn<FactoryRegisterDef>;
  reqeustStatus?: "진행중" | "등록대기" | "수정대기" | "등록반려" | "수정반려";
}
