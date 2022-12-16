import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { useFactoryDetail } from "@api/factory/useFactoryDetail";
import { useEditFactoryRequest } from "@api/factory/useEditFactoryRequest";
import { useAcceptFactory } from "@api/factory/useAcceptFactory";
import { useRejectFactory } from "@api/factory/useRejectFactory";
import { factoryArrKeyObj } from "@api/factory/useFactoryArr/type";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { acceptButton, buttonContainer, rejectButton } from "./style";

const FactoryEditDetail: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const factoryId = Number(router.query.id);

  const {
    data: factoryBeforeData,
    isLoading: isBeforeLoading,
    isError: isBeforeError,
  } = useFactoryDetail({ factoryId });

  const {
    data: factoryAfterData,
    isLoading: isAfterLoading,
    isError: isAfterError,
  } = useEditFactoryRequest({ factoryId });

  const { mutate: acceptFactoryMutate } = useAcceptFactory();
  const { mutate: rejectFactoryMutate } = useRejectFactory();

  const acceptFactoryHandler = () => {
    acceptFactoryMutate(
      { factoryId, type: "update" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(factoryArrKeyObj.all);
        },
      }
    );
  };

  const rejectFactoryHandler = () => {
    rejectFactoryMutate(
      { factoryId, type: "update" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(factoryArrKeyObj.all);
        },
      }
    );
  };

  if (!factoryBeforeData || !factoryAfterData || isBeforeLoading || isAfterLoading) {
    return <LoadingScreen />;
  }

  if (isBeforeError || isAfterError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공장 변경 요청 확인</h2>
      <div css={buttonContainer}>
        <button
          type="submit"
          css={acceptButton}
          onClick={() => {
            return acceptFactoryHandler;
          }}
        >
          수정 승인
        </button>
        <button
          type="submit"
          css={rejectButton}
          onClick={() => {
            return rejectFactoryHandler;
          }}
        >
          수정 반려
        </button>
      </div>
    </main>
  );
};

export default FactoryEditDetail;
