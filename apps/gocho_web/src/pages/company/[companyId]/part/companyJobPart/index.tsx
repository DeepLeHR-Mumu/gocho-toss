import { FunctionComponent, useEffect, useRef } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useRouter } from "next/router";

import { useInfiniteJobArr } from "shared-api/job/useInfiniteJobArr";
import { useUserInfo } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { dummyArrCreator } from "shared-util";

import { JobCard } from "@component/card/jobCard";
import { Layout } from "@component/layout";

import { partContainer, listContainer, totalCount, noJobListText } from "./style";

export const CompanyJobPart: FunctionComponent = () => {
  const observeRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const {
    data: jobDataArr,
    isLoading,
    fetchNextPage,
  } = useInfiniteJobArr({
    companyId: Number(router.query.companyId),
    limit: 10,
    order: "recent",
  });
  const { data: userData } = useUserInfo();
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userData?.id });

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
  }, [fetchNextPage, jobDataArr]);

  if (!jobDataArr || isLoading || router.isFallback) {
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
        <p css={totalCount}>총 채용공고 {jobDataArr.pages[0].count}개</p>
        <section css={listContainer}>
          {jobDataArr.pages[0].count === 0 && (
            <p css={noJobListText}>
              <AiOutlineInfoCircle />
              현재 채용중인 공고가 없습니다.
            </p>
          )}

          {jobDataArr.pages.map((page) => {
            return page.jobDataArr.map((jobData) => {
              const isBookmarked = Boolean(
                userJobBookmarkArr?.some((job) => {
                  return job.id === jobData.id;
                })
              );

              return (
                <JobCard
                  jobData={jobData}
                  isBookmarked={isBookmarked}
                  userId={userData?.id}
                  key={`JobCard${jobData.id}`}
                />
              );
            });
          })}
        </section>
        <div ref={observeRef} />
      </Layout>
    </div>
  );
};
