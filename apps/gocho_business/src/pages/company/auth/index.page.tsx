import { useEffect, useState } from "react";
import { NextPage } from "next";

import { PageLayout } from "@/components";
import { CompanySideNav } from "@/components/global/companySideNav";
import { companyAuthFunnelEvent } from "@/ga";

import { PageHead } from "./pageHead";
import { AuthStatePart, ApplyAuthPart } from "./part";
import { cssObj } from "./style";

const CompanyAuthPage: NextPage = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    companyAuthFunnelEvent();
  }, []);

  return (
    <>
      <PageHead />
      <PageLayout>
        <div css={cssObj.contentWrapper}>
          <CompanySideNav />
          {step === 0 && <AuthStatePart onClick={() => setStep(1)} />}
          {step === 1 && <ApplyAuthPart />}
        </div>
      </PageLayout>
    </>
  );
};

export default CompanyAuthPage;
