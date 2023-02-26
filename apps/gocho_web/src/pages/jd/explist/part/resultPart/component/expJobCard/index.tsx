import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { useJobArr } from "shared-api/job";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { JOBS_DETAIL_URL } from "shared-constant/internalURL";
import { dateConverter } from "shared-util/date";

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
  taskBox,
  taskNumber,
  taskSummary,
  jobDetailButton,
  noExplistArrText,
} from "./style";

export const ExpJobCard: FunctionComponent<ExpJobCardProps | ExpJobCardSkeleton> = ({ companyData, isSkeleton }) => {
  const { data: jobDataArr } = useJobArr({
    companyId: companyData?.id,
    filter: "expired",
    order: "recent",
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
          <Image fill src={companyData.logoUrl || defaultCompanyLogo} alt="" />
        </div>
        <div css={companyInfoBox}>
          <div css={companyName}>{companyData.name}</div>
          <div css={buttonContainer}>
            <Link href={`/company/${companyData.id}/detail`} passHref>
              <a css={companyDetailButton}>기업상세</a>
            </Link>
            <Link href={`/company/${companyData.id}/jd`} passHref>
              <a css={moreExpJobButton}>공고 더보기</a>
            </Link>
          </div>
        </div>
      </div>

      <div css={expJobListContainer}>
        {jobDataArr?.count === 0 && (
          <p css={noExplistArrText}>
            <AiOutlineInfoCircle /> 만료된 공고가 없습니다.
          </p>
        )}
        {jobDataArr?.jobDataArr
          .filter((data, index) => {
            return index < 3;
          })
          .map((jobData) => {
            const { year: startYear, month: startMonth, date: startDate } = dateConverter(jobData.startTime);

            const { year: endYear, month: endMonth, date: endDate } = dateConverter(jobData.endTime);

            return (
              <div key={`ExpJob${jobData.id}`} css={expJobBox}>
                <div css={jobTitleContainer}>
                  <strong css={jobTitle}>{jobData.title}</strong>
                  <p css={jobDate}>
                    {`${startYear}.${startMonth}.${startDate}`}~{`${endYear}.${endMonth}.${endDate}`}
                  </p>
                </div>

                <div css={taskContainer}>
                  <div css={flexBox}>
                    <p css={taskSummary}>
                      모집한 직무
                      <span css={taskNumber}>{jobData.taskArr.length}</span>
                    </p>
                    {jobData.taskArr.map((task) => {
                      return (
                        <p css={taskBox} key={`${jobData.id}${task}`}>
                          {task}
                        </p>
                      );
                    })}
                  </div>
                  <Link href={`${JOBS_DETAIL_URL}/${jobData.id}`} passHref>
                    <a css={jobDetailButton}>
                      상세보기 <BsChevronRight />
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </article>
  );
};
