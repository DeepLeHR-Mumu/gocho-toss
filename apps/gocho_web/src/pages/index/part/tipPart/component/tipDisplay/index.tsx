import { FunctionComponent } from "react";
import Image from "next/image";

import { COMMUNITY_TIPS_LIST_URL } from "shared-constant";
import { LinkButton } from "shared-ui/common/atom/button";

import {
  tipDisplayWrapper,
  tipFadeContainer,
  currentTipContainer,
  tipImageBox,
  tagArrCSS,
  currentTipTitle,
  currentTipDesc,
} from "./style";
import { TipDisplayProps } from "./type";

export const TipDisplay: FunctionComponent<TipDisplayProps> = ({ currentTip }) => {
  return (
    <article css={tipDisplayWrapper}>
      <div css={tipFadeContainer}>
        <div css={tipImageBox}>
          <Image src={currentTip.thumbnailSvgSrc} alt={currentTip.title} draggable="false" loading="eager" fill />
        </div>
      </div>

      <div css={currentTipContainer}>
        <ul css={tagArrCSS}>
          {currentTip.tag.map((keyword) => {
            return <li key={`${currentTip.id}${keyword}`}>#{keyword}</li>;
          })}
        </ul>
        <strong css={currentTipTitle}>{currentTip.title}</strong>
        <p css={currentTipDesc}>{currentTip.description}</p>
        <LinkButton linkTo={COMMUNITY_TIPS_LIST_URL} variant="filled" text="취업꿀팁 더보기" />
      </div>
    </article>
  );
};
