import { useState } from "react";
import { useRouter } from "next/router";

import { Chip } from "shared-ui/deeple-ds";

import { useUserInfo } from "@/apis/auth/useUserInfo";
import { useCompanyCommentArr } from "@/apis/company";
import { INTERNAL_URL } from "@/pages/constants";
import { LoginModal } from "@/components";

import { WriteReview } from "./component/WriteReview";
import { NoReview } from "./component/NoReview";
import { Review } from "./component/Review";
import { cssObj } from "./style";

export const ReviewPart = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [writeReview, setWriteReview] = useState(false);
  const router = useRouter();
  const { data: companyCommentData } = useCompanyCommentArr({ companyId: Number(router.query.companyId) });
  const { data: userData } = useUserInfo();
  const companyId = Number(router.query.companyId);

  if (!userData) {
    return (
      <div css={cssObj.background}>
        <LoginModal
          close={() => {
            router.push(`${INTERNAL_URL.COMPANY_DETAIL}/${companyId}?type=company`);
          }}
        />
      </div>
    );
  }

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
          <p css={cssObj.reviewNumber}>{companyCommentData.comment_arr.length}건</p>
          <div css={cssObj.reviewButtonWrapper}>
            <Chip size="large" color="outlineBlue" onClick={() => setWriteReview(!writeReview)}>
              {writeReview ? "닫기" : "+ 리뷰 남기기"}
            </Chip>
          </div>
        </div>
        {writeReview && <WriteReview />}
        {companyCommentData.comment_arr.length === 0 && <NoReview />}
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
      {loginModal && (
        <LoginModal
          close={() => {
            setLoginModal(false);
          }}
        />
      )}
    </section>
  );
};
