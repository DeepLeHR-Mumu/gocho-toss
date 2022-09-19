import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillBookmarkFill } from "react-icons/bs";

import { useAddUserBookmark, useDeleteUserBookmark } from "@api/bookmark";
import { SkeletonBox } from "@component/common/atom/skeletonBox";
import { COMPANY_DETAIL_URL } from "@constant/internalURL";
import defaultCompanyLogo from "@public/images/global/common/default_company_logo.svg";

import { CompanyCardProps, CompanyCardSkeleton } from "./type";
import {
  companyCardSkeleton,
  cardWrapper,
  bookmarkButtonWrapper,
  isRecruitingCSS,
  NameCSS,
  infoWrapper,
  sizeCSS,
  sectorCSS,
  companyLogoBox,
} from "./style";

export const CompanyCard: FunctionComponent<CompanyCardProps | CompanyCardSkeleton> = ({
  companyData,
  isBookmarked,
  userId,
  isSkeleton,
  refetchUserBookmark,
}) => {
  const [imageSrc, setImageSrc] = useState(companyData?.logoUrl as string);

  const { mutate: addMutate } = useAddUserBookmark();
  const { mutate: deleteMutate } = useDeleteUserBookmark();

  const size = "";
  const sector = "";

  if (isSkeleton || companyData === undefined) {
    return (
      <div css={companyCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

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
    <article css={cardWrapper}>
      <Link href={`${COMPANY_DETAIL_URL}/${companyData.id}`} passHref>
        <a>
          <button
            type="button"
            css={bookmarkButtonWrapper(isBookmarked)}
            onClick={(event) => {
              event.preventDefault();
              return isBookmarked ? deleteCompanyBookmark() : addCompanyBookmark();
            }}
          >
            <BsFillBookmarkFill />
          </button>
          <p css={isRecruitingCSS}>#채용중</p>
          <div css={NameCSS}>{companyData.name}</div>
          <div css={infoWrapper}>
            <div css={sizeCSS}>{size}</div>
            <div css={sectorCSS}>{sector}</div>
          </div>
          <div css={companyLogoBox}>
            <Image
              layout="fill"
              objectFit="contain"
              src={imageSrc}
              alt=""
              onError={() => {
                return setImageSrc(defaultCompanyLogo);
              }}
            />
          </div>
        </a>
      </Link>
    </article>
  );
};
