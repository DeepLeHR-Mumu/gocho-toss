import { ReactElement } from "react";

import type { NextPageWithLayout } from "@/pages/_app.page";
import { PageLayout, GlobalLayout } from "@/components/global/layout";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";
import { useFactoryArr } from "@/api/factory/useFactoryArr";

import { RegisterPart } from "./part/registerPart";
import { FactoryCardPart } from "./part/factoryCardPart";
import { cardContainer, factoryPartContainer } from "./style";

const FactoryListPage: NextPageWithLayout = () => {
  const { data: factoryDataArr } = useFactoryArr(false);
  return (
    <main>
      <CompanyInfoPart />
      <PageLayout>
        <RegisterPart />
        <h2>공장 목록</h2>
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

FactoryListPage.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default FactoryListPage;
