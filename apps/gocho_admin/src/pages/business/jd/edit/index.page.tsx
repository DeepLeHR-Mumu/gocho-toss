import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

import { jdArrKeyObj } from "@api/jd/useJdArr/type";
import { useJdDetail } from "@api/jd/useJdDetail";
import { useEditJdRequest } from "@api/jd/useEditJdRequest";
import { useAcceptJd } from "@api/jd/useAcceptJd";
import { useRejectJd } from "@api/jd/useRejectJd";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { JdPart } from "./part/jdPart";
import { cssObj } from "./style";
import { RejectFormValues } from "./type";

const JdEditDetail: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const jdId = Number(router.query.id);

  const { register, handleSubmit } = useForm<RejectFormValues>();

  const { data: jdBeforeData, isLoading: isBeforeLoading, isError: isBeforeError } = useJdDetail({ id: jdId });
  const { data: jdAfterData, isLoading: isAfterLoading, isError: isAfterError } = useEditJdRequest({ id: jdId });
  const { mutate: acceptJdMutate } = useAcceptJd();
  const { mutate: rejectJdMutate } = useRejectJd();

  const acceptJdHandler = () => {
    acceptJdMutate(
      { jdId, type: "update" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(jdArrKeyObj.all);
        },
      }
    );
  };

  const rejectJdHandler: SubmitHandler<RejectFormValues> = (formData) => {
    rejectJdMutate(
      { jdId, reason: formData.reason, type: "update" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(jdArrKeyObj.all);
        },
      }
    );
  };

  if (!jdBeforeData || !jdAfterData || isBeforeLoading || isAfterLoading) {
    return <LoadingScreen />;
  }

  if (isBeforeError || isAfterError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공고 변경 요청 확인</h2>
      <div css={cssObj.jdCompareContainer}>
        <div css={cssObj.jdContainer}>
          <strong css={cssObj.label}>BEFORE</strong>
          <JdPart jd={jdBeforeData} />
        </div>
        <div css={cssObj.jdContainer}>
          <strong css={cssObj.label}>AFTER</strong>
          <JdPart jd={jdAfterData} />
        </div>
      </div>
      <div css={cssObj.buttonContainer}>
        <button
          type="submit"
          css={cssObj.acceptButton}
          onClick={() => {
            return acceptJdHandler;
          }}
        >
          수정 승인
        </button>
        <form css={cssObj.rejectForm} onSubmit={handleSubmit(rejectJdHandler)}>
          <textarea
            css={cssObj.rejectReasonBox}
            placeholder="반려사유를 입력해주세요."
            {...register("reason", { required: true })}
          />
          <button type="submit" css={cssObj.rejectButton}>
            수정 반려
          </button>
        </form>
      </div>
    </main>
  );
};

export default JdEditDetail;
