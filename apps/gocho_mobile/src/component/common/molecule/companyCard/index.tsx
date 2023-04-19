import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillBookmarkFill } from "react-icons/bs";

import { useCompanyBookmarkToggle } from "shared-api/company";
import { useUserProfile } from "shared-api/auth";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { useModal } from "@/globalStates";

import { CompanyCardProps, CompanyCardSkeleton } from "./type";
import { companyCardSkeleton, cardWrapper, bookmarkButtonWrapper, NameCSS, companyLogoBox } from "./style";

export const CompanyCard: FunctionComponent<CompanyCardProps | CompanyCardSkeleton> = ({
  companyData,
  isBookmarked,
  isSkeleton,
}) => {
  const { isSuccess: isUserLoginSuccess } = useUserProfile();
  const { setModal } = useModal();
  const { mutate: companyBookmarkToggle } = useCompanyBookmarkToggle();

  if (isSkeleton || companyData === undefined) {
    return (
      <div css={companyCardSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const companyBookamrkToggle = () => {
    if (!isUserLoginSuccess) {
      setModal("loginModal", { button: "close" });
      return;
    }
    companyBookmarkToggle({ companyId: companyData.id });
  };

  return (
    <article css={cardWrapper}>
      <button
        type="button"
        css={bookmarkButtonWrapper(isBookmarked)}
        onClick={companyBookamrkToggle}
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
