import { ReactElement, useState } from "react";

import type { NextPageWithLayout } from "@/pages/_app.page";
import { PageLayout, GlobalLayout, Footer } from "@/components/global/layout";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";

import { RegisterPart } from "./part/registerPart";
import { FactoryCardListPart } from "./part/factoryCardListPart";
import { cssObj } from "./style";

const FactoryListPage: NextPageWithLayout = () => {
  // TODO isEditing 이름 변경하기
  const [isEditing, setIsEditing] = useState<false | number>(false);

  return (
    <main>
      <PageLayout>
        <h2 css={cssObj.registerTitle}>{isEditing === false ? "공장 등록" : "공장 수정"}</h2>
        <p css={cssObj.pageDescription}>
          간단히 공장을 등록해보세요! 등록한 공장은 공고 업로드시 불러와 사용할 수 있습니다
        </p>
        <RegisterPart isEditing={isEditing} setIsEditing={setIsEditing} />
        <h2 css={cssObj.listTitle}>공장 목록</h2>
        <div css={cssObj.factoryPartContainer}>
          <section css={cssObj.cardContainer}>
            <FactoryCardListPart setIsEditing={setIsEditing} isEditing={isEditing} />
          </section>
        </div>
      </PageLayout>
    </main>
  );
};

FactoryListPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <CompanyInfoPart />
    {page}
    <Footer />
  </GlobalLayout>
);

export default FactoryListPage;
