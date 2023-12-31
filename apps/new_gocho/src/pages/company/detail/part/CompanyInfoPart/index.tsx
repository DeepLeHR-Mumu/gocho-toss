import { useRouter } from "next/router";

import { useCompanyDetail } from "@/apis/company";
import { isQueryString } from "@/utils";
import { SkeletonBox } from "@/components";

import { CommonInfo } from "./component/CommonInfo";
import { FactoryInfo } from "./component/FactoryInfo";
import { PayInfo } from "./component/PayInfo";
import { WelfareInfo } from "./component/WelfareInfo";

import { cssObj } from "./style";

export const CompanyInfoPart = () => {
  const router = useRouter();
  const companyId = isQueryString(router.query.companyId) ? Number(router.query.companyId) : null;

  const { data: companyData } = useCompanyDetail({ companyId, isStatic: false });

  if (!companyData) {
    return (
      <section css={cssObj.wrapper}>
        <div css={cssObj.skeletonWrapper}>
          <SkeletonBox color="GRAY50" />
        </div>
        <div css={cssObj.skeletonWrapper}>
          <SkeletonBox color="GRAY50" />
        </div>
        <div css={cssObj.skeletonWrapper}>
          <SkeletonBox color="GRAY50" />
        </div>
      </section>
    );
  }

  return (
    <section css={cssObj.wrapper}>
      <CommonInfo
        industry={companyData.industry}
        size={companyData.size}
        foundDate={companyData.found_date}
        employeeNumber={companyData.employee_number}
        nozoExists={companyData.nozo.exists}
        address={companyData.location.address}
      />
      <PayInfo payStart={companyData.pay_start} payAvg={companyData.pay_avg} payDesc={companyData.pay_desc || ""} />
      <WelfareInfo welfare={companyData.welfare} />
      <FactoryInfo factoryArr={companyData.factory_arr} />
    </section>
  );
};
