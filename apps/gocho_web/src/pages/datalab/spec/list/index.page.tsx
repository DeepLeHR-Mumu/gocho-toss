import { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { META_SPEC_LIST } from "shared-constant/meta";
import { GOCHO_DESKTOP_URL } from "shared-constant/internalURL";
import { specListFunnelEvent } from "shared-ga/spec";

import { Layout } from "@component/layout";

import { AsideMenu } from "../component/asideMenu";
import { CarouselPart } from "./part/carouselPart";
import { ListPart } from "./part/listPart";
import { title, colorPoint, flexBox } from "./style";

const MainList: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    specListFunnelEvent();
  }, []);

  return (
    <main>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
      </Head>
      <MetaHead metaData={META_SPEC_LIST} />
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
