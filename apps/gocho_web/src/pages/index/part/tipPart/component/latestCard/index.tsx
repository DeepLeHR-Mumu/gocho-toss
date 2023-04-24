import { FunctionComponent } from "react";
import Image from "next/image";

import { cardWrapper, cardImageBox, cardInfo, cardTitle, cardDesc } from "./style";
import { LatestCardProps } from "./type";

export const LatestCard: FunctionComponent<LatestCardProps> = ({ tipData, currentTipObj }) => {
  const changeCurrentTipHandler = () => {
    currentTipObj.setCurrentTip(tipData);
  };

  const isCurrentTip = Boolean(currentTipObj.currentTip.id === tipData.id);
  return (
    <button css={cardWrapper(isCurrentTip)} type="button" onClick={changeCurrentTipHandler}>
      <div css={cardImageBox}>
        <Image src={tipData.thumbnailSvgSrc} alt={tipData.title} fill />
      </div>
      <div css={cardInfo}>
        <strong css={cardTitle}>{tipData.title}</strong>
        <p css={cardDesc}>{tipData.description}</p>
      </div>
    </button>
  );
};
