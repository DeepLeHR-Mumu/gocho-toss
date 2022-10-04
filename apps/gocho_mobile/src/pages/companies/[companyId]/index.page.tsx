import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useAddCompanyViewCount } from "shared-api/viewCount";

import { HeaderPart } from "../part/headerPart";
import { BasicInfoPart } from "../part/basicInfoPart";
import { JobsPart } from "../part/jobsPart";
import { menuType } from "./type";
import { WelfarePart } from "../part/welfarePart";
import { CheckMorePart } from "../part/checkMorePart";
import { MoneyPart } from "../part/moneyPart";
import { FactoryPart } from "../part/factoryInfoPart";
import { H2Title } from "../component/h2Title";
import { container } from "./style";
import { LinkPart } from "../part/linkPart";

const CompanyDetail: NextPage = () => {
  const router = useRouter();
  const { companyId } = router.query;

  const [activatedMenu, setActivatedMenu] = useState<menuType>("companyInfo");
  const { mutate: addViewCount } = useAddCompanyViewCount();

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
      <HeaderPart setActivatedMenu={setActivatedMenu} activatedMenu={activatedMenu} />
      {activatedMenu === "companyInfo" ? (
        <div css={container}>
          <H2Title titleStr="일반 정보" />
          <BasicInfoPart />
          <H2Title titleStr="복지 정보" />
          <WelfarePart />
          <H2Title titleStr="연봉 정보" />
          <MoneyPart />
          <H2Title titleStr="공장 정보" />
          <FactoryPart />
          <LinkPart />
        </div>
      ) : (
        <JobsPart />
      )}
      <CheckMorePart />
    </>
  );
};

export default CompanyDetail;
