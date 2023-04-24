import { FunctionComponent, useEffect, useRef } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useRouter } from "next/router";

import { useInfiniteJobArr } from "shared-api/job/useInfiniteJobArr";
import { dummyArrCreator } from "shared-util";

import { JobCard } from "@component/card/jobCard";
import { Layout } from "@component/layout";

import { partContainer, listContainer, totalCount, noJobListText } from "./style";

export const CompanyJobPart: FunctionComponent = () => {
  const observeRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const {
    data: jobData,
    isLoading,
    fetchNextPage,
  } = useInfiniteJobArr({
    companyId: Number(router.query.companyId),
    size: 10,
    order: "recent",
  });

  useEffect(() => {
    if (observeRef.current) {
      const observer = new IntersectionObserver(
        (entry) => {
          if (entry[0].isIntersecting) fetchNextPage();
        },
        { threshold: 0.2 }
      );
      observer.observe(observeRef.current);
    }
  }, [fetchNextPage, jobData]);

  if (!jobData || isLoading || router.isFallback) {
    return (
      <Layout>
        <div css={listContainer}>
          {dummyArrCreator(10).map((dummy) => {
            return <JobCard isSkeleton key={`JobCardSkeleton${dummy}`} />;
          })}
        </div>
      </Layout>
    );
  }

  return (
    <div css={partContainer}>
      <Layout>
        <p css={totalCount}>총 채용공고 {jobData.pages[0].pageResult.totalElements}개</p>
        <section css={listContainer}>
          {jobData.pages[0].pageResult.totalElements === 0 && (
            <p css={noJobListText}>
              <AiOutlineInfoCircle />
              현재 채용중인 공고가 없습니다.
            </p>
          )}

          {jobData.pages.map((page) => {
            return page.jobDataArr.map((data) => {
              return <JobCard jobData={data} key={`JobCard${data.id}`} />;
            });
          })}
        </section>
        <div ref={observeRef} />
      </Layout>
    </div>
  );
};
