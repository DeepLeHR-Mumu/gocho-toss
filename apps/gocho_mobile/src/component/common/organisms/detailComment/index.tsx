import { FunctionComponent, useEffect } from "react";
import Image from "next/image";

import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { useUserProfile } from "shared-api/auth";
import { useCompanyCommentArr } from "shared-api/company";
import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
import { FiChevronLeft } from "react-icons/fi";
import { LoginCommentBox } from "./component/loginCommentBox";
import { UnLoginCommentBox } from "./component/unLoginCommentBox";

import { DetailCommentProps } from "./type";
import {
  sectionWrapper,
  headerWrapper,
  flexBox,
  closeCommentButton,
  wrapperSkeleton,
  companyName,
  imageBox,
  dimmed,
} from "./style";

export const DetailComment: FunctionComponent<DetailCommentProps> = ({ detailData, setOpenComment }) => {
  const { data: userData, isSuccess } = useUserProfile();
  const { data: companyCommentArrData } = useCompanyCommentArr({
    companyId: Number(detailData?.companyId),
  });

  useEffect(() => {
    // TODO: body css로 옮기기
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  if (!detailData) {
    return (
      <div css={wrapperSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  if (!companyCommentArrData || !isSuccess || companyCommentArrData.commentArr === null) {
    return (
      <>
        <section css={sectionWrapper}>
          <header css={headerWrapper}>
            <div css={flexBox}>
              <button
                css={closeCommentButton}
                type="button"
                onClick={() => {
                  setOpenComment(false);
                }}
              >
                <FiChevronLeft />
              </button>
              <div css={imageBox}>
                <Image src={detailData?.logoUrl || defaultCompanyLogo} alt={detailData?.name} fill />
              </div>
              <p css={companyName}>{detailData?.name}</p>
            </div>
          </header>
          <UnLoginCommentBox setOpenComment={setOpenComment} />
        </section>
        <div css={dimmed} />
      </>
    );
  }

  return (
    <>
      <section css={sectionWrapper}>
        <header css={headerWrapper}>
          <div css={flexBox}>
            <button
              css={closeCommentButton}
              type="button"
              onClick={() => {
                setOpenComment(false);
              }}
              aria-label="댓글창 닫기"
            >
              <FiChevronLeft />
            </button>
            <div css={imageBox}>
              <Image
                src={companyCommentArrData.company.logoUrl || defaultCompanyLogo}
                alt={companyCommentArrData.company.name}
                fill
              />
            </div>
            <p css={companyName}>{companyCommentArrData.company.name}</p>
          </div>
        </header>
        <LoginCommentBox
          userData={userData}
          companyId={companyCommentArrData.company.id}
          commentArr={companyCommentArrData.commentArr}
        />
      </section>
      <div css={dimmed} />
    </>
  );
};
