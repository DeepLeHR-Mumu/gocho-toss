import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillBookmarkFill } from "react-icons/bs";

import { useAddCompanyBookmarkArr, useDeleteCompanyBookmarkArr } from "shared-api/bookmark";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { SkeletonBox } from "../../common/atom/skeletonBox";
import { CompanyCardProps, CompanyCardSkeleton } from "./type";
import { companyCardSkeleton, cardWrapper, bookmarkButtonWrapper, nameCSS, companyLogoBox } from "./style";

export const CompanyCard: FunctionComponent<CompanyCardProps | CompanyCardSkeleton> = ({
  companyData,
  isBookmarked,
  userId,
  isSkeleton,
}) => {
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

  if (isSkeleton || companyData === undefined) {
    return (
      <div css={companyCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const addCompanyBookmark = () => {
    if (userId) addMutate({ userId, elemId: companyData.id });
  };

  const deleteCompanyBookmark = () => {
    if (userId) deleteMutate({ userId, elemId: companyData.id });
  };

  return (
    <article css={cardWrapper}>
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
      <Link href={`/company/${companyData.id}/detail`} passHref>
        <a>
          <strong css={nameCSS}>{companyData.name}</strong>
          <div css={companyLogoBox}>
            <Image
              layout="fill"
              objectFit="contain"
              src={companyData.logoUrl || defaultCompanyLogo}
              alt={companyData.name}
            />
          </div>
        </a>
      </Link>
    </article>
  );
};
