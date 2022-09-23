import { FunctionComponent, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

import { getJobTitleCreator } from "../../../common/util";
import { PositionCardProps, PositionCardSkeleton } from "./type";
import {
  container,
  desc,
  infoBox,
  viewButton,
  restCSS,
  titleCSS,
  wrapper,
  arrowClickBox,
  arrowMoveBox,
  containerSkeleton,
} from "./style";

export const PositionCard: FunctionComponent<PositionCardProps | PositionCardSkeleton> = ({
  currentPositionId,
  setCurrentPositionId,
  position,
  isSkeleton,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  if (isSkeleton || !position) {
    return (
      <div css={containerSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const isCurrentPosition = position.id === currentPositionId;
  return (
    <article css={wrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <section css={container(isCurrentPosition, isHover)}>
        <strong css={titleCSS(isCurrentPosition, isHover)}>{getJobTitleCreator(position)}</strong>

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

          <button
            type="button"
            css={viewButton}
            onClick={() => {
              setCurrentPositionId(position.id);
            }}
          >
            자세히보기
          </button>
        </div>
      </section>

      {isCurrentPosition && (
        <div css={arrowClickBox}>
          <FiArrowLeft />
        </div>
      )}
      {isHover && !isCurrentPosition && (
        <div css={arrowMoveBox}>
          <FiArrowLeft />
        </div>
      )}
    </article>
  );
};
