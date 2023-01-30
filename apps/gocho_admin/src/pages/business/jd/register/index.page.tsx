import { NextPage } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { BUSINESS_JD_LIST_URL } from "@constant/internalURL";
import { jdArrKeyObj } from "@api/jd/useJdArr/type";
import { useJdDetail } from "@api/jd/useJdDetail";
import { useAcceptJd } from "@api/jd/useAcceptJd";
import { useRejectJd } from "@api/jd/useRejectJd";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { JdPart } from "./part/jdPart";
import { cssObj } from "./style";
import { RejectFormValues } from "./type";

const JdRegisterDetail: NextPage = () => {
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
          router.push(`${BUSINESS_JD_LIST_URL}?page=1`);
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
          router.push(`${BUSINESS_JD_LIST_URL}?page=1`);
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
    </main>
  );
};

export default JdRegisterDetail;
