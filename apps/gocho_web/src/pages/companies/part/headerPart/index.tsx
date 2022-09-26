import { FunctionComponent, useState } from "react";
import { FiEye, FiYoutube } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";

import defaultCompanyLogo from "@public/images/global/common/default_company_logo.svg";
import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";

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
} from "./style";

export const HeaderPart: FunctionComponent<HeaderPartProps> = ({ companyData, isBookmarked, userId }) => {
  const queryClient = useQueryClient();
  const [imageSrc, setImageSrc] = useState(companyData?.logoUrl as string);

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

  const addCompanyBookmark = () => {
    return (
      userId &&
      addMutate(
        { userId, elemId: companyData.id },
        {
          onSuccess: () => {
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
          src={imageSrc}
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
              return isBookmarked ? deleteCompanyBookmark() : addCompanyBookmark();
            }}
          >
            <div css={icon}>
              <BsFillBookmarkFill />
            </div>
            기업 북마크 {companyData.bookmark}
          </button>
          <div css={viewBox}>
            <span css={icon}>
              <FiEye />
            </span>
            조회수 <span css={viewColor}>{companyData.view}</span>
          </div>
        </div>
        <h2 css={companyName}>{companyData.name}</h2>
        <p css={industry}>{companyData.industry}</p>
      </div>
      {/* LATER null data들에대한 정확한 파악 필요 null 일 시 렌더링 안되는 것 확인 및 디자인 변경 확인 필요 */}
      {companyData.catchUrl && (
        <Link href={companyData.catchUrl} passHref>
          <a>
            <button type="button" css={catchLinkButton}>
              캐치 기업정보 더보기
            </button>
          </a>
        </Link>
      )}

      {companyData.youtubeUrl && (
        <Link href={companyData.youtubeUrl} passHref>
          <a>
            <button type="button" css={youtubeLinkButton}>
              <FiYoutube />
            </button>
          </a>
        </Link>
      )}
    </section>
  );
};
