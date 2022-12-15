import type { NextPage } from "next";

import { Layout } from "@/components/global/layout";
import { CompanyInfoPart } from "./part/companyInfoPart";
import { RegisterPart } from "./part/registerPart";
import { FactoryCardPart } from "./part/factoryCardPart";
import { cardContainer, factoryPartContainer } from "./style";

const FactoryListPage: NextPage = () => (
  <main>
    <CompanyInfoPart />
    <Layout>
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
    </Layout>
  </main>
);

export default FactoryListPage;
