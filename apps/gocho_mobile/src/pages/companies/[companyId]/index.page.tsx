import { NextPage } from "next";
import { useState } from "react";

import { HeaderPart } from "../part/headerPart";
import { BasicInfoPart } from "../part/basicInfoPart";
import { JobsPart } from "../part/jobsPart";
import { menuType } from "./type";
import { WelfarePart } from "../part/welfarePart";
import { CheckMorePart } from "../part/checkMorePart";
import { MoneyPart } from "../part/moneyPart";
import { FactoryPart } from "../part/factoryInfoPart";

const CompanyDetail: NextPage = () => {
  const [activatedMenu, setActivatedMenu] = useState<menuType>("companyInfo");

  return (
    <>
      <HeaderPart setActivatedMenu={setActivatedMenu} activatedMenu={activatedMenu} />
      {activatedMenu === "companyInfo" ? (
        <>
          <BasicInfoPart />
          <WelfarePart />
          <MoneyPart />
          <FactoryPart/>
        </>
      ) : (
        <JobsPart />
      )}
      <CheckMorePart />
    </>
  );
};

export default CompanyDetail;
