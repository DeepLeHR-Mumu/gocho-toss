import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { BsChevronRight } from "react-icons/bs";

import { dummyArrCreator } from "shared-util";
import { useJobArr } from "shared-api/job";
import { NormalButton } from "shared-ui/common/atom/button";
import { COLORS } from "shared-style/color";

import { JobCard } from "@component/common/molecule/jobCard";

import { JOB_PREVIEW_RESULT_LIMIT } from "@pages/search/constant";
import { listContainer, noDataText, buttonBox } from "./style";

export const JobPreviewPart: FunctionComponent = () => {
  const router = useRouter();

  const { data: jobDataObj, isLoading: isJobLoading } = useJobArr({
    order: "recent",
    q: JSON.stringify({ searchWord: router.query.q }),
    page: Number(router.query.page),
    size: JOB_PREVIEW_RESULT_LIMIT,
  });

  if (!jobDataObj || isJobLoading) {
    return (
      <div css={listContainer}>
        {dummyArrCreator(JOB_PREVIEW_RESULT_LIMIT).map((dummy) => {
          return <JobCard isSkeleton key={`UnifiedSearchJobPreviewSkeleton${dummy}`} />;
        })}
      </div>
    );
  }

  if (jobDataObj.pageResult.totalElements === 0) {
    return (
      <div css={listContainer}>
        <p css={noDataText}>검색 결과가 없습니다.</p>
      </div>
    );
  }

  return (
    <section css={listContainer}>
      {jobDataObj.jobDataArr.map((jobData) => {
        return <JobCard jobData={jobData} key={`UnifiedSearchJobPreview${jobData.id}`} />;
      })}

      {jobDataObj.pageResult.totalElements !== 0 && (
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
