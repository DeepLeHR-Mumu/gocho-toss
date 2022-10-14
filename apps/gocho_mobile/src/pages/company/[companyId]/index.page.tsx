import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAddCompanyViewCount } from "shared-api/viewCount";
import { COMPANY_DETAIL_URL } from "shared-constant/internalURL";
import { HeaderPart } from "../part/headerPart";
import { BasicInfoPart } from "../part/basicInfoPart";
import { JobsPart } from "../part/jobsPart";
import { WelfarePart } from "../part/welfarePart";
import { CheckMorePart } from "../part/checkMorePart";
import { MoneyPart } from "../part/moneyPart";
import { FactoryPart } from "../part/factoryInfoPart";
import { H2Title } from "../component/h2Title";
import { container } from "./style";
import { LinkPart } from "../part/linkPart";

const CompanyDetail: NextPage = () => {
  const router = useRouter();
  const { companyId, info } = router.query;
  const { mutate: addViewCount } = useAddCompanyViewCount();
  useEffect(() => {
    if (info) {
      return;
    }
    if (!info && companyId)
      router.replace({
        pathname: `${COMPANY_DETAIL_URL}/${companyId}`,
        query: { info: "detail" },
      });
  }, [companyId, info, router]);

  useEffect(() => {
    const companyViewStr = sessionStorage.getItem("jobViewArr");
    if (!companyId) return;

    const isViewed = companyViewStr?.includes(String(companyId));
    if (isViewed) return;

    if (companyViewStr) {
      const jobViewArr: number[] = JSON.parse(companyViewStr);
      jobViewArr.push(Number(companyId));
      sessionStorage.setItem("jobViewArr", JSON.stringify(jobViewArr));
      addViewCount({ elemId: Number(companyId) });
      return;
    }
    if (!isViewed) {
      sessionStorage.setItem("jobViewArr", JSON.stringify([companyId]));
      addViewCount({ elemId: Number(companyId) });
    }
  }, [addViewCount, companyId]);

  return (
    <>
      <HeaderPart />
      <div css={container}>
        {info === "detail" && (
          <>
            <H2Title titleStr="일반 정보" />
            <BasicInfoPart />
            <H2Title titleStr="복지 정보" />
            <WelfarePart />
            <H2Title titleStr="연봉 정보" />
            <MoneyPart />
            <H2Title titleStr="공장 정보" />
            <FactoryPart />
            <LinkPart />
          </>
        )}
        {info === "jd" && <JobsPart />}
      </div>

      <CheckMorePart />
    </>
  );
};

export default CompanyDetail;
