import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { useFactoryDetail } from "@/api/factory/useFactoryDetail";
import { useAcceptFactory } from "@/api/factory/useAcceptFactory";
import { useRejectFactory } from "@/api/factory/useRejectFactory";
import { factoryArrKeyObj } from "@/api/factory/useFactoryArr/type";
import { mainContainer, pageTitle } from "@/style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@/component";

import { FactoryPart } from "./part/factoryPart";
import { cssObj } from "./style";
import { RejectFormValues } from "./type";

const FactoryRegisterDetail: NextPage = () => {
  const [checkMsg, setCheckMsg] = useState<string>();

  const queryClient = useQueryClient();
  const router = useRouter();
  const factoryId = Number(router.query.id);

  const { register, handleSubmit } = useForm<RejectFormValues>();

  const { data: factoryDataObj, isLoading, isError } = useFactoryDetail({ factoryId });
  const { mutate: acceptFactoryMutate } = useAcceptFactory();
  const { mutate: rejectFactoryMutate } = useRejectFactory();

  const acceptFactoryHandler = () => {
    acceptFactoryMutate(
      { factoryId, type: "upload" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(factoryArrKeyObj.all);
          setCheckMsg("공장 등록 요청이 승인되었습니다!");
        },
        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 관계자에게 문의해주세요.");
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
          setCheckMsg("공장 등록 요청이 반려되었습니다!");
        },
        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 관계자에게 문의해주세요.");
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
      <FactoryPart factory={factoryDataObj} />
      <div css={cssObj.buttonContainer}>
        <button
          type="submit"
          css={cssObj.acceptButton}
          onClick={() => {
            acceptFactoryHandler();
          }}
        >
          등록 승인
        </button>
        <form css={cssObj.rejectForm} onSubmit={handleSubmit(rejectFactoryHandler)}>
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

export default FactoryRegisterDetail;
