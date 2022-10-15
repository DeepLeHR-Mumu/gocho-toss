import Image from "next/image";
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

import { useUserInfo } from "shared-api/auth";
import { useCompanyDetail } from "shared-api/company";
import { useAddCompanyBookmarkArr, useDeleteCompanyBookmarkArr, useUserCompanyBookmarkArr } from "shared-api/bookmark";
import { companyDetailKeyObj } from "shared-constant/queryKeyFactory/company/companyDetailKeyObj";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { useModal } from "@recoil/hook/modal";

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
} from "./style";

export const InfoBox: FunctionComponent = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { companyId } = router.query;

  const { setCurrentModal } = useModal();
  const { data: userData } = useUserInfo();
  const { data: userCompanyBookmarkArr } = useUserCompanyBookmarkArr({ userId: userData?.id });
  const {
    data: companyDetailData,
    isLoading,
    isSuccess,
  } = useCompanyDetail({ companyId: Number(companyId) as number });

  const { mutate: addMutate } = useAddCompanyBookmarkArr({
    id: companyDetailData?.data.id as number,
    logo_url: companyDetailData?.data.logoUrl as string,
    name: companyDetailData?.data.name as string,
  });

  const { mutate: deleteMutate } = useDeleteCompanyBookmarkArr({
    id: companyDetailData?.data.id as number,
    logo_url: companyDetailData?.data.logoUrl as string,
    name: companyDetailData?.data.name as string,
  });

  const isBookmarked = Boolean(
    userCompanyBookmarkArr?.some((company) => {
      return company.id === companyDetailData?.data.id;
    })
  );

  const addCompanyBookmark = () => {
    if (!userData) {
      setCurrentModal("loginModal", { button: "close" });
    }
    return (
      userData?.id &&
      addMutate(
        { userId: userData?.id, elemId: companyDetailData?.data.id as number },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(
              companyDetailKeyObj.detail({ companyId: companyDetailData?.data.id as number })
            );
          },
        }
      )
    );
  };

  const deleteCompanyBookmark = () => {
    return (
      userData?.id &&
      deleteMutate(
        { userId: userData?.id, elemId: companyDetailData?.data.id as number },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(
              companyDetailKeyObj.detail({ companyId: companyDetailData?.data.id as number })
            );
          },
        }
      )
    );
  };

  if (!isSuccess || isLoading) {
    return (
      <section css={wrapper}>
        <SkeletonBox />
      </section>
    );
  }

  return (
    <section css={wrapper}>
      <div css={container}>
        <div css={logoBox}>
          <Image src={companyDetailData.data.logoUrl} layout="fill" objectFit="contain" />
        </div>
        <div css={buttonBox}>
          <button
            type="button"
            css={bookmarkButton(isBookmarked)}
            onClick={isBookmarked ? deleteCompanyBookmark : addCompanyBookmark}
          >
            <BsFillBookmarkFill />
            기업 북마크 <span css={countCSS}>{companyDetailData.data.bookmark.toLocaleString("Ko-KR")}</span>
          </button>

          <p css={viewCountContainer}>
            <FiEye />
            조회수
            <span css={viewCount}>{companyDetailData.data.view.toLocaleString("Ko-KR")}</span>
          </p>
        </div>
      </div>
      <strong css={companyName}>{companyDetailData.data.name}</strong>
      <p css={industryText}>{companyDetailData.data.industry}</p>
    </section>
  );
};
