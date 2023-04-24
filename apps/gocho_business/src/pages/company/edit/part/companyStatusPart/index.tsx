import { FunctionComponent } from "react";

import { useCompanyDetail, useManagerProfile } from "@/apis";

import { cssObj } from "./style";

export const CompanyStatusPart: FunctionComponent = () => {
  const { data: userInfoData } = useManagerProfile();
  const { data: companyData } = useCompanyDetail({ companyId: userInfoData?.company.id });

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
