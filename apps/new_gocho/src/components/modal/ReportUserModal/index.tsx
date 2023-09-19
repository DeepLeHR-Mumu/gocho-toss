import { useForm, SubmitHandler } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { Button, Radio } from "shared-ui/deeple-ds";

import { useToast } from "@/globalStates";
import { useReportUser } from "@/apis/users";
import { ModalWithTitle } from "@/components/common/ModalWithTitle";
import { companyCommentArrKeyObj } from "@/constants/queryKeyFactory/company/commentArrKeyObj";

import { ReportUserModalProps, ReportFormValues } from "./type";
import { REPORT_REASON_ARR } from "./constant";
import { cssObj } from "./style";

export const ReportUserModal = ({ companyId, userId, closeHandler }: ReportUserModalProps) => {
  const queryClient = useQueryClient();
  const { mutate: postReportUser } = useReportUser();
  const { register, handleSubmit } = useForm<ReportFormValues>();
  const { setToastMessage } = useToast();

  const submitReport: SubmitHandler<ReportFormValues> = (reportObj) => {
    if (userId !== undefined) {
      postReportUser(
        { userId, reason: reportObj.reason },
        {
          onSuccess: () => {
            setToastMessage("신고가 접수되었습니다.");

            if (companyId !== undefined) {
              queryClient.invalidateQueries(companyCommentArrKeyObj.commentArr({ companyId }));
            }
          },
          onSettled: () => {
            if (closeHandler) {
              closeHandler();
            }
          },
        }
      );
    }
  };

  return (
    <ModalWithTitle width={25} title="신고하기" closeHandler={closeHandler}>
      <form onSubmit={handleSubmit(submitReport)}>
        <div css={cssObj.wrapper}>
          {REPORT_REASON_ARR.map((reason) => (
            <div key={reason} css={cssObj.rowWrapper}>
              <Radio value={reason} {...register("reason")} />
              <span>{reason}</span>
            </div>
          ))}
        </div>
        <Button type="submit" size="small" fill>
          확인
        </Button>
      </form>
    </ModalWithTitle>
  );
};
