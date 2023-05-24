import { useEffect } from "react";

import { Spinner } from "shared-ui/common/atom/spinner";

import { NextPageWithLayout } from "@/types";
import { PageLayout } from "@/components";

import { jdListPageFunnelEvent } from "@/ga";
import { useJdArr } from "@/apis";
import { JdCard } from "@/pages/jd/list/component";
import { cssObj } from "./style";

const JdListPage: NextPageWithLayout = () => {
  const { data: jdDataObj } = useJdArr(true, { order: "recent", size: 10 });

  useEffect(() => {
    jdListPageFunnelEvent();
  }, []);

  if (!jdDataObj) {
    return (
      <div css={cssObj.spinner}>
        <Spinner />
      </div>
    );
  }

  if (jdDataObj.pageResult.totalElements === 0) {
    return (
      <section css={cssObj.noDataSectionContainer}>
        <p css={cssObj.noDataDesc}>등록된 공고가 없습니다.</p>
      </section>
    );
  }

  return (
    <PageLayout>
      <div css={cssObj.contentContainer}>
        <h2 css={cssObj.title}>등록된 공고 목록</h2>
        {jdDataObj.jdDataArr.map((jd) => (
          <JdCard key={`BusinessJdCard${jd.id}`} jd={jd} />
        ))}
      </div>
    </PageLayout>
  );
};

export default JdListPage;
