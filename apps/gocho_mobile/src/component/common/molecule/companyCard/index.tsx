import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillBookmarkFill } from "react-icons/bs";

import { useAddCompanyBookmarkArr, useDeleteCompanyBookmarkArr } from "shared-api/bookmark";
import { useUserInfo } from "shared-api/auth";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { useModal } from "@recoil/hook/modal";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { CompanyCardProps, CompanyCardSkeleton } from "./type";
import { companyCardSkeleton, cardWrapper, bookmarkButtonWrapper, NameCSS, companyLogoBox } from "./style";

export const CompanyCard: FunctionComponent<CompanyCardProps | CompanyCardSkeleton> = ({
  companyData,
  isBookmarked,
  isSkeleton,
}) => {
  const { isSuccess: isUserLoginSuccess, data: userData } = useUserInfo();
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

  if (isSkeleton || companyData === undefined) {
    return (
      <div css={companyCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const addCompanyBookmark = () => {
    if (!isUserLoginSuccess) {
      setCurrentModal("loginModal", { button: "close" });
      return;
    }
    addMutate({ userId: userData.id, elemId: companyData.id });
  };

  const deleteCompanyBookmark = () => {
    if (userData) deleteMutate({ userId: userData.id, elemId: companyData.id });
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
        aria-label={isBookmarked ? "기업 북마크 해지" : "기업 북마크 하기"}
      >
        <BsFillBookmarkFill />
      </button>
      <Link href={`/company/${companyData.id}/detail`} passHref>
          <strong css={NameCSS}>{companyData.name}</strong>
          <div css={companyLogoBox}>
            <Image fill src={companyData.logoUrl || defaultCompanyLogo} alt={companyData.name} />
          </div>
      </Link>
    </article>
  );
};
