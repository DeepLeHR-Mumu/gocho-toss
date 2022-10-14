import { FunctionComponent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiYoutube } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useQueryClient } from "@tanstack/react-query";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { useUserInfo } from "shared-api/auth";
import { useModal } from "@recoil/hook/modal";
import { dateConverter, dDayCalculator } from "shared-util/date";
import { jobDetailKeyObj } from "shared-constant/queryKeyFactory/job/jobDetailKeyObj";
import { DdayBox } from "shared-ui/common/atom/dDayBox";

import { COMPANY_DETAIL_URL } from "shared-constant/internalURL";
import { useAddJobBookmarkArr, useDeleteJobBookmarkArr } from "shared-api/bookmark";
import { HeaderProps } from "./type";
import {
  headerWrapper,
  flexBox,
  logoContainer,
  logoBox,
  linkContainer,
  applyButton,
  cutBox,
  buttonCSS,
  youtubeButton,
  dateBox,
  date,
  companyName,
  title,
  applyEndButton,
} from "./style";

export const Header: FunctionComponent<HeaderProps> = ({ jobDetailData, isBookmarked, userId }) => {
  const queryClient = useQueryClient();
  const { setCurrentModal } = useModal();
  const { isSuccess } = useUserInfo();
  const [imageSrc, setImageSrc] = useState(jobDetailData.company.logoUrl as string);

  const { mutate: addMutate } = useAddJobBookmarkArr({
    id: jobDetailData?.id as number,
    end_time: jobDetailData?.endTime as number,
    title: jobDetailData?.title as string,
    cut: jobDetailData?.cut as boolean,
    company: {
      name: jobDetailData?.company.name as string,
      logo_url: jobDetailData?.company.logoUrl as string,
    },
  });

  const { mutate: deleteMutate } = useDeleteJobBookmarkArr({
    id: jobDetailData?.id as number,
    end_time: jobDetailData?.endTime as number,
    title: jobDetailData?.title as string,
    cut: jobDetailData?.cut as boolean,
    company: {
      name: jobDetailData?.company.name as string,
      logo_url: jobDetailData?.company.logoUrl as string,
    },
  });

  const addJobBookmark = () => {
    if (!isSuccess) {
      setCurrentModal("loginModal", { button: "close" });
      return undefined;
    }
    return (
      userId &&
      addMutate(
        { userId, elemId: jobDetailData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(jobDetailKeyObj.detail({ id: jobDetailData.id }));
          },
        }
      )
    );
  };

  const deleteJobBookmark = () => {
    return (
      userId &&
      deleteMutate(
        { userId, elemId: jobDetailData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(jobDetailKeyObj.detail({ id: jobDetailData.id }));
          },
        }
      )
    );
  };

  const { year: startYear, month: startMonth, date: startDate } = dateConverter(jobDetailData.startTime);
  const { year: endYear, month: endMonth, date: endDate } = dateConverter(jobDetailData.endTime);

  const isDdayEnd = dDayCalculator(jobDetailData.endTime) === "만료";

  return (
    <header css={headerWrapper}>
      <div css={flexBox}>
        <div css={logoContainer}>
          <div css={logoBox}>
            <Image
              onError={() => {
                return setImageSrc(defaultCompanyLogo);
              }}
              src={imageSrc || jobDetailData.company.logoUrl}
              alt={jobDetailData.company.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <ul css={linkContainer}>
          <li>
            {isDdayEnd ? (
              <p css={applyEndButton}>채용사이트</p>
            ) : (
              <a href={jobDetailData.applyUrl} target="_blank" css={applyButton} rel="noopener noreferrer">
                채용사이트
              </a>
            )}
          </li>
          <li>
            <button
              type="button"
              css={buttonCSS(isBookmarked)}
              onClick={() => {
                return isBookmarked ? deleteJobBookmark() : addJobBookmark();
              }}
              aria-label={isBookmarked ? "북마크 해지" : "북마크 하기"}
            >
              <BsFillBookmarkFill />
              공고 북마크 {jobDetailData.bookmarkCount}
            </button>
          </li>
          <li>
            <Link
              href={{
                pathname: `${COMPANY_DETAIL_URL}/${jobDetailData.company.companyId}`,
                query: { info: "detail" },
              }}
              passHref
            >
              <a css={buttonCSS(false)}>기업정보</a>
            </Link>
          </li>
          {jobDetailData.company.youtubeUrl && (
            <li>
              <a href={jobDetailData.company.youtubeUrl} target="_blank" rel="noopener noreferrer" css={youtubeButton}>
                <FiYoutube />
              </a>
            </li>
          )}
        </ul>
      </div>

      {/*  */}
      <div>
        <ul css={dateBox}>
          <li>
            <DdayBox endTime={jobDetailData.endTime} />
          </li>
          <li>{jobDetailData.cut && <p css={cutBox}>채용시마감</p>}</li>
          <li>
            <p css={date}>
              {`${startYear}. ${startMonth}. ${startDate}`} ~{" "}
              {endYear !== 9999 && `${endYear}. ${endMonth}. ${endDate}`}
            </p>
          </li>
        </ul>
        <Link
          href={{
            pathname: `${COMPANY_DETAIL_URL}/${jobDetailData.company.companyId}`,
            query: { info: "detail" },
          }}
        >
          <a css={companyName}>{jobDetailData.company.name}</a>
        </Link>
        <p css={title}>{jobDetailData.title}</p>
      </div>
    </header>
  );
};
