import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { jdArrKeyObj } from "@api/jd/useJdArr/type";
import { useJdDetail } from "@api/jd/useJdDetail";
import { useEditJdRequest } from "@api/jd/useEditJdRequest";
import { useAcceptJd } from "@api/jd/useAcceptJd";
import { useRejectJd } from "@api/jd/useRejectJd";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { cssObj } from "./style";

const JdEditDetail: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const jdId = Number(router.query.id);

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

  const rejectJdHandler = () => {
    rejectJdMutate(
      { jdId, type: "update" },
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
        <button
          type="submit"
          css={cssObj.rejectButton}
          onClick={() => {
            return rejectJdHandler;
          }}
        >
          수정 반려
        </button>
      </div>
    </main>
  );
};

export default JdEditDetail;
