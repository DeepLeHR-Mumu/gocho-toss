import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillBookmarkFill } from "react-icons/bs";

import { useAddCompanyBookmarkArr, useDeleteCompanyBookmarkArr } from "shared-api/bookmark";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { SkeletonBox } from "../../common/atom/skeletonBox";
import { CompanyCardProps, CompanyCardSkeleton } from "./type";
import { companyCardSkeleton, cardWrapper, bookmarkButtonWrapper, NameCSS, companyLogoBox } from "./style";

export const CompanyCard: FunctionComponent<CompanyCardProps | CompanyCardSkeleton> = ({
  companyData,
  isBookmarked,
  userId,
  isSkeleton,
}) => {
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
      <Link href={`/company/${companyData.id}/detail`} passHref>
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
        {/* <p css={isRecruitingCSS}>#채용중</p> */}
        <strong css={NameCSS}>{companyData.name}</strong>
        <div css={companyLogoBox}>
          <Image
            layout="fill"
            objectFit="contain"
            src={imageSrc || companyData.logoUrl}
            alt={companyData.name}
            onError={() => {
              return setImageSrc(defaultCompanyLogo);
            }}
          />
        </div>
      </Link>
    </article>
  );
};
