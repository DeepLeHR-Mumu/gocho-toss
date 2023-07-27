import { useState, ReactElement } from "react";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

import { useJdDetail, useEditJdRequest, useAcceptModifyJd, useRejectModifyJd } from "@/api";
import { jdArrKeyObj } from "@/api/jd/useJdArr/type";
import { mainContainer, pageTitle } from "@/style/commonStyles";
import { ErrorScreen, LoadingScreen, GlobalLayout } from "@/component";
import type { NextPageWithLayout } from "@/types";

import { JdPart } from "./part/jdPart";
import { cssObj } from "./style";
import { RejectFormValues } from "./type";

const JdEditDetail: NextPageWithLayout = () => {
  const [checkMsg, setCheckMsg] = useState<string>();

  const queryClient = useQueryClient();
  const router = useRouter();
  const jdId = Number(router.query.jdId);

  const { register, handleSubmit } = useForm<RejectFormValues>();

  const { data: jdBeforeData, isLoading: isBeforeLoading, isError: isBeforeError } = useJdDetail({ id: jdId });
  const { data: jdAfterData, isLoading: isAfterLoading, isError: isAfterError } = useEditJdRequest({ id: jdId });
  const { mutate: acceptJdMutate } = useAcceptModifyJd();
  const { mutate: rejectJdMutate } = useRejectModifyJd();

  const acceptJdHandler = () => {
    acceptJdMutate(
      { jdId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(jdArrKeyObj.all);
          setCheckMsg("공고 수정 요청이 승인되었습니다!");
        },
        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 관계자에게 문의해주세요.");
        },
      }
    );
  };

  const rejectJdHandler: SubmitHandler<RejectFormValues> = (formData) => {
    rejectJdMutate(
      { jdId, reason: formData.reason },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(jdArrKeyObj.all);
          setCheckMsg("공고 수정 요청이 반려되었습니다!");
        },
        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 관계자에게 문의해주세요.");
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
            acceptJdHandler();
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
      <p css={cssObj.checkMessage}>{checkMsg}</p>
    </main>
  );
};

JdEditDetail.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdEditDetail;
