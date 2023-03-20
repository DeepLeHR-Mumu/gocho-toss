import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { useCompanyDetail } from "@/api/company/useCompanyDetail";
import { useEditCompanyRequest } from "@/api/company/useEditCompanyRequest";
import { useAcceptCompany } from "@/api/company/useAcceptCompany";
import { useRejectCompany } from "@/api/company/useRejectCompany";
import { companyArrKeyObj } from "@/api/company/useCompanyArr/type";
import { mainContainer, pageTitle } from "@/style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@/component";

import { CompanyPart } from "./part/companyPart";
import { cssObj } from "./style";
import { RejectFormValues } from "./type";

const CompanyEditDetail: NextPage = () => {
  const [checkMsg, setCheckMsg] = useState<string>();

  const queryClient = useQueryClient();
  const router = useRouter();
  const companyId = Number(router.query.id);

  const { register, handleSubmit } = useForm<RejectFormValues>();

  const {
    data: companyBeforeData,
    isLoading: isBeforeLoading,
    isError: isBeforeError,
  } = useCompanyDetail({ companyId });

  const {
    data: companyAfterData,
    isLoading: isAfterLoading,
    isError: isAfterError,
  } = useEditCompanyRequest({ companyId });

  const { mutate: acceptCompanyMutate } = useAcceptCompany();
  const { mutate: rejectCompanyMutate } = useRejectCompany();

  const acceptCompanyHandler = () => {
    acceptCompanyMutate(
      { companyId, type: "update" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyArrKeyObj.all);
          setCheckMsg("기업 수정 요청이 승인되었습니다!");
        },
        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 관계자에게 문의해주세요.");
        },
      }
    );
  };

  const rejectCompanyHandler: SubmitHandler<RejectFormValues> = (formData) => {
    rejectCompanyMutate(
      { companyId, reason: formData.reason, type: "update" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyArrKeyObj.all);
          setCheckMsg("기업 수정 요청이 반려되었습니다!");
        },
        onError: () => {
          setCheckMsg("에러입니다. 조건을 한번 더 확인하거나 관계자에게 문의해주세요.");
        },
      }
    );
  };

  if (!companyBeforeData || !companyAfterData || isBeforeLoading || isAfterLoading) {
    return <LoadingScreen />;
  }

  if (isBeforeError || isAfterError) {
    return <ErrorScreen />;
  }

  return (
    <main css={mainContainer}>
      <h2 css={pageTitle}>기업 변경 요청 확인</h2>
      <div css={cssObj.companyCompareContainer}>
        <div css={cssObj.companyContainer}>
          <strong css={cssObj.label}>BEFORE</strong>
          <CompanyPart company={companyBeforeData} />
        </div>
        <div css={cssObj.companyContainer}>
          <strong css={cssObj.label}>AFTER</strong>
          <CompanyPart company={companyAfterData} />
        </div>
      </div>
      <div css={cssObj.buttonContainer}>
        <button
          type="submit"
          css={cssObj.acceptButton}
          onClick={() => {
            acceptCompanyHandler();
          }}
        >
          수정 승인
        </button>
        <form css={cssObj.rejectForm} onSubmit={handleSubmit(rejectCompanyHandler)}>
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

export default CompanyEditDetail;
