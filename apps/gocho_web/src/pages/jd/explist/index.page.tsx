import { useEffect, useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import { GOCHO_DESKTOP_URL, GOCHO_MOBILE_URL, JOBS_EXPLIST_URL } from "shared-constant/internalURL";
import { META_JD_EXPLIST } from "shared-constant/meta";
import { MetaHead } from "shared-ui/common/atom/metaHead";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { expiredJdListFunnelEvent } from "shared-ga/jd";

import { Layout } from "@component/layout";
import { mainContainer, title, colorPoint, listContainer } from "./style";
import { SearchPart } from "./part/searchPart";
import { ResultPart } from "./part/resultPart";

const JdExpListPage: NextPage = () => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (Object.keys(router.query).length === 0 && router.isReady) {
      router.replace({ pathname: JOBS_EXPLIST_URL, query: { page: 1, order: "recent" } });
    }
  }, [router]);
  useEffect(() => {
    const location = (scrollRef.current?.getBoundingClientRect().top as number) + window.pageYOffset - 200;
    window.scrollTo(0, location);
  }, [router.query.page]);

  useEffect(() => {
    expiredJdListFunnelEvent();
  }, []);

  return (
    <main css={mainContainer}>
      <Head>
        <link rel="canonical" href={`${GOCHO_DESKTOP_URL}${router.asPath.split("?")[0]}`} />
        <link
          rel="alternate"
          media="only screen and (max-width: 640px)"
          href={`${GOCHO_MOBILE_URL}${router.asPath.split("?")[0]}`}
        />
      </Head>
      <MetaHead metaData={META_JD_EXPLIST} />
      <Layout>
        <div ref={scrollRef} />
        <InvisibleH2 title="기업별 만료 공고" />
        <p css={title}>
          <span css={colorPoint}>Expired</span> 기업별 만료공고
        </p>
        <section css={listContainer}>
          <SearchPart />
          <ResultPart />
        </section>
      </Layout>
    </main>
  );
};

export default JdExpListPage;
