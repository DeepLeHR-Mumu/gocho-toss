import { FunctionComponent } from "react";
import { FiEye, FiYoutube } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";

import { useCompanyDetail, useCompanyCountInfo } from "shared-api/company";
import { useAddCompanyBookmarkArr, useDeleteCompanyBookmarkArr, useUserCompanyBookmarkArr } from "shared-api/bookmark";
import { useUserInfo } from "shared-api/auth";
import { companyBookmarkEvent } from "shared-ga/company";
import catchLogoSrc from "shared-image/global/common/catch_logo.png";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { companyCountInfoKeyObj } from "shared-constant/queryKeyFactory/company/companyCountInfoKeyObj";

import { useModal } from "@/globalStates";

import {
  sectionContainer,
  companyLogoBox,
  infoContainer,
  infoBox,
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
  const queryClient = useQueryClient();

  const { setModal } = useModal();
  const { data: userData } = useUserInfo();
  const { data: companyCountInfoData } = useCompanyCountInfo({
    id: Number(router.query.companyId),
  });
  const { data: companyDetailData, isLoading } = useCompanyDetail({ companyId: Number(router.query.companyId) });
  const { data: userCompanyBookmarkArr } = useUserCompanyBookmarkArr({ userId: userData?.id });
  const { mutate: addMutate } = useAddCompanyBookmarkArr({
    id: companyDetailData?.id as number,
    logo_url: companyDetailData?.logoUrl as string,
    name: companyDetailData?.name as string,
  });
  const { mutate: deleteMutate } = useDeleteCompanyBookmarkArr({
    id: companyDetailData?.id as number,
    logo_url: companyDetailData?.logoUrl as string,
    name: companyDetailData?.name as string,
  });

  if (!companyDetailData || isLoading) {
    return <div>..</div>;
  }

  const addCompanyBookmark = () => {
    return (
      userData &&
      addMutate(
        { userId: userData.id, id: companyDetailData.id },
        {
          onSuccess: () => {
            companyBookmarkEvent(companyDetailData.id);
            queryClient.invalidateQueries(companyCountInfoKeyObj.countInfo({ id: companyDetailData.id }));
          },
        }
      )
    );
  };

  const deleteCompanyBookmark = () => {
    return (
      userData &&
      deleteMutate(
        { userId: userData.id, id: companyDetailData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(companyCountInfoKeyObj.countInfo({ id: companyDetailData.id }));
          },
        }
      )
    );
  };

  const isBookmarked = Boolean(
    userCompanyBookmarkArr?.some((company) => {
      return company.id === companyDetailData?.id;
    })
  );

  const setBookmarkHandler = () => {
    if (!userData) {
      return setModal("loginModal", { button: "close" });
    }
    return isBookmarked ? deleteCompanyBookmark() : addCompanyBookmark();
  };

  return (
    <section css={sectionContainer}>
      <div css={companyLogoBox}>
        <Image src={companyDetailData.logoUrl || defaultCompanyLogo} alt="" fill sizes="1" />
      </div>
      <div css={infoContainer}>
        <div css={infoBox}>
          <button type="button" css={bookmarkButton(isBookmarked)} onClick={setBookmarkHandler}>
            <BsFillBookmarkFill />
            기업 북마크 {companyCountInfoData?.bookmarkCount.toLocaleString("ko-KR")}
          </button>
          <p css={viewBox}>
            <span css={icon}>
              <FiEye />
            </span>
            조회수 <span css={viewColor}>{companyCountInfoData?.viewCount.toLocaleString("ko-KR")}</span>
          </p>
        </div>
        <p css={companyName}>{companyDetailData.name}</p>
        <p css={industry}>{companyDetailData.industry}</p>
      </div>
      {companyDetailData.catchUrl && (
        <a css={catchLinkButton} href={companyDetailData.catchUrl} target="_blank" rel="noopener noreferrer">
          캐치 기업정보 더보기
          <div css={catchLogoBox}>
            <Image src={catchLogoSrc} alt="" fill />
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
