import { BottomPagination } from "@component/common/molecule/bottomPagination";
import { JobCard } from "@component/common/molecule/jobCard";
import { Layout } from "@component/layout";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import { useUserInfo } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util/dummyArrCreator";

import { listContainer, totalCountContainer, totalText } from "./style";

export const JobsPart: FunctionComponent = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const router = useRouter();
  const { companyId } = router.query;
  const { data: jobDataArr, isLoading } = useJobArr({
    companyId: Number(companyId),
    limit: 10,
    offset: (pageIndex - 1) * 10,
  });

  const { data: userData } = useUserInfo();
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

  return (
    <Layout>
      <div css={totalCountContainer}>
        <p css={totalText}>총 채용공고 {jobDataArr.count}개</p>
      </div>
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
      <BottomPagination total={jobDataArr.count} limit={10} page={pageIndex} setPage={setPageIndex} />
    </Layout>
  );
};
