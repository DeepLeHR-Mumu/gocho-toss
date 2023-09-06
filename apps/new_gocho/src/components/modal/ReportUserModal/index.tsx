import { useForm, SubmitHandler } from "react-hook-form";

import { Button, Radio } from "shared-ui/deeple-ds";

import { useReportUser } from "@/apis/users";
import { ModalWithTitle } from "@/components/common/ModalWithTitle";

import { ReportUserModalProps, ReportFormValues } from "./type";
import { REPORT_REASON_ARR } from "./constant";
import { cssObj } from "./style";

export const ReportUserModal = ({ companyId, userId, closeHandler }: ReportUserModalProps) => {
  const { mutate: postReportUser } = useReportUser({ companyId });
  const { register, handleSubmit } = useForm<ReportFormValues>();

  const submitReport: SubmitHandler<ReportFormValues> = (reportObj) => {
    postReportUser(
      { userId, reason: reportObj.reason },
      {
        // TODO 필요 시 onSuccess, onError 추가
      }
    );
    if (closeHandler) {
      closeHandler();
    }
  };

  return (
    <ModalWithTitle width={25} title="신고하기" closeHandler={closeHandler}>
      <form onSubmit={handleSubmit(submitReport)}>
        <div css={cssObj.wrapper}>
          {REPORT_REASON_ARR.map((reason) => {
            return (
              <div key={reason} css={cssObj.rowWrapper}>
                <Radio value={reason} {...register("reason")} />
                <span>{reason}</span>
              </div>
            );
          })}
        </div>
        <Button type="submit" size="small" fill>
          확인
        </Button>
      </form>
    </ModalWithTitle>
  );
};
