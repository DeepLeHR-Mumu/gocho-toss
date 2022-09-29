import { NextPage } from "next";
import { useState } from "react";

import { HeaderPart } from "../part/headerPart";
import { InfoPart } from "../part/infoPart";
import { JobsPart } from "../part/jobsPart";
import { menuType } from "./type";

const CompanyDetail: NextPage = () => {
  const [activatedMenu, setActivatedMenu] = useState<menuType>("companyInfo");

  return (
    <>
      <HeaderPart setActivatedMenu={setActivatedMenu} activatedMenu={activatedMenu} />
      {activatedMenu === "companyInfo" ? <InfoPart /> : <JobsPart />}
    </>
  );
};

export default CompanyDetail;
