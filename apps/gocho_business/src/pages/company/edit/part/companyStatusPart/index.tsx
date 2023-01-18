import { FunctionComponent } from "react";
import { useCompanyDetail } from "@/apis/company/useCompanyDetail";
import { useUserState } from "@/globalStates/useUserState";
import { cssObj } from "./style";

export const CompanyStatusPart: FunctionComponent = () => {
  const { userInfoData } = useUserState();
  const { data: companyData } = useCompanyDetail({ companyId: userInfoData?.companyId });

  if (!userInfoData || !companyData) {
    return <div css={cssObj.spinner} />;
  }

  return (
    <section css={cssObj.wrapper} data-testid="company/edit/CompanyStatusPart">
      <strong css={cssObj.title}>반려사유</strong>
      <p css={cssObj.desc}>{companyData.status.reason}</p>
    </section>
  );
};
