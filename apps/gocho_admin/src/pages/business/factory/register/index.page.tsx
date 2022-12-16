import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { useFactoryDetail } from "@api/factory/useFactoryDetail";
import { useAcceptFactory } from "@api/factory/useAcceptFactory";
import { useRejectFactory } from "@api/factory/useRejectFactory";
import { factoryArrKeyObj } from "@api/factory/useFactoryArr/type";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { acceptButton, buttonContainer, rejectButton } from "./style";

const FactoryRegisterDetail: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const factoryId = Number(router.query.id);

  const { data: factoryDataObj, isLoading, isError } = useFactoryDetail({ factoryId });
  const { mutate: acceptFactoryMutate } = useAcceptFactory();
  const { mutate: rejectFactoryMutate } = useRejectFactory();

  const acceptFactoryHandler = () => {
    acceptFactoryMutate(
      { factoryId, type: "upload" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(factoryArrKeyObj.all);
        },
      }
    );
  };

  const rejectFactoryHandler = () => {
    rejectFactoryMutate(
      { factoryId, type: "upload" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(factoryArrKeyObj.all);
        },
      }
    );
  };

  if (!factoryDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>공장 등록 요청 확인</h2>
      <div css={buttonContainer}>
        <button
          type="submit"
          css={acceptButton}
          onClick={() => {
            return acceptFactoryHandler;
          }}
        >
          등록 승인
        </button>
        <button
          type="submit"
          css={rejectButton}
          onClick={() => {
            return rejectFactoryHandler;
          }}
        >
          등록 반려
        </button>
      </div>
    </main>
  );
};

export default FactoryRegisterDetail;
