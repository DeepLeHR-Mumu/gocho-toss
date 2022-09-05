import { FunctionComponent, useEffect, useRef } from "react";

import { useInfiniteJobArr } from "@api/job/useInfiniteJobArr";
import { dummyArrCreator } from "@util/dummyArrCreator";
import { JobCard } from "@component/card/jobCard";

import { Layout } from "@component/layout";
import { CompanyJobPartProps } from "./type";
import { partContainer, listContainer } from "./style";

export const CompanyJobPart: FunctionComponent<CompanyJobPartProps> = ({
  companyId,
}) => {
  const {
    data: jobDataArr,
    isLoading,
    isError,
    fetchNextPage,
  } = useInfiniteJobArr({
    companyId,
    limit: 10,
  });

  const observerRef = useRef<IntersectionObserver>();
  const boxRef = useRef<HTMLDivElement>(null);

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 관찰하고 있는 entry가 화면에 보여지는 경우
        io.unobserve(entry.target); // entry 관찰 해제
        fetchNextPage(); // 다음 페이지 데이터 요청
      }
    });
  };

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(intersectionObserver, {
      threshold: 0.2,
    });
    if (boxRef.current) observerRef.current.observe(boxRef.current);
  }, [jobDataArr, intersectionObserver]);

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
        <section css={listContainer}>
          {jobDataArr.pages.map((page) => {
            return page.jobDataArr.map((jobData) => {
              return <JobCard jobData={jobData} key={`JobCard${jobData.id}`} />;
            });
          })}
        </section>
        <div ref={boxRef} />
      </Layout>
    </div>
  );
};
