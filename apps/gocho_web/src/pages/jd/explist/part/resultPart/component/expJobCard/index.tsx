import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { useJobArr } from "shared-api/job";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { JOBS_DETAIL_URL } from "shared-constant";
import { dateConverter } from "shared-util";

import { ExpJobCardProps, ExpJobCardSkeleton } from "./type";
import {
  expJobCardSkeleton,
  cardWrapper,
  companyInfoContainer,
  companyLogo,
  buttonContainer,
  moreExpJobButton,
  companyDetailButton,
  companyInfoBox,
  companyName,
  expJobListContainer,
  expJobBox,
  jobTitleContainer,
  jobTitle,
  jobDate,
  taskContainer,
  flexBox,
  taskSummary,
  jobDetailButton,
  noExplistArrText,
} from "./style";

export const ExpJobCard: FunctionComponent<ExpJobCardProps | ExpJobCardSkeleton> = ({ companyData, isSkeleton }) => {
  const { data: jobData } = useJobArr({
    order: "recent",
    filter: "expired",
    companyId: companyData?.id,
    size: 3,
  });
  // TODO: companyId enabled를 어떻게 처리할까?

  if (isSkeleton || companyData === undefined) {
    return (
      <div css={expJobCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }
  // TODO: 스토리북으로 공고 없을 때 테스트해보기 (여러 가지 경우, SDD 기억하기~~!!)
  // TODO: RQ call 없이 SSG로 바꾸고 보여드리기~~!!

  return (
    <article css={cardWrapper}>
      <div css={companyInfoContainer}>
        <div css={companyLogo}>
          <Image fill src={companyData.logoUrl || defaultCompanyLogo} alt="" sizes="1" />
        </div>
        <div css={companyInfoBox}>
          <div css={companyName}>{companyData.name}</div>
          <div css={buttonContainer}>
            <Link href={`/company/${companyData.id}/detail`} passHref css={companyDetailButton}>
              기업상세
            </Link>
            <Link href={`/company/${companyData.id}/jd`} passHref css={moreExpJobButton}>
              공고 더보기
            </Link>
          </div>
        </div>
      </div>

      <div css={expJobListContainer}>
        {jobData?.pageResult.totalElements === 0 && (
          <p css={noExplistArrText}>
            <AiOutlineInfoCircle /> 만료된 공고가 없습니다.
          </p>
        )}
        {jobData?.jobDataArr.map((job) => {
          const { date: jobStartDate } = dateConverter(job.startTime);

          const { date: jobEndDate } = dateConverter(job.endTime);

          return (
            <div key={`ExpJob${job.id}`} css={expJobBox}>
              <div css={jobTitleContainer}>
                <strong css={jobTitle}>{job.title}</strong>
                <p css={jobDate}>
                  {`${jobStartDate}`}~{`${jobEndDate}`}
                </p>
              </div>
              <div css={taskContainer}>
                <div css={flexBox}>
                  <p css={taskSummary}>{job.task}</p>
                </div>
                <Link href={`${JOBS_DETAIL_URL}/${job.id}`} passHref css={jobDetailButton}>
                  상세보기 <BsChevronRight />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};
