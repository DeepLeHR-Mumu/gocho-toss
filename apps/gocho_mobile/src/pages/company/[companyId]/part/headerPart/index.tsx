import Image from "next/image";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

import { useUserInfo } from "shared-api/auth";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";
import { useCompanyDetail, useCompanyCountInfo } from "shared-api/company";
import { useAddCompanyBookmarkArr, useDeleteCompanyBookmarkArr, useUserCompanyBookmarkArr } from "shared-api/bookmark";
import { companyCountInfoKeyObj } from "shared-constant/queryKeyFactory/company/companyCountInfoKeyObj";
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
  countCSS,
  infoBox,
} from "./style";

export const HeaderPart: FunctionComponent = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { setModal } = useModal();
  const { data: userData } = useUserInfo();
  const { data: companyCountInfoData } = useCompanyCountInfo({ id: Number(router.query.companyId) });
  const { data: userCompanyBookmarkArr } = useUserCompanyBookmarkArr({ userId: userData?.id });
  const { data: companyDetailData, isLoading } = useCompanyDetail({ companyId: Number(router.query.companyId) });

  const { mutate: addMutate } = useAddCompanyBookmarkArr({
    id: companyDetailData?.id as number,
    logo_url: companyDetailData?.logoUrl as string,
    name: companyDetailData?.name as string,
  });

  const { mutate: deleteMutate } = useDeleteCompanyBookmarkArr({
    id: companyDetailData?.id as number,
    logo_url: companyDetailData?.logoUrl as string,
    name: companyDetailData?.name as string,
  });

  const addCompanyBookmark = () => {
    if (!userData) {
      setModal("loginModal", { button: "close" });
    }
    return (
      userData?.id &&
      addMutate(
        { userId: userData?.id, id: companyDetailData?.id as number },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(companyCountInfoKeyObj.countInfo({ id: Number(companyDetailData?.id) }));
          },
        }
      )
    );
  };

  const deleteCompanyBookmark = () => {
    return (
      userData?.id &&
      deleteMutate(
        { userId: userData?.id, id: companyDetailData?.id as number },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(companyCountInfoKeyObj.countInfo({ id: Number(companyDetailData?.id) }));
          },
        }
      )
    );
  };

  if (!companyDetailData || isLoading) {
    return (
      <section css={wrapper}>
        <SkeletonBox />
      </section>
    );
  }

  const isBookmarked = Boolean(
    userCompanyBookmarkArr?.some((company) => {
      return company.id === companyDetailData?.id;
    })
  );

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
                css={bookmarkButton(isBookmarked)}
                onClick={isBookmarked ? deleteCompanyBookmark : addCompanyBookmark}
              >
                <BsFillBookmarkFill />
                기업 북마크 <span css={countCSS}>{companyCountInfoData?.bookmarkCount.toLocaleString("Ko-KR")}</span>
              </button>

              <p css={viewCountContainer}>
                <FiEye />
                조회수
                <span css={viewCount}>{companyCountInfoData?.viewCount.toLocaleString("Ko-KR")}</span>
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
