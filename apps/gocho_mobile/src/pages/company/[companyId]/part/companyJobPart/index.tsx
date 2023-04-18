import { FunctionComponent } from "react";
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
  const limit = 6;
  const { companyId } = router.query;

  const { data: companyDetailData, isLoading: isCompanyDataLoading } = useCompanyDetail({
    companyId: Number(companyId),
  });
  const { data: jobData, isLoading } = useJobArr({
    companyId: Number(companyId),
    order: "recent",
    page: Number(router.query.page),
    size: limit,
  });

  const { data: userData } = useUserProfile();
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userData?.id });

  if (!jobData || isLoading) {
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

  return (
    <Layout>
      <InvisibleH2 title={`${companyDetailData.name} 채용공고 모음`} />
      <strong css={totalText}>총 채용공고 {jobData.pageResult.totalElements}개</strong>
      <section css={listContainer}>
        {jobData.jobDataArr.map((data) => {
          const isBookmarked = Boolean(
            userJobBookmarkArr?.some((job) => {
              return job.id === data.id;
            })
          );
          return <JobCard jobData={data} isBookmarked={isBookmarked} userId={userData?.id} key={`JobCard${data.id}`} />;
        })}
      </section>
      <BottomPagination
        totalPage={jobData.pageResult.totalPages}
        linkObj={{
          pathname: router.pathname,
        }}
      />
    </Layout>
  );
};
