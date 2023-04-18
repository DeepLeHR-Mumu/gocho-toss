import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiYoutube, FiEye } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useRouter } from "next/router";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { dateConverter } from "shared-util";
import { DdayBox } from "shared-ui/common/atom/dDayBox";
import { useUserProfile } from "shared-api/auth";
import { useJdApplyClick, useJdBookmarkToggle } from "shared-api/job";
import { jdBookmarkEvent } from "shared-ga/jd";

import { useModal } from "@/globalStates";

import { HeaderProps } from "./type";
import {
  applyButton,
  buttonCSS,
  youtubeButton,
  companyNameCSS,
  dateBox,
  dateCSS,
  cutBox,
  headerCSS,
  imageBox,
  linksCSS,
  titleCSS,
  viewCSS,
  applyEndButton,
} from "./style";

export const Header: FunctionComponent<HeaderProps> = ({ jobDetailData, isDdayEnd }) => {
  const { data: userInfoData } = useUserProfile();
  const { setModal } = useModal();
  const router = useRouter();

  const { mutate: mutateJdApplyClick } = useJdApplyClick();
  const { mutate: jobBookmarkToggle } = useJdBookmarkToggle();

  const { date: jobStartDate } = dateConverter(jobDetailData.startTime);
  const { date: jobEndDate, year: jobEndYear } = dateConverter(jobDetailData.endTime);

  const jobBookmarkToggleHandler = () => {
    if (!userInfoData) {
      setModal("loginModal", { button: "close" });
      return;
    }
    jdBookmarkEvent(jobDetailData.id);
    jobBookmarkToggle({ jdId: jobDetailData.id });
  };

  return (
    <header css={headerCSS}>
      <div css={imageBox}>
        <Image alt="" fill sizes="1" src={jobDetailData.company.logoUrl || defaultCompanyLogo} />
      </div>
      <div>
        <ul css={dateBox}>
          <li>
            <DdayBox endTime={jobDetailData.endTime} />
          </li>
          <li>{jobDetailData.cut && <div css={cutBox}>채용시마감</div>}</li>
          <li>
            <p css={dateCSS}>{jobEndYear !== "9999" ? `${jobStartDate}` : `${jobStartDate} ~ ${jobEndDate}`}</p>
          </li>
        </ul>{" "}
        <Link href={`/company/${jobDetailData.company.id}/detail`} passHref css={companyNameCSS}>
          {jobDetailData.company.name}
        </Link>
        <p css={titleCSS}>{jobDetailData.title}</p>
        <ul css={linksCSS}>
          <li>
            {isDdayEnd ? (
              <p css={applyEndButton}>채용사이트</p>
            ) : (
              <a
                href={jobDetailData.applyUrl}
                target="_blank"
                css={applyButton}
                rel="noopener noreferrer"
                onClick={() => {
                  mutateJdApplyClick({ id: Number(router.query.jobId) });
                }}
              >
                채용사이트
              </a>
            )}
          </li>
          <li>
            <button type="button" css={buttonCSS(jobDetailData.isBookmark)} onClick={jobBookmarkToggleHandler}>
              <BsFillBookmarkFill />
              공고 북마크 {jobDetailData?.bookmark}
            </button>
          </li>
          <li>
            <Link href={`/company/${jobDetailData.company.id}/detail`} passHref css={buttonCSS(false)}>
              기업정보
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
          <FiEye /> {jobDetailData?.view.toLocaleString("ko-KR")}
        </p>
      </div>
    </header>
  );
};
