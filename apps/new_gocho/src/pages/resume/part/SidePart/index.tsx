import { cssObj } from "./style";

export const SidePart = () => (
  <section css={cssObj.wrapper}>
    <div css={cssObj.contentsIndexWrapper}>
      <ul css={cssObj.contentsIndexList}>
        <li>기본정보</li>
        <li>학력</li>
        <li>경력</li>
        <li>자격증</li>
        <li>어학</li>
        <li>대외활동</li>
      </ul>
    </div>
  </section>
);
