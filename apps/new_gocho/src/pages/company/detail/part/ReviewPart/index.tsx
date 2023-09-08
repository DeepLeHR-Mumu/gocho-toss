import { Chip } from "shared-ui/deeple-ds";
// import { useRouter } from "next/router";

// import { useCompanyCommentArr } from "@/apis/company";

import { WriteReview } from "./component/WriteReview";
import { Review } from "./component/Review";
import { cssObj } from "./style";

export const ReviewPart = () => {
  //   const router = useRouter();
  //   const { data: companyCommentData } = useCompanyCommentArr({ companyId: Number(router.query.companyId) });

  return (
    <section css={cssObj.wrapper}>
      <div css={cssObj.box}>
        <div css={cssObj.titleWrapper}>
          <h3 css={cssObj.title}>최근 리뷰</h3>
          <span css={cssObj.reviewNumber}>n 건</span>
          <div css={cssObj.reviewButtonWrapper}>
            <Chip size="large" color="outlineBlue">
              + 리뷰 남기기
            </Chip>
          </div>
        </div>
        <WriteReview />
        <Review />
      </div>
    </section>
  );
};
