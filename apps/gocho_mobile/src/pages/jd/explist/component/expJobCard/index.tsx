import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { useJobArr } from "shared-api/job";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { dateConverter } from "shared-util";
import { JOBS_DETAIL_URL } from "shared-constant";

import { ExpJobCardProps, ExpJobCardSkeleton } from "./type";
import {
  expJobCardSkeleton,
  cardWrapper,
  companyInfoContainer,
  companyLogo,
  buttonContainer,
  moreExpJobButton,
  companyDetailButton,
  companyName,
  expJobListContainer,
  expJobBox,
  jobTitleContainer,
  jobTitle,
  jobDate,
  taskContainer,
  taskBox,
  jobDetailButton,
  noExplistArrText,
  flexRow,
} from "./style";

export const ExpJobCard: FunctionComponent<ExpJobCardProps | ExpJobCardSkeleton> = ({ companyData, isSkeleton }) => {
  const { data: jobData } = useJobArr({
    order: "recent",
    filter: "expired",
    companyId: companyData?.id,
    size: 3,
  });

  if (isSkeleton || companyData === undefined) {
    return (
      <div css={expJobCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }
  // TODO: 스토리북으로 공고 없을 때 테스트해보기 (여러 가지 경우, SDD 기억하기)
  // TODO: RQ call 없이 SSG로 바꾸기

  return (
    <article css={cardWrapper}>
      <div css={companyInfoContainer}>
        <div css={companyLogo}>
          <Image fill src={companyData.logoUrl || defaultCompanyLogo} alt={companyData.name} sizes="1" />
        </div>
        <div>
          <div css={companyName}>{companyData.name}</div>
          <div css={buttonContainer}>
            <Link css={companyDetailButton} href={`/company/${companyData.id}/detail`} passHref>
              기업상세
            </Link>

            <Link
              href={{
                pathname: `/company/${companyData.id}/jd`,
                query: {
                  page: 1,
                },
              }}
              css={moreExpJobButton}
              passHref
            >
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
        {jobData?.jobDataArr.map((data) => {
          const { date: jobStartDate } = dateConverter(data.startTime);
          const { date: jobEndDate, year: jobEndYear } = dateConverter(data.endTime);

          return (
            <div key={`ExpJob${data.id}`} css={expJobBox}>
              <div css={jobTitleContainer}>
                <strong css={jobTitle}>{data.title}</strong>
                <p css={jobDate}>{jobEndYear === "9999" ? jobStartDate : `${jobStartDate} ~ ${jobEndDate}`}</p>
              </div>

              <div css={taskContainer}>
                <div css={flexRow}>
                  <div css={taskBox} key={`${data.id}${data.task}`}>
                    {data.task}
                  </div>
                </div>

                <Link href={`${JOBS_DETAIL_URL}/${data.id}`} passHref css={jobDetailButton}>
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
