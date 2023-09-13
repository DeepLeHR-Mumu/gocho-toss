import { useState } from "react";
import { useRouter } from "next/router";

import { Chip } from "shared-ui/deeple-ds";

import { useUserProfile } from "@/apis/auth";
import { useCompanyCommentArr } from "@/apis/company";

import { WriteReview } from "./component/WriteReview";
import { Review } from "./component/Review";
import { cssObj } from "./style";

export const ReviewPart = () => {
  const [writeReview, setWriteReview] = useState(false);
  const router = useRouter();
  const { data: companyCommentData } = useCompanyCommentArr({ companyId: Number(router.query.companyId) });
  const { data: userData } = useUserProfile();

  if (!companyCommentData) {
    return (
      <section css={cssObj.wrapper}>
        <div css={cssObj.box}>
          <div css={cssObj.titleWrapper}>
            <h3 css={cssObj.title}>최근 리뷰</h3>
            <span css={cssObj.reviewNumber}>로딩중입니다.</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section css={cssObj.wrapper}>
      <div css={cssObj.box}>
        <div css={cssObj.titleWrapper}>
          <h3 css={cssObj.title}>최근 리뷰</h3>
          <span css={cssObj.reviewNumber}>{companyCommentData.comment_arr.length}건</span>
          <div css={cssObj.reviewButtonWrapper}>
            <Chip
              size="large"
              color="outlineBlue"
              onClick={() => {
                setWriteReview(!writeReview);
              }}
            >
              {writeReview ? "닫기" : "+ 리뷰 남기기"}
            </Chip>
          </div>
        </div>
        {writeReview && <WriteReview />}
        {companyCommentData.comment_arr
          .map((comment) => (
            <Review
              key={comment.id}
              companyId={companyCommentData.company.id}
              comment={comment}
              isMyComment={comment.uploader.id === userData?.id}
            />
          ))
          .reverse()}
      </div>
    </section>
  );
};
