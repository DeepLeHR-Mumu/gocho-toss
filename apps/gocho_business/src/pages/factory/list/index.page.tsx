import { ReactElement, useState } from "react";

import type { NextPageWithLayout } from "@/pages/_app.page";
import { PageLayout, GlobalLayout } from "@/components/global/layout";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";

import { RegisterPart } from "./part/registerPart";
import { FactoryCardListPart } from "./part/factoryCardPart";
import { cardContainer, factoryPartContainer } from "./style";

const FactoryListPage: NextPageWithLayout = () => {
  const [isEditing, setIsEditing] = useState<false | number>(false);

  return (
    <main>
      <PageLayout>
        <h2>{isEditing === false ? "공장 등록" : "공장 수정"}</h2>
        <RegisterPart isEditing={isEditing} setIsEditing={setIsEditing} />
        <h2>공장 목록</h2>
        <div css={factoryPartContainer}>
          <section css={cardContainer}>
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
  </GlobalLayout>
);

export default FactoryListPage;
