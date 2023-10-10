import { RequestObjDef as ReportUserObjDef } from "@/apis/users/user/useReportUser/type";
import { ModalWithTitleProps } from "@/components/common/ModalWithTitle/type";

export interface ReportUserModalProps extends Pick<ModalWithTitleProps, "closeHandler"> {
  userId?: number;
  companyId?: number;
}

export type ReportFormValues = Pick<ReportUserObjDef, "reason">;
