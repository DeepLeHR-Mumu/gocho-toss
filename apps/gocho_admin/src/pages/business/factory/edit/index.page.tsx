import { NextPage } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { useFactoryDetail } from "@api/factory/useFactoryDetail";
import { useEditFactoryRequest } from "@api/factory/useEditFactoryRequest";
import { useAcceptFactory } from "@api/factory/useAcceptFactory";
import { useRejectFactory } from "@api/factory/useRejectFactory";
import { factoryArrKeyObj } from "@api/factory/useFactoryArr/type";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { FactoryPart } from "./part/factoryPart";
import { cssObj } from "./style";
import { RejectFormValues } from "./type";

const FactoryEditDetail: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const factoryId = Number(router.query.id);

  const { register, handleSubmit } = useForm<RejectFormValues>();

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

  const rejectFactoryHandler: SubmitHandler<RejectFormValues> = (formData) => {
    rejectFactoryMutate(
      { factoryId, reason: formData.reason, type: "upload" },
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
      <div css={cssObj.factoryCompareContainer}>
        <div css={cssObj.factoryContainer}>
          <strong css={cssObj.label}>BEFORE</strong>
          <FactoryPart factory={factoryBeforeData} />
        </div>
        <div css={cssObj.factoryContainer}>
          <strong css={cssObj.label}>AFTER</strong>
          <FactoryPart factory={factoryAfterData} />
        </div>
      </div>
      <div css={cssObj.buttonContainer}>
        <button
          type="submit"
          css={cssObj.acceptButton}
          onClick={() => {
            return acceptFactoryHandler;
          }}
        >
          수정 승인
        </button>
        <form css={cssObj.rejectForm} onSubmit={handleSubmit(rejectFactoryHandler)}>
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

export default FactoryEditDetail;