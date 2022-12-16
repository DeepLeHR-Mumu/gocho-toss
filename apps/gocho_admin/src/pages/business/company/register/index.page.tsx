import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { useCompanyDetail } from "@api/company/useCompanyDetail";
import { useAcceptCompany } from "@api/company/useAcceptCompany";
import { useRejectCompany } from "@api/company/useRejectCompany";
import { companyArrKeyObj } from "@api/company/useCompanyArr/type";
import { mainContainer, pageTitle } from "@style/commonStyles";
import { ErrorScreen, LoadingScreen } from "@component/screen";

import { acceptButton, buttonContainer, rejectButton } from "./style";

const CompanyRegisterDetail: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const companyId = Number(router.query.id);

  const { data: companyDataObj, isLoading, isError } = useCompanyDetail({ companyId });

  const { mutate: acceptCompanyMutate } = useAcceptCompany();
  const { mutate: rejectCompanyMutate } = useRejectCompany();

  const acceptCompanyHandler = () => {
    acceptCompanyMutate(
      { companyId, type: "upload" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyArrKeyObj.all);
        },
      }
    );
  };

  const rejectCompanyHandler = () => {
    rejectCompanyMutate(
      { companyId, type: "upload" },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(companyArrKeyObj.all);
        },
      }
    );
  };

  if (!companyDataObj || isLoading) {
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
            return acceptCompanyHandler;
          }}
        >
          등록 승인
        </button>
        <button
          type="submit"
          css={rejectButton}
          onClick={() => {
            return rejectCompanyHandler;
          }}
        >
          등록 반려
        </button>
      </div>
    </main>
  );
};

export default CompanyRegisterDetail;
