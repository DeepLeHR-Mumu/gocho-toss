import { FunctionComponent, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { CDN_URL } from "shared-constant/externalURL";
import { useCompanyCommentArr } from "shared-api/company";

import { Comment } from "./component/comment";

import {
  cardWrapper,
  header,
  companyInfoContainer,
  commentBodyContainer,
  companyLogoBox,
  companyName,
  commentCount,
  commentContainer,
  showMoreCompanyCommentButton,
} from "./style";
import { CommentCardProps } from "./type";

export const CompanyCommentCard: FunctionComponent<CommentCardProps> = ({ companyId }) => {
  const commentContainerRef = useRef<HTMLDivElement | null>(null);

  // 최초 load가 완료 된 후 실행
  useEffect(() => {
    // commentContainerRef의 스크롤 높이를 bottomHeight변수에 적용합니다.
    const bottomHeight = commentContainerRef.current?.scrollHeight;
    // commentContainerRef의 현재 스크롤 값을 만약 bottomHeight이 undefined가 아니라면 bottomHeight으로
    // undefined라면 0으로 적용합니다.
    // useEffect이전 최초 로딩 완료시 commentContainerRef.current의 데이터를 찾지못하기에 undefined가 노출됩니다.
    commentContainerRef.current?.scrollTo(0, bottomHeight !== undefined ? bottomHeight : 0);
  }, []);

  const { data: companyCommentArrData, isError } = useCompanyCommentArr({
    companyId,
  });

  if (!companyCommentArrData || isError) {
    return <div css={cardWrapper}>에러가 발생</div>;
  }

  return (
    <div css={cardWrapper} className="active">
      <header css={header}>
        <div css={companyInfoContainer}>
          <div css={companyLogoBox}>
            <Image
              layout="fill"
              objectFit="contain"
              src={`${CDN_URL}/company_images/${companyId}/logo.png`}
              alt={`${companyCommentArrData.company.name} 기업 로고`}
            />
          </div>
          <strong css={companyName}>{companyCommentArrData.company.name}</strong>
        </div>
        <p css={commentCount}>총 댓글 {companyCommentArrData.commentArr.length}개</p>
      </header>
      <section css={commentBodyContainer}>
        <div css={commentContainer} ref={commentContainerRef}>
          {companyCommentArrData.commentArr.map((comment) => {
            return <Comment commentData={comment} key={comment.id} />;
          })}
        </div>
        <Link href="/company/id" passHref>
          <a className="CommentButton" css={showMoreCompanyCommentButton}>
            실시간 댓글 보러가기
          </a>
        </Link>
      </section>
    </div>
  );
};
