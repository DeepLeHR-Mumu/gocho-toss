import { FunctionComponent, useRef, useEffect } from "react";
import Image from "next/image";

import { LinkButton, NormalButton } from "shared-ui/common/atom/button";
import { CDN_URL } from "shared-constant/externalURL";
import { useCompanyCommentArr } from "shared-api/company";
import { useUserInfo } from "shared-api/auth";
import { dummyArrCreator } from "shared-util/dummyArrCreator";
import { COMPANY_DETAIL_URL } from "shared-constant/internalURL";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";
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
  }, [companyCommentArrData]);

  if (isSkeleton || companyData === undefined) {
    return (
      <div css={companyCommentCardSkeleton(isMobile)}>
        <SkeletonBox />
      </div>
    );
  }

  if (!companyCommentArrData || !isSuccess) {
    return (
      <div css={cardWrapper(isMobile)} className="active">
        <header css={header}>
          <div css={companyInfoContainer}>
            <div css={companyLogoBox}>
              <Image
                layout="fill"
                objectFit="contain"
                src={`${CDN_URL}/company_images/${companyData.id}/logo.png`}
                alt={`${companyData.name} 기업 로고`}
              />
            </div>
            <h3 css={companyName}>{companyData.name}</h3>
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
            {dummyArrCreator(6).map((_) => {
              return <UnLoginComment key={_} />;
            })}
          </div>
        </section>

        <div css={linkBox}>
          <LinkButton
            text="실시간 댓글 보러가기"
            linkTo={`${COMPANY_DETAIL_URL}/${companyData.id}`}
            wide
            variant="outlined"
          />
        </div>
      </div>
    );
  }

  return (
    <div css={cardWrapper(isMobile)} className="active">
      <header css={header}>
        <div css={companyInfoContainer}>
          <div css={companyLogoBox}>
            <Image
              layout="fill"
              objectFit="contain"
              src={`${CDN_URL}/company_images/${companyData.id}/logo.png`}
              alt={`${companyCommentArrData.company.name} 기업 로고`}
            />
          </div>
          <strong css={companyName}>{companyCommentArrData.company.name}</strong>
        </div>
        <p css={commentCount}>총 댓글 {companyCommentArrData.commentArr.length.toLocaleString("ko-KR")}개</p>
      </header>

      <section css={commentBodyContainer}>
        <div css={commentContainer} ref={commentContainerRef}>
          {companyCommentArrData.commentArr.map((comment) => {
            return <Comment nickname={userInfoData.nickname} commentData={comment} key={comment.id} />;
          })}
        </div>
      </section>

      <div css={linkBox}>
        <LinkButton
          text="실시간 댓글 보러가기"
          linkTo={`${COMPANY_DETAIL_URL}/${companyData.id}`}
          wide
          variant="outlined"
        />
      </div>
    </div>
  );
};
