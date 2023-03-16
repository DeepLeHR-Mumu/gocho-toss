import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useJdArr } from "@api/jd/useJdArr";
import { Layout } from "@component/layout";
import { ErrorScreen, LoadingScreen } from "@component/screen";
import { BottomPagination } from "@component/bottomPagination";
import { JD_LIST_URL } from "@constant/internalURL";

import { JD_SEARCH_LIMIT } from "./constant";
import JobCard from "./component/jobCard";
import { cssObj } from "./style";

const JdList: NextPage = () => {
  const router = useRouter();

  const {
    data: jobDataObj,
    isLoading,
    isError,
  } = useJdArr({
    order: "recent",
    filter: "valid",
    status: "all",
    limit: JD_SEARCH_LIMIT,
    offset: (Number(router.query.page) - 1) * JD_SEARCH_LIMIT,
  });

  if (!jobDataObj || isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  const totalPage = Math.ceil(jobDataObj.count / JD_SEARCH_LIMIT);

  return (
    <main css={cssObj.wrapper}>
      <Layout>
        <h2 css={cssObj.title}>공고 목록</h2>
        <section css={cssObj.container}>
          <ul css={cssObj.thead}>
            <li>ID</li>
            <li>공고정보</li>
            <li>직무</li>
            <li>채용기간</li>
          </ul>
          <ul css={cssObj.tbody}>
            {jobDataObj.jdDataArr.map((job) => {
              return <JobCard key={`ManagerJobCard${job.id}`} job={job} />;
            })}
          </ul>
        </section>
        <BottomPagination totalPage={totalPage} url={JD_LIST_URL} />
      </Layout>
    </main>
  );
};

export default JdList;
