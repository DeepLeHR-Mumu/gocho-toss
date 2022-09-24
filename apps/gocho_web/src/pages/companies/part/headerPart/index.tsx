import { FunctionComponent, useState } from "react";
import { FiEye, FiYoutube } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

import catchLogoSrc from "shared-image/global/common/catch_logo.png";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { useAddUserBookmark, useDeleteUserBookmark } from "shared-api/bookmark";
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

export const HeaderPart: FunctionComponent<HeaderPartProps> = ({
  companyData,
  isBookmarked,
  userId,
  refetchUserBookmark,
}) => {
  const [imageSrc, setImageSrc] = useState(companyData?.logoUrl as string);

  const { mutate: addMutate } = useAddUserBookmark();
  const { mutate: deleteMutate } = useDeleteUserBookmark();

  const addCompanyBookmark = () => {
    return (
      userId &&
      addMutate(
        { userId, likeType: "company-bookmarks", elemId: companyData.id },
        {
          onSuccess: () => {
            refetchUserBookmark();
          },
        }
      )
    );
  };

  const deleteCompanyBookmark = () => {
    return (
      userId &&
      deleteMutate(
        { userId, likeType: "company-bookmarks", elemId: companyData.id },
        {
          onSuccess: () => {
            refetchUserBookmark();
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
          objectFit="cover"
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
            <BsFillBookmarkFill />
            기업 북마크 {companyData.bookmark}
          </button>
          <p css={viewBox}>
            <span css={icon}>
              <FiEye />
            </span>
            조회수 <span css={viewColor}>{companyData.view}</span>
          </p>
        </div>
        <p css={companyName}>{companyData.name}</p>
        <p css={industry}>{companyData.industry}</p>
      </div>
      {/* LATER null data들에대한 정확한 파악 필요 null 일 시 렌더링 안되는 것 확인 및 디자인 변경 확인 필요 */}
      {companyData.catchUrl && (
        <Link href={companyData.catchUrl} passHref>
          <a css={catchLinkButton}>
            캐치 기업정보 더보기
            <div css={catchLogoBox}>
              <Image src={catchLogoSrc} alt="" layout="fill" objectFit="contain" />
            </div>
          </a>
        </Link>
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
