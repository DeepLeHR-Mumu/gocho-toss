import Image from "next/image";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

import { useUserProfile } from "shared-api/auth";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { useCompanyDetail, useCompanyBookmarkToggle } from "shared-api/company";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

import { Layout } from "@component/layout";
import { useModal } from "@/globalStates";

import {
  wrapper,
  logoBox,
  container,
  bookmarkButton,
  viewCountContainer,
  viewCount,
  companyName,
  industryText,
  buttonBox,
  infoBox,
} from "./style";

export const HeaderPart: FunctionComponent = () => {
  const router = useRouter();

  const { setModal } = useModal();
  const { data: userData } = useUserProfile();
  const { mutate: companyBookmarkToggle } = useCompanyBookmarkToggle();
  const { data: companyDetailData, isLoading } = useCompanyDetail({ companyId: Number(router.query.companyId) });

  const companyBookmarkToggleHandler = () => {
    if (!userData) {
      setModal("loginModal", { button: "close" });
    }
    return companyBookmarkToggle({ companyId: Number(router.query.companyId) });
  };

  if (!companyDetailData || isLoading) {
    return (
      <section css={wrapper}>
        <SkeletonBox />
      </section>
    );
  }

  return (
    <section css={wrapper}>
      <Layout>
        <div css={container}>
          <div css={infoBox}>
            <div css={logoBox}>
              <Image alt="" src={companyDetailData.logoUrl || defaultCompanyLogo} fill />
            </div>
            <div css={buttonBox}>
              <button
                type="button"
                css={bookmarkButton(companyDetailData.isBookmark)}
                onClick={companyBookmarkToggleHandler}
              >
                <BsFillBookmarkFill />
                기업 북마크 <span>{companyDetailData.bookmark.toLocaleString("Ko-KR")}</span>
              </button>

              <p css={viewCountContainer}>
                <FiEye />
                조회수
                <span css={viewCount}>{companyDetailData?.view.toLocaleString("Ko-KR")}</span>
              </p>
            </div>
          </div>
          <strong css={companyName}>{companyDetailData.name}</strong>
          <p css={industryText}>{companyDetailData.industry}</p>
        </div>
      </Layout>
    </section>
  );
};
