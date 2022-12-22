import { ReactElement } from "react";

import type { NextPageWithLayout } from "@/pages/_app.page";
import { PageLayout, GlobalLayout } from "@/components/global/layout";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";
import { useFactoryArr } from "@/apis/factory/useFactoryArr";

import { RegisterPart } from "./part/registerPart";
import { FactoryCardPart } from "./part/factoryCardPart";
import { cardContainer, factoryPartContainer } from "./style";

const FactoryListPage: NextPageWithLayout = () => {
  const { data: factoryDataArr, error: factoryDataArrError } = useFactoryArr(true);
  return (
    <main>
      <PageLayout>
        <RegisterPart />
        <h2>공장 목록</h2>
        {factoryDataArrError?.response?.data.error_code}
        <div css={factoryPartContainer}>
          <section css={cardContainer}>
            {factoryDataArr?.map((factory, index) => (
              <FactoryCardPart key={factory.id} index={index} />
            ))}
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
