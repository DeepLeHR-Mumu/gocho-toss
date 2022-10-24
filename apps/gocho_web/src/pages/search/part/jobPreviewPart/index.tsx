import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { useJobArr } from "shared-api/job";
import { useUserInfo } from "shared-api/auth";
import { useUserJobBookmarkArr } from "shared-api/bookmark";

import { JobCard } from "@component/card/jobCard";

import { listContainer, noDataText } from "./style";

export const JobPreviewPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: userData } = useUserInfo();
  const { data: jobDataArr, isLoading: isJobLoading } = useJobArr({
    q: JSON.stringify({ searchWord: router.query.q as string }),
    order: "recent",
    filter: "valid",
    limit: 10,
    offset: (1 - 1) * 10,
  });
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userData?.id });

  if (!jobDataArr || isJobLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(4).map((dummy) => {
          return <JobCard isSkeleton key={`UnifiedSearchJobPreviewSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  if (jobDataArr.count === 0) {
    return (
      <div css={listContainer}>
        <p css={noDataText}>검색 결과가 없습니다.</p>
      </div>
    );
  }

  return (
    <section css={listContainer}>
      {jobDataArr.jobDataArr.slice(0, 4).map((jobData) => {
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
            key={`UnifiedSearchJobPreview${jobData.id}`}
          />
        );
      })}
    </section>
  );
};
