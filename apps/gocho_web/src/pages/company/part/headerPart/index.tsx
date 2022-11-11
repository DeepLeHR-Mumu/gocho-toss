import { FunctionComponent, useState } from "react";
import { FiEye, FiYoutube } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";

import catchLogoSrc from "shared-image/global/common/catch_logo.png";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
import { useUserInfo } from "shared-api/auth";
import { companyBookmarkEvent } from "shared-ga/company";

import { useModal } from "@recoil/hook/modal";

import { useAddCompanyBookmarkArr, useDeleteCompanyBookmarkArr } from "shared-api/bookmark";
import { HeaderPartProps } from "./type";
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

export const HeaderPart: FunctionComponent<HeaderPartProps> = ({ companyData, isBookmarked, userId }) => {
  const queryClient = useQueryClient();
  const { data: userInfoData } = useUserInfo();
  const { setCurrentModal } = useModal();

  const { mutate: addMutate } = useAddCompanyBookmarkArr({
    id: companyData?.id as number,
    logo_url: companyData?.logoUrl as string,
    name: companyData?.name as string,
  });
  const { mutate: deleteMutate } = useDeleteCompanyBookmarkArr({
    id: companyData?.id as number,
    logo_url: companyData?.logoUrl as string,
    name: companyData?.name as string,
  });

  const [imageSrc, setImageSrc] = useState(companyData?.logoUrl as string);

  const addCompanyBookmark = () => {
    return (
      userId &&
      addMutate(
        { userId, elemId: companyData.id },
        {
          onSuccess: () => {
            companyBookmarkEvent(companyData.id);
            queryClient.invalidateQueries(companyDetailKeyObj.detail({ companyId: companyData.id }));
          },
        }
      )
    );
  };

  const deleteCompanyBookmark = () => {
    return (
      userId &&
      deleteMutate(
        { userId, elemId: companyData.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(companyDetailKeyObj.detail({ companyId: companyData.id }));
          },
        }
      )
    );
  };

  return (
    <section css={sectionContainer}>
      <div css={companyLogoBox}>
        <Image
          layout="fill"
          objectFit="contain"
          src={imageSrc || companyData.logoUrl}
          alt={`${companyData.name} 기업 로고`}
          onError={() => {
            return setImageSrc(defaultCompanyLogo);
          }}
        />
      </div>
      <div css={infoContainer}>
        <div css={infoBox}>
          <button
            type="button"
            css={bookmarkButton(isBookmarked)}
            onClick={() => {
              if (!userInfoData) {
                return setCurrentModal("loginModal", { button: "close" });
              }
              return isBookmarked ? deleteCompanyBookmark() : addCompanyBookmark();
            }}
          >
            <BsFillBookmarkFill />
            기업 북마크 {companyData.bookmark}
          </button>
          <p css={viewBox}>
            <span css={icon}>
              <FiEye />
            </span>
            조회수 <span css={viewColor}>{companyData.view.toLocaleString("ko-KR")}</span>
          </p>
        </div>
        <p css={companyName}>{companyData.name}</p>
        <p css={industry}>{companyData.industry}</p>
      </div>
      {/* LATER null data들에대한 정확한 파악 필요 null 일 시 렌더링 안되는 것 확인 및 디자인 변경 확인 필요 */}
      {companyData.catchUrl && (
        <a css={catchLinkButton} href="companyData.catchUrl">
          캐치 기업정보 더보기
          <div css={catchLogoBox}>
            <Image src={catchLogoSrc} alt="" layout="fill" objectFit="contain" />
          </div>
        </a>
      )}

      {companyData.youtubeUrl && (
        <Link href={companyData.youtubeUrl} passHref>
          <a css={youtubeLinkButton} aria-label={`${companyData.name} 유튜브 바로가기`}>
            <FiYoutube />
          </a>
        </Link>
      )}
    </section>
  );
};
