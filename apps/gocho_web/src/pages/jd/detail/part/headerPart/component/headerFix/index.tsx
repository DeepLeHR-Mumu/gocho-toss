import { FunctionComponent } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useRouter } from "next/router";

import { DdayBox } from "shared-ui/common/atom/dDayBox";
import { useUserProfile } from "shared-api/auth";
import { useJdApplyClick, useJdBookmarkToggle } from "shared-api/job";
import { jdBookmarkEvent } from "shared-ga/jd";

import { Layout } from "@component/layout";
import { useModal } from "@/globalStates";

import { HeaderFixProps } from "./type";
import {
  applyBox,
  applyButton,
  bookmarkButton,
  companyNameCSS,
  flexBetweenBox,
  flexBox,
  headerCSS,
  dDayContainer,
  cutBox,
  titleBox,
  titleCSS,
  applyEndButton,
} from "./style";

export const HeaderFix: FunctionComponent<HeaderFixProps> = ({ jobDetailData, isDdayEnd }) => {
  const { data: userInfoData } = useUserProfile();
  const { setModal } = useModal();
  const router = useRouter();

  const { mutate: jdBookmarkToggle } = useJdBookmarkToggle();
  const { mutate: mutateJdApplyClick } = useJdApplyClick();

  const jdBookmarkToggleHandler = () => {
    if (!userInfoData) {
      setModal("loginModal", { button: "close" });
      return;
    }
    jdBookmarkEvent(jobDetailData.id);
    jdBookmarkToggle({ jdId: jobDetailData.id });
  };

  return (
    <header css={headerCSS}>
      <Layout>
        <div css={flexBetweenBox}>
          <div css={flexBox}>
            <div css={titleBox}>
              <p css={companyNameCSS}>{jobDetailData.company.name}</p>
              <p css={titleCSS}>{jobDetailData.title}</p>
            </div>
          </div>
          <div css={flexBox}>
            <button
              type="button"
              css={bookmarkButton(jobDetailData.isBookmark)}
              onClick={jdBookmarkToggleHandler}
              aria-label={jobDetailData.isBookmark ? "북마크 해지" : "북마크 하기"}
            >
              <BsFillBookmarkFill />
              공고 북마크 <span> {jobDetailData?.bookmark}</span>
            </button>
            <div css={applyBox}>
              <div css={dDayContainer}>
                <DdayBox endTime={jobDetailData.endTime} />
                {jobDetailData.cut && <div css={cutBox}>채용시마감</div>}
              </div>
              {isDdayEnd ? (
                <p css={applyEndButton}>채용사이트</p>
              ) : (
                <a
                  href={jobDetailData.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  css={applyButton}
                  onClick={() => {
                    mutateJdApplyClick({ id: Number(router.query.jobId) });
                  }}
                >
                  채용사이트
                </a>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </header>
  );
};
