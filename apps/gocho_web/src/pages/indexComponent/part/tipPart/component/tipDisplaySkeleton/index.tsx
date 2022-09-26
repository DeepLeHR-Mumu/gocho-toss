import { FunctionComponent } from "react";

import {
  tipDisplayWrapper,
  tipFadeContainer,
  currentTipContainer,
  tipImageBox,
  tagArrCSS,
  currentTipTitle,
  currentTipDesc,
  detailButton,
} from "./style";

export const TipDisplaySkeleton: FunctionComponent = () => {
  return (
    <article css={tipDisplayWrapper}>
      <div css={tipFadeContainer}>
        <div css={tipImageBox} />
      </div>

      <div css={currentTipContainer}>
        <ul css={tagArrCSS}>
          <li>loading</li>
          <li>loading</li>
          <li>loading</li>
          <li>loading</li>
        </ul>
        <h3 css={currentTipTitle}>
          <span>loading</span>
          <span>loading</span>
        </h3>
        <p css={currentTipDesc}>loading</p>
        <div css={detailButton}>자세히 보기</div>
      </div>
    </article>
  );
};
