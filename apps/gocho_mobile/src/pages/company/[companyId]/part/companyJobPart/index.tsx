import { FunctionComponent, useState, useEffect } from "react";
import { useRouter } from "next/router";

import { BottomPagination } from "@component/common/molecule/bottomPagination";
import { JobCard } from "@component/common/molecule/jobCard";
import { Layout } from "@component/layout";
import { useUserProfile } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util";
import { InvisibleH2 } from "shared-ui/common/atom/invisibleH2";
import { useCompanyDetail } from "shared-api/company";

import { listContainer, totalText } from "./style";

export const CompanyJobPart: FunctionComponent = () => {
  const router = useRouter();
  const { companyId } = router.query;
  const limit = 6;
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(Number(router.query.page));

  const { data: companyDetailData, isLoading: isCompanyDataLoading } = useCompanyDetail({
    companyId: Number(companyId),
  });
  const { data: jobDataArr, isLoading } = useJobArr({
    companyId: Number(companyId),
    limit,
    order: "recent",
    offset: (page - 1) * limit,
  });

  useEffect(() => {
    if (jobDataArr) {
      setTotal(jobDataArr.count);
    }
  }, [jobDataArr]);

  useEffect(() => {
    setPage(Number(router.query.page));
  }, [router.query.page]);

  const { data: userData } = useUserProfile();
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userData?.id });

  if (!jobDataArr || isLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(10).map((dummy) => {
          return <JobCard isSkeleton key={`JobCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  if (!companyDetailData || isCompanyDataLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(10).map((dummy) => {
          return <JobCard isSkeleton key={`JobCardSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  const totalPage = Math.ceil(total / limit);

  return (
    <Layout>
      <InvisibleH2 title={`${companyDetailData.name} 채용공고 모음`} />
      <strong css={totalText}>총 채용공고 {jobDataArr.count}개</strong>
      <section css={listContainer}>
        {jobDataArr.jobDataArr.map((jobData) => {
          const isBookmarked = Boolean(
            userJobBookmarkArr?.some((job) => {
              return job.id === jobData.id;
            })
          );
          return (
            <JobCard jobData={jobData} isBookmarked={isBookmarked} userId={userData?.id} key={`JobCard${jobData.id}`} />
          );
        })}
      </section>
      <BottomPagination
        totalPage={totalPage}
        linkObj={{
          pathname: router.pathname,
        }}
      />
    </Layout>
  );
};
