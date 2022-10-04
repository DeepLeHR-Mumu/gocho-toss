import { FunctionComponent } from "react";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

import { getJobTitleCreator } from "../../../common/util";
import { PositionCardProps, PositionCardSkeleton } from "./type";
import { container, desc, infoBox, restCSS, title, containerSkeleton } from "./style";

export const PositionCard: FunctionComponent<PositionCardProps | PositionCardSkeleton> = ({
  currentPositionId,
  setCurrentPositionId,
  position,
  isSkeleton,
}) => {
  if (isSkeleton || !position) {
    return (
      <div css={containerSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const isCurrentPosition = position.id === currentPositionId;
  return (
    <article>
      <button
        type="button"
        css={container(isCurrentPosition)}
        onClick={() => {
          setCurrentPositionId(position.id);
        }}
      >
        <strong css={title(isCurrentPosition)}>{getJobTitleCreator(position)}</strong>

        <div css={infoBox}>
          <p css={desc}>{position.possibleEdu.summary}</p>
          <p css={desc}>
            {position.placeArr.map((place) => {
              return (
                <span css={restCSS} key={`지역_${place}`}>
                  {place}
                </span>
              );
            })}
          </p>
          <p css={desc}>{position.requiredExp.type}</p>
          <p css={desc}>
            {position.rotationArr.map((rotation) => {
              return (
                <span css={restCSS} key={`교대형태_${rotation}`}>
                  {rotation}
                </span>
              );
            })}
          </p>
        </div>
      </button>
    </article>
  );
};
