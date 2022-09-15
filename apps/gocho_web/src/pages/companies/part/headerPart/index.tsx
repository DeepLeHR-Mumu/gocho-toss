import { FunctionComponent, useState } from "react";
import { FiEye, FiYoutube } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

import defaultCompanyLogo from "@public/images/global/common/default_company_logo.svg";

import { useAddUserBookmark, useDeleteUserBookmark, useUserCompanyBookmarkArr } from "@api/bookmark";
import { useUserInfo } from "@api/auth";
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

export const HeaderPart: FunctionComponent<HeaderPartProps> = ({ companyData, refetchCompanyDetail }) => {
  const [imageSrc, setImageSrc] = useState(companyData?.logoUrl as string);

  const { data: userData } = useUserInfo();
  const { data: userCompanyBookmarkArr, refetch } = useUserCompanyBookmarkArr({ userId: userData?.id });

  const isBookmarked = !!userCompanyBookmarkArr?.some((company) => {
    return company.id === companyData.id;
  });

  const { mutate: addMutate } = useAddUserBookmark();
  const { mutate: deleteMutate } = useDeleteUserBookmark();

  const addCompanyBookmark = () => {
    return (
      userData?.id &&
      addMutate(
        { userId: userData?.id, likeType: "company-bookmarks", elemId: companyData.id },
        {
          onSuccess: () => {
            refetch();
            refetchCompanyDetail();
          },
        }
      )
    );
  };

  const deleteCompanyBookmark = () => {
    return (
      userData?.id &&
      deleteMutate(
        { userId: userData?.id, likeType: "company-bookmarks", elemId: companyData.id },
        {
          onSuccess: () => {
            refetch();
            refetchCompanyDetail();
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
