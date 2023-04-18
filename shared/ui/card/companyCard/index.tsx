import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillBookmarkFill } from "react-icons/bs";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { useCompanyBookmarkToggle } from "shared-api/company";

import { SkeletonBox } from "../../common/atom/skeletonBox";
import { CompanyCardProps, CompanyCardSkeleton } from "./type";
import { companyCardSkeleton, cardWrapper, bookmarkButtonWrapper, nameCSS, companyLogoBox } from "./style";

export const CompanyCard: FunctionComponent<CompanyCardProps | CompanyCardSkeleton> = ({
  companyData,
  isSkeleton,
  refetchUserBookmark,
}) => {
  const { mutate: companyBookmarkToggle } = useCompanyBookmarkToggle();

  if (isSkeleton || companyData === undefined) {
    return (
      <div css={companyCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const companyBookmarkToggleHandler = () => {
    refetchUserBookmark();
    companyBookmarkToggle({ companyId: companyData.id });
  };

  return (
    <article css={cardWrapper}>
      <button type="button" css={bookmarkButtonWrapper(companyData.isBookmark)} onClick={companyBookmarkToggleHandler}>
        <BsFillBookmarkFill />
      </button>
      <Link href={`/company/${companyData.id}/detail`} passHref>
        <strong css={nameCSS}>{companyData.name}</strong>
        <div css={companyLogoBox}>
          <Image fill sizes="1" src={companyData.logoUrl || defaultCompanyLogo} alt="" />
        </div>
      </Link>
    </article>
  );
};
