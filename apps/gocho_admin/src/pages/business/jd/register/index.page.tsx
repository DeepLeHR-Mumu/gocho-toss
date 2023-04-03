import { useState, ReactElement } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { jdArrKeyObj } from "@/api/jd/useJdArr/type";
import { useJdDetail } from "@/api/jd/useJdDetail";
import { useAcceptJd } from "@/api/jd/useAcceptJd";
import { useRejectJd } from "@/api/jd/useRejectJd";
import { mainContainer, pageTitle } from "@/style/commonStyles";
import { ErrorScreen, LoadingScreen, GlobalLayout } from "@/component";
import type { NextPageWithLayout } from "@/types";

import { JdPart } from "./part/jdPart";
import { cssObj } from "./style";
import { RejectFormValues } from "./type";

const JdRegisterDetail: NextPageWithLayout = () => {
  const [checkMsg, setCheckMsg] = useState<string>();

  const queryClient = useQueryClient();
  const router = useRouter();
  const jdId = Number(router.query.id);

  const { register, handleSubmit } = useForm<RejectFormValues>();

  const { data: jdDataObj, isLoading, isError } = useJdDetail({ id: jdId });
  const { mutate: acceptJdMutate } = useAcceptJd();
  const { mutate: rejectJdMutate } = useRejectJd();

  const acceptJdHandler = () => {
    acceptJdMutate(
      { jdId, type: "upload" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(jdArrKeyObj.all);
          setCheckMsg("공고 등록 요청이 승인되었습니다!");
        },
        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 관계자에게 문의해주세요.");
        },
      }
    );
  };

  const rejectJdHandler: SubmitHandler<RejectFormValues> = (formData) => {
    rejectJdMutate(
      { jdId, reason: formData.reason, type: "upload" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(jdArrKeyObj.all);
          setCheckMsg("공고 등록 요청이 반려되었습니다!");
        },
        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 관계자에게 문의해주세요.");
        },
      }
    );
  };

  if (!jdDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공고 등록 요청 확인</h2>
      <JdPart jd={jdDataObj} />
      <div css={cssObj.buttonContainer}>
        <button
          type="submit"
          css={cssObj.acceptButton}
          onClick={() => {
            acceptJdHandler();
          }}
        >
          등록 승인
        </button>
        <form css={cssObj.rejectForm} onSubmit={handleSubmit(rejectJdHandler)}>
          <textarea
            css={cssObj.rejectReasonBox}
            placeholder="반려사유를 입력해주세요."
            {...register("reason", { required: true })}
          />
          <button type="submit" css={cssObj.rejectButton}>
            등록 반려
          </button>
        </form>
      </div>
      <p css={cssObj.checkMessage}>{checkMsg}</p>
    </main>
  );
};

JdRegisterDetail.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdRegisterDetail;
