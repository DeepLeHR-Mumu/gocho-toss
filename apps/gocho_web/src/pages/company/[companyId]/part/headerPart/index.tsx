import { FunctionComponent } from "react";
import { FiEye, FiYoutube } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";

import { useCompanyDetail, useCompanyBookmarkToggle } from "shared-api/company";

import { useUserProfile } from "shared-api/auth";
import { companyBookmarkEvent } from "shared-ga/company";
import catchLogoSrc from "shared-image/global/common/catch_logo.png";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { useModal } from "@/globalStates";

import {
  sectionContainer,
  companyLogoBox,
  infoContainer,
  bookmarkButton,
  icon,
  viewBox,
  viewColor,
  companyName,
  industry,
  catchLinkButton,
  youtubeLinkButton,
  catchLogoBox,
} from "./style";

export const HeaderPart: FunctionComponent = () => {
  const router = useRouter();

  const { setModal } = useModal();
  const { data: userData } = useUserProfile();
  const { data: companyDetailData } = useCompanyDetail({
    companyId: Number(router.query.companyId),
    isStatic: false,
  });
  const { mutate: companyBookmarkToggle } = useCompanyBookmarkToggle();

  if (!companyDetailData) {
    return <div>..</div>;
  }

  const setBookmarkHandler = () => {
    if (!userData) {
      return setModal("loginModal", { button: "close" });
    }
    companyBookmarkEvent(Number(router.query.companyId));
    return companyBookmarkToggle({ companyId: Number(router.query.companyId) });
  };

  return (
    <section css={sectionContainer}>
      <div css={companyLogoBox}>
        <Image src={companyDetailData.logoUrl || defaultCompanyLogo} alt="" fill sizes="1" />
      </div>
      <div css={infoContainer}>
        <div>
          <p css={companyName}>{companyDetailData.name}</p>
          <p css={industry}>{companyDetailData.industry}</p>
        </div>
        <div>
          <button type="button" css={bookmarkButton(companyDetailData.isBookmark)} onClick={setBookmarkHandler}>
            <BsFillBookmarkFill />
            기업 북마크 {companyDetailData.bookmark.toLocaleString("ko-KR")}
          </button>
          <p css={viewBox}>
            <span css={icon}>
              <FiEye />
            </span>
            조회수 <span css={viewColor}>{companyDetailData.view.toLocaleString("ko-KR")}</span>
          </p>
        </div>
      </div>
      {companyDetailData.catchUrl && (
        <a css={catchLinkButton} href={companyDetailData.catchUrl} target="_blank" rel="noopener noreferrer">
          캐치 기업정보 더보기
          <div css={catchLogoBox}>
            <Image src={catchLogoSrc} alt="" fill sizes="1" />
          </div>
        </a>
      )}

      {companyDetailData.youtubeUrl && (
        <a
          css={youtubeLinkButton}
          href={companyDetailData.youtubeUrl}
          aria-label={`${companyDetailData.name} 유튜브 바로가기`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiYoutube /> 기업 정보영상 보기
        </a>
      )}
    </section>
  );
};
