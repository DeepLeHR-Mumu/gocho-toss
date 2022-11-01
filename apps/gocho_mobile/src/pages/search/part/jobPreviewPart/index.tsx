import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { BsChevronRight } from "react-icons/bs";

import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { useUnifiedJobSearchArr } from "shared-api/job";
import { useUserInfo } from "shared-api/auth";
import { NormalButton } from "shared-ui/common/atom/button";
import { useUserJobBookmarkArr } from "shared-api/bookmark";
import { COLORS } from "shared-style/color";

import { JobCard } from "@component/common/molecule/jobCard";

import { JOB_PREVIEW_RESULT_LIMIT } from "@pages/search/constant";
import { listContainer, noDataText, buttonBox } from "./style";

export const JobPreviewPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: userData } = useUserInfo();
  const { data: jobDataArr, isLoading: isJobLoading } = useUnifiedJobSearchArr({
    searchWord: router.query.q,
    page: router.query.page,
    limit: JOB_PREVIEW_RESULT_LIMIT,
  });
  const { data: userJobBookmarkArr } = useUserJobBookmarkArr({ userId: userData?.id });

  if (!jobDataArr || isJobLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(JOB_PREVIEW_RESULT_LIMIT).map((dummy) => {
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
      {jobDataArr.jobDataArr.map((jobData) => {
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

      {jobDataArr?.count !== 0 && (
        <div css={buttonBox}>
          <NormalButton
            text="채용공고 더보기"
            iconObj={{
              icon: BsChevronRight,
              color: COLORS.BLUE_FIRST40,
              size: 0.75,
              position: "right",
            }}
            variant="outlined"
            buttonClick={() => {
              router.push({
                pathname: "/search",
                query: { q: router.query.q, page: 1, menu: "공고" },
              });
            }}
            wide={false}
          />
        </div>
      )}
    </section>
  );
};
