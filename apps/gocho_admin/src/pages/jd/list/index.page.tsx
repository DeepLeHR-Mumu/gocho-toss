import { useRouter } from "next/router";
import { ReactElement } from "react";

import { useJdArr } from "@/api";
import { GlobalLayout, PageLayout, ErrorScreen, LoadingScreen, Pagination } from "@/component";
import { INTERNAL_URL } from "@/constant";
import type { NextPageWithLayout } from "@/types";

import { JobCard } from "./component";
import { cssObj } from "./style";

const JdList: NextPageWithLayout = () => {
  const router = useRouter();
  const JD_SEARCH_LIMIT = 10;

  const {
    data: jobDataObj,
    isLoading,
    isError,
  } = useJdArr({
    order: "recent",
    filter: "valid",
    size: JD_SEARCH_LIMIT,
    page: Number(router.query.page),
  });

  if (!jobDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <main css={cssObj.wrapper}>
      <PageLayout>
        <h2 css={cssObj.title}>공고 목록</h2>
        <section css={cssObj.container}>
          <ul css={cssObj.thead}>
            <li>ID</li>
            <li>공고정보</li>
            <li>직무</li>
            <li>채용기간</li>
          </ul>
          <ul css={cssObj.tbody}>
            {jobDataObj.jdDataArr.map((job) => (
              <JobCard key={`ManagerJobCard${job.id}`} job={job} />
            ))}
          </ul>
        </section>
        <Pagination totalPage={jobDataObj.pageResult.totalPages} url={INTERNAL_URL.JD_LIST_URL} />
      </PageLayout>
    </main>
  );
};

JdList.getLayout = (page: ReactElement) => <GlobalLayout>{page}</GlobalLayout>;

export default JdList;
