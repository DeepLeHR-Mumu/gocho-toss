import { cssObj } from "./style";

export const NoReview = () => (
  <div css={cssObj.wrapper}>
    <p css={cssObj.text}>아직 등록된 기업리뷰가 없습니다!</p>
    <p css={cssObj.text}>첫리뷰를 남겨보세요!</p>
  </div>
);
