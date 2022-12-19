import { ReactElement } from "react";

import type { NextPageWithLayout } from "@/pages/_app.page";
import { PageLayout, GlobalLayout } from "@/components/global/layout";
import { CompanyInfoPart } from "@/components/global/companyInfoPart";

import { RegisterPart } from "./part/registerPart";
import { FactoryCardPart } from "./part/factoryCardPart";
import { cardContainer, factoryPartContainer } from "./style";

const FactoryListPage: NextPageWithLayout = () => (
  <main>
    <CompanyInfoPart />
    <PageLayout>
      <RegisterPart />
      <h2>공장 목록</h2>
      <div css={factoryPartContainer}>
        <section css={cardContainer}>
          <FactoryCardPart name="weoifjaop;iwefj;oailwjef;oilawhnefgo;iawhne;ogihjawoi;egja;owiejg;oiawjego;iawjeiopgjqaw/;leogjawipoegjioaw" />
          <FactoryCardPart name="weoifjaop;iwefj;oailwjef;oilawhnefgo;iawhne;ogihjawoi;egja;owiejg;oiawjego;iawjeiopgjqaw/;leogjawipoegjioawleogjawipoegjioawleogjawipoegjioawleogjawipoegjioawleogjawipoegjioawleogjawipoegjioawleogjawipoegjioawleogjawipoegjioawleogjawipoegjioawleogjawipoegjioawleogjawipoegjioaw" />
          <FactoryCardPart name="woiejfoiawqjeiofajweiof" />
          <FactoryCardPart name="823fyp98q3h4fgi;ohqaw;oiergjha;iowejg;oaiwjegioaewj;oigjawei;ogjaio;w" />
        </section>
      </div>
    </PageLayout>
  </main>
);

FactoryListPage.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default FactoryListPage;
