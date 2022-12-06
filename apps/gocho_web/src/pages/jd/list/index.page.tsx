import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { InvisibleH1 } from "shared-ui/common/atom/invisibleH1";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { JOBS_LIST_URL } from "shared-constant/internalURL";

import { PageHead } from "./pageHead";
import { AdPart } from "./part/adPart";
import { ListPart } from "./part/listPart";

const JobsList: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(router.query).length === 0 && router.isReady) {
      router.replace({ pathname: JOBS_LIST_URL, query: { page: 1, order: "recent" } });
    }
  }, [router]);

  return (
    <main>
      <PageHead />
      <InvisibleH1 title="실시간 생산직 채용공고" />

      <InvisibleH2 title="오늘의 추천 공고" />
      <AdPart />
      <ListPart />
    </main>
  );
};

export default JobsList;
