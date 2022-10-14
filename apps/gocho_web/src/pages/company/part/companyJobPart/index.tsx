import { FunctionComponent, useEffect, useRef } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { useInfiniteJobArr } from "shared-api/job/useInfiniteJobArr";
import { useUserInfo } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { dummyArrCreator } from "shared-util/dummyArrCreator";

import { JobCard } from "@component/card/jobCard";
import { Layout } from "@component/layout";
import { CompanyJobPartProps } from "./type";
import { partContainer, listContainer, totalCount, noJobListText } from "./style";

export const CompanyJobPart: FunctionComponent<CompanyJobPartProps> = ({ companyId }) => {
  const {
    data: jobDataArr,
    isLoading,
    isError,
    fetchNextPage,
  } = useInfiniteJobArr({
    companyId,
    limit: 10,
  });

  const { data: userData } = useUserInfo();
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userData?.id });

  const observerRef = useRef<IntersectionObserver>();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 관찰하고 있는 entry가 화면에 보여지는 경우
          io.unobserve(entry.target); // entry 관찰 해제
          fetchNextPage(); // 다음 페이지 데이터 요청
        }
      });
    };

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(intersectionObserver, {
      threshold: 0.2,
    });
    if (boxRef.current) observerRef.current.observe(boxRef.current);
  }, [fetchNextPage, jobDataArr]);

  if (!jobDataArr || isError || isLoading) {
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
        <div ref={boxRef} />
      </Layout>
    </div>
  );
};