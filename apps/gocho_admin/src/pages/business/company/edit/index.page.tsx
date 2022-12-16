import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { useCompanyDetail } from "@api/company/useCompanyDetail";
import { useEditCompanyRequest } from "@api/company/useEditCompanyRequest";
import { useAcceptCompany } from "@api/company/useAcceptCompany";
import { useRejectCompany } from "@api/company/useRejectCompany";
import { companyArrKeyObj } from "@api/company/useCompanyArr/type";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { acceptButton, buttonContainer, rejectButton } from "./style";

const CompanyEditDetail: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const companyId = Number(router.query.id);

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
        },
      }
    );
  };

  const rejectCompanyHandler = () => {
    rejectCompanyMutate(
      { companyId, type: "update" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyArrKeyObj.all);
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
      <div css={buttonContainer}>
        <button
          type="submit"
          css={acceptButton}
          onClick={() => {
            return acceptCompanyHandler;
          }}
        >
          수정 승인
        </button>
        <button
          type="submit"
          css={rejectButton}
          onClick={() => {
            return rejectCompanyHandler;
          }}
        >
          수정 반려
        </button>
      </div>
    </main>
  );
};

export default CompanyEditDetail;
