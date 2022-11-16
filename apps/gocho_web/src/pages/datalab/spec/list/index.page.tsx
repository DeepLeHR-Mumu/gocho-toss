import { NextPage } from "next";
import { useEffect } from "react";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { SpecListMeta } from "shared-ui/common/meta";
import { specListFunnelEvent } from "shared-ga/spec";

import { Layout } from "@component/layout";

import { AsideMenu } from "../component/asideMenu";
import { CarouselPart } from "./part/carouselPart";
import { ListPart } from "./part/listPart";
import { title, colorPoint, flexBox } from "./style";

const MainList: NextPage = () => {
  useEffect(() => {
    specListFunnelEvent();
  }, []);

  return (
    <main>
      <SpecListMeta />
      <InvisibleH1 title="생산직 스펙평가 리스트 - 고초대졸닷컴" />

      <CarouselPart />
      <Layout>
        <InvisibleH2 title="전체 스펙 리스트" />
        <strong css={title}>
          <span css={colorPoint}>All </span>
          스펙 List 📃✨
        </strong>
        <div css={flexBox}>
          <AsideMenu />
          <ListPart />
        </div>
      </Layout>
    </main>
  );
};

export default MainList;
