import { FunctionComponent } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";

import { Profile } from "@component/common/molecule/profile";
import { UnAuthMenu } from "@component/common/molecule/unAuthMenu";
import { DdayBox } from "@component/common/atom/dDayBox";
import { Layout } from "@component/layout";
import { JOBS_LIST_URL } from "@constant/internalURL";
import { useUserInfo } from "@api/auth";

import { HeaderFixProps } from "./type";
import {
  applyBox,
  applyButton,
  bookmarkButton,
  companyNameCSS,
  flexBetweenBox,
  flexBox,
  goBackButton,
  headerCSS,
  dDayContainer,
  titleBox,
  titleCSS,
} from "./style";

export const HeaderFix: FunctionComponent<HeaderFixProps> = ({
  jobDetailData,
}) => {
  const { isSuccess } = useUserInfo();

  return (
    <header css={headerCSS}>
      <Layout>
        <div css={flexBetweenBox}>
          <div css={flexBox}>
            <Link href={JOBS_LIST_URL} passHref>
              <a css={goBackButton}>
                <FiArrowLeft />
              </a>
            </Link>
            <div css={titleBox}>
              <p css={companyNameCSS}>{jobDetailData.company.name}</p>
              <h2 css={titleCSS}>{jobDetailData.title}</h2>
            </div>
          </div>
          <div css={flexBox}>
            <button type="button" css={bookmarkButton}>
              <BsFillBookmarkFill />
              공고 북마크 <span> {jobDetailData.bookmarkCount}</span>
            </button>
            <div css={applyBox}>
              <div css={dDayContainer}>
                <DdayBox endTime={jobDetailData.endTime} />
              </div>
              <a
                href={jobDetailData.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                css={applyButton}
              >
                채용사이트
              </a>
            </div>
            {isSuccess ? <Profile /> : <UnAuthMenu />}
          </div>
        </div>
      </Layout>
    </header>
  );
};
