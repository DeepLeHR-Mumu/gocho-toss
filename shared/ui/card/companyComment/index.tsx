import { FunctionComponent, useRef, useEffect } from "react";
import Image from "next/image";

import { useCompanyCommentArr } from "shared-api/company";
import { useUserInfo } from "shared-api/auth";
import { dummyArrCreator } from "shared-util";
import defaultCompanyLogo from "shared-image/global/common/default_company_logo.svg";

import { LinkButton, NormalButton } from "../../common/atom/button";
import { SkeletonBox } from "../../common/atom/skeletonBox";
import { UnLoginComment } from "./component/unLoginComment";
import { Comment } from "./component/comment";
import {
  companyCommentCardSkeleton,
  cardWrapper,
  header,
  companyInfoContainer,
  commentBodyContainer,
  companyLogoBox,
  companyName,
  commentCount,
  commentContainer,
  unLoginContainer,
  linkBox,
  unLoginBox,
  unLoginDesc,
} from "./style";
import { CommentCardProps, CommentCardSkeleton } from "./type";

export const CompanyCommentCard: FunctionComponent<CommentCardProps | CommentCardSkeleton> = ({
  companyData,
  setCurrentModal,
  isSkeleton,
  isMobile,
}) => {
  const commentContainerRef = useRef<HTMLDivElement | null>(null);
  const { isSuccess, data: userInfoData } = useUserInfo();

  const { data: companyCommentArrData } = useCompanyCommentArr({
    companyId: companyData?.id || 0,
  });

  useEffect(() => {
    const bottomHeight = commentContainerRef.current?.scrollHeight;
    commentContainerRef.current?.scrollTo(0, bottomHeight !== undefined ? bottomHeight : 0);
  }, [isSuccess]);

  if (isSkeleton || companyData === undefined) {
    return (
      <div css={companyCommentCardSkeleton(isMobile)}>
        <SkeletonBox />
      </div>
    );
  }

  if (!companyCommentArrData || !isSuccess || companyCommentArrData.commentArr === null) {
    return (
      <div css={cardWrapper(isMobile)} className="active">
        <header css={header}>
          <div css={companyInfoContainer}>
            {!isMobile && (
              <div css={companyLogoBox}>
                <Image fill src={companyData.logoUrl || defaultCompanyLogo} alt={`${companyData.name} 기업 로고`} />
              </div>
            )}

            <strong css={companyName}>{companyData.name}</strong>
          </div>
          <p css={commentCount}>총 댓글 {companyData.commentCount.toLocaleString("ko-KR")}개</p>
        </header>

        <section css={commentBodyContainer}>
          <div css={unLoginBox}>
            <p css={unLoginDesc}>댓글이 궁금하시다면</p>
            <NormalButton
              text="로그인/회원가입"
              variant="filled"
              wide={false}
              buttonClick={() => {
                setCurrentModal("loginModal", { button: "close" });
              }}
            />
          </div>

          <div css={unLoginContainer} ref={commentContainerRef}>
            {dummyArrCreator(6).map((_) => (
              <UnLoginComment key={_} />
            ))}
          </div>
        </section>

        <div css={linkBox}>
          <LinkButton text="기업 정보 보러가기" linkTo={`/company/${companyData.id}/detail`} wide variant="outlined" />
        </div>
      </div>
    );
  }

  return (
    <div css={cardWrapper(isMobile)} className="active">
      <header css={header}>
        <div css={companyInfoContainer}>
          {!isMobile && (
            <div css={companyLogoBox}>
              <Image
                fill
                src={companyData.logoUrl || defaultCompanyLogo}
                alt={`${companyCommentArrData.company.name} 기업 로고`}
                sizes="1"
              />
            </div>
          )}
          <strong css={companyName}>{companyCommentArrData.company.name}</strong>
        </div>
        <p css={commentCount}>총 댓글 {companyCommentArrData.commentArr.length.toLocaleString("ko-KR")}개</p>
      </header>

      <section css={commentBodyContainer}>
        <div css={commentContainer} ref={commentContainerRef}>
          {companyCommentArrData.commentArr.map((comment) => (
            <Comment nickname={userInfoData.nickname} commentData={comment} key={comment.id} />
          ))}
        </div>
      </section>

      <div css={linkBox}>
        <LinkButton text="기업 정보 보러가기" linkTo={`/company/${companyData.id}/detail`} wide variant="outlined" />
      </div>
    </div>
  );
};
