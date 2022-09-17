import { FunctionComponent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiYoutube, FiEye } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";

import defaultCompanyLogo from "@public/images/global/common/default_company_logo.svg";

import { dateConverter } from "shared-util/date";
import { DdayBox } from "shared-ui/pages/common/atom/dDayBox";

import { COMPANY_DETAIL_URL } from "@constant/internalURL";
import { useAddUserBookmark, useDeleteUserBookmark } from "shared-api/bookmark";
import { HeaderProps } from "./type";
import {
  applyButton,
  bookmarkButton,
  buttonCSS,
  youtubeButton,
  companyNameCSS,
  dateBox,
  dateCSS,
  headerCSS,
  imageBox,
  linksCSS,
  titleCSS,
  viewCSS,
} from "./style";

export const Header: FunctionComponent<HeaderProps> = ({
  jobDetailData,
  isBookmarked,
  userId,
  refetchUserBookmark,
}) => {
  const [imageSrc, setImageSrc] = useState(jobDetailData.company.logoUrl as string);
  const { mutate: addMutate } = useAddUserBookmark();
  const { mutate: deleteMutate } = useDeleteUserBookmark();

  const addJobBookmark = () => {
    return (
      userId &&
      addMutate(
        { userId, likeType: "jd-bookmarks", elemId: jobDetailData.id },
        {
          onSuccess: () => {
            refetchUserBookmark();
          },
        }
      )
    );
  };

  const deleteJobBookmark = () => {
    return (
      userId &&
      deleteMutate(
        { userId, likeType: "jd-bookmarks", elemId: jobDetailData.id },
        {
          onSuccess: () => {
            refetchUserBookmark();
          },
        }
      )
    );
  };

  const { year: startYear, month: startMonth, date: startDate } = dateConverter(jobDetailData.startTime);
  const { year: endYear, month: endMonth, date: endDate } = dateConverter(jobDetailData.endTime);

  return (
    <header css={headerCSS}>
      <div css={imageBox}>
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
      <div>
        <ul css={dateBox}>
          <li>
            <DdayBox endTime={jobDetailData.endTime} />
          </li>
          <li>
            <p css={dateCSS}>{`${startYear}. ${startMonth}. ${startDate} ~ ${endYear}. ${endMonth}. ${endDate}`}</p>
          </li>
        </ul>
        <p css={companyNameCSS}>
          {jobDetailData.company.name}
          <button type="button" css={bookmarkButton}>
            <BsFillBookmarkFill />
          </button>
        </p>
        <h2 css={titleCSS}>{jobDetailData.title}</h2>
        <ul css={linksCSS}>
          <li>
            <a href={jobDetailData.applyUrl} target="_blank" css={applyButton} rel="noopener noreferrer">
              채용사이트
            </a>
          </li>
          <li>
            <button
              type="button"
              css={buttonCSS(isBookmarked)}
              onClick={() => {
                return isBookmarked ? deleteJobBookmark() : addJobBookmark();
              }}
            >
              <BsFillBookmarkFill />
              공고 북마크 {jobDetailData.bookmarkCount}
            </button>
          </li>
          <li>
            <Link href={`${COMPANY_DETAIL_URL}/${jobDetailData.company.companyId}`} passHref>
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
        <p css={viewCSS}>
          <FiEye /> {jobDetailData.viewCount.toLocaleString("ko-KR")}
        </p>
      </div>
    </header>
  );
};
