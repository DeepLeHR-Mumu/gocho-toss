import { ReactElement } from "react";
import { FiEdit } from "react-icons/fi";

import { CompanyInfoPart } from "@/components/global/companyInfoPart";
import { CommonStatusChip } from "@/components/common";
import { PageLayout, GlobalLayout } from "@/components/global/layout";
import { NextPageWithLayout } from "@/pages/_app.page";
import { useUserState } from "@/globalStates/useUserState";

import { BasicPart } from "./part/basicPart";
import { WelfalePart } from "./part/welfarePart";
import { cssObj } from "./style";

const CompanyEditPage: NextPageWithLayout = () => {
  const { userInfoData } = useUserState();

  if (!userInfoData) {
    return null;
  }

  return (
    <main css={cssObj.wrapper}>
      <PageLayout>
        <form css={cssObj.container}>
          <header css={cssObj.header}>
            <div>
              <h2 css={cssObj.title}>기업정보</h2>
              <p css={cssObj.desc}>기업 정보에 변화가 있다면 작성 후 수정완료를 눌러주세요</p>
            </div>
            <div css={cssObj.flexBox}>
              <CommonStatusChip status="승인됨" />
              <button type="submit">
                <FiEdit /> 기업 정보 수정완료
              </button>
            </div>
          </header>
          <section css={cssObj.companyInfoBox}>
            <BasicPart userInfoData={userInfoData} />
            <WelfalePart userInfoData={userInfoData} />
          </section>
          <button type="submit">기업 정보 수정완료</button>
        </form>
      </PageLayout>
    </main>
  );
};

CompanyEditPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <CompanyInfoPart />
    {page}
  </GlobalLayout>
);

export default CompanyEditPage;
