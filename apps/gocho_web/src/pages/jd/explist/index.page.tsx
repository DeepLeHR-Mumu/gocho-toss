import { useEffect, useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { JOBS_EXPLIST_URL } from "shared-constant/internalURL";
import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { expiredJdListFunnelEvent } from "shared-ga/jd";

import { Layout } from "@component/layout";

import { PageHead } from "./component/pageHead";
import { SearchPart } from "./part/searchPart";
import { ResultPart } from "./part/resultPart";
import { mainContainer, title, colorPoint, listContainer } from "./style";

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
      <PageHead />
      <InvisibleH1 title="만료된 채용공고" />

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
