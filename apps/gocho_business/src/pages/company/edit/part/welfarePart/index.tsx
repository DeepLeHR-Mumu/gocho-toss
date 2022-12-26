import { FunctionComponent } from "react";

import { useCompanyDetail } from "@/apis/company/useCompanyDetail";

// import { WelfareForm } from "../../component/welfareForm";
import { cssObj } from "./style";

interface BasicPartProps {
  userInfoData: {
    id: number;
    companyId: number;
    companyName: string;
    companyLogo: string;
    email: string;
    name: string;
    department: string;
    iat: number;
    exp: number;
  };
}

export const WelfalePart: FunctionComponent<BasicPartProps> = ({ userInfoData }) => {
  const { data: companyData, isLoading: isCompanyDataLoading } = useCompanyDetail(true, {
    companyId: userInfoData.companyId,
  });

  if (!companyData || isCompanyDataLoading) {
    return null;
  }

  return (
    <div css={cssObj.lineBox()}>
      <strong css={cssObj.subTitle}>복지(선택)</strong>
      <div css={cssObj.welfareBox}>
        {/* <WelfareForm info={companyData.welfare.money} />
        <WelfareForm />
        <WelfareForm />
        <WelfareForm />
        <WelfareForm />
        <WelfareForm />
        <WelfareForm />
        <WelfareForm /> */}
      </div>
    </div>
  );
};
