import { JobCard } from "@component/common/molecule/jobCard";
import { Layout } from "@component/layout";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { useUserInfo } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { useJobArr } from "shared-api/job";
import { dummyArrCreator } from "shared-util/dummyArrCreator";

import { listContainer } from "./style";

export const JobsPart: FunctionComponent = () => {
  const router = useRouter();
  const { companyId } = router.query;

  const { data: jobDataArr, isLoading } = useJobArr({
    companyId: Number(companyId),
    limit: 10,
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
      <section css={listContainer}>
        <div
          css={css`
            display: flex;
          `}
        >
          {jobDataArr.jobDataArr.length}
        </div>
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
    </Layout>
  );
};
