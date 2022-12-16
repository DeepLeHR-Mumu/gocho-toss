import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { jdArrKeyObj } from "@api/jd/useJdArr/type";
import { useJdDetail } from "@api/jd/useJdDetail";
import { useAcceptJd } from "@api/jd/useAcceptJd";
import { useRejectJd } from "@api/jd/useRejectJd";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { buttonContainer, acceptButton, rejectButton } from "./style";

const JdRegisterDetail: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const jdId = Number(router.query.id);

  const { data: jobDataObj, isLoading, isError } = useJdDetail({ id: jdId });
  const { mutate: acceptJdMutate } = useAcceptJd();
  const { mutate: rejectJdMutate } = useRejectJd();

  const acceptJdHandler = () => {
    acceptJdMutate(
      { jdId, type: "upload" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(jdArrKeyObj.all);
        },
      }
    );
  };

  const rejectJdHandler = () => {
    rejectJdMutate(
      { jdId, type: "upload" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(jdArrKeyObj.all);
        },
      }
    );
  };

  if (!jobDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공고 등록 요청 확인</h2>
      <div css={buttonContainer}>
        <button
          type="submit"
          css={acceptButton}
          onClick={() => {
            return acceptJdHandler;
          }}
        >
          등록 승인
        </button>
        <button
          type="submit"
          css={rejectButton}
          onClick={() => {
            return rejectJdHandler;
          }}
        >
          등록 반려
        </button>
      </div>
    </main>
  );
};

export default JdRegisterDetail;
