import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiYoutube } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useRouter } from "next/router";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { useUserProfile } from "shared-api/auth";
import { useJdApplyClick, useJdBookmarkToggle } from "shared-api/job";
import { dateConverter, dDayCalculator } from "shared-util";
import { DdayBox } from "shared-ui/common/atom/dDayBox";
import { jdBookmarkEvent } from "shared-ga/jd";

import { useModal } from "@/globalStates";
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

export const Header: FunctionComponent<HeaderProps> = ({ jobDetailData }) => {
  const router = useRouter();
  const { setModal } = useModal();
  const { data: userInfoData } = useUserProfile();

  const { mutate: mutateJdApplyClick } = useJdApplyClick();
  const { mutate: jdBookmarkToggle } = useJdBookmarkToggle();

  const { date: jobStartDate } = dateConverter(jobDetailData.startTime);
  const { date: jobEndDate, year: jobEndYear } = dateConverter(jobDetailData.endTime);

  const jdBookmarkToggleHandler = () => {
    if (!userInfoData) {
      setModal("loginModal", { button: "close" });
      return;
    }
    jdBookmarkEvent(jobDetailData.id);
    jdBookmarkToggle({ jdId: jobDetailData.id });
  };

  const isDdayEnd = dDayCalculator(jobDetailData.endTime) === "만료";

  return (
    <header css={headerWrapper}>
      <div css={flexBox}>
        <div css={logoContainer}>
          <div css={logoBox}>
            <Image
              src={jobDetailData.company.logoUrl || defaultCompanyLogo}
              alt={jobDetailData.company.name}
              fill
              sizes="1"
            />
          </div>
        </div>
        <ul css={linkContainer}>
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
            <button
              type="button"
              css={buttonCSS(jobDetailData.isBookmark)}
              onClick={jdBookmarkToggleHandler}
              aria-label={jobDetailData.isBookmark ? "북마크 해지" : "북마크 하기"}
            >
              <BsFillBookmarkFill />
              공고 북마크 {jobDetailData.bookmark}
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
      </div>

      <div>
        <ul css={dateBox}>
          <li>
            <DdayBox endTime={jobDetailData.endTime} />
          </li>
          <li>{jobDetailData.cut && <p css={cutBox}>채용시마감</p>}</li>
          <li>
            <p css={date}>{jobEndYear === "9999" ? jobStartDate : `${jobStartDate} ~ ${jobEndDate}`}</p>
          </li>
        </ul>
        <Link href={`/company/${jobDetailData.company.id}/detail`} css={companyName}>
          {jobDetailData.company.name}
        </Link>
        <p css={title}>{jobDetailData.title}</p>
      </div>
    </header>
  );
};
