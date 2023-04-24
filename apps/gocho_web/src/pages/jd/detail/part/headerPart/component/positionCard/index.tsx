import { FunctionComponent, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

import { getJobTitleCreator } from "../../../common/util";
import { PositionCardProps } from "./type";
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

export const PositionCard: FunctionComponent<PositionCardProps> = ({
  isDdayEnd,
  currentPositionId,
  currentPositionIndex,
  setCurrentPositionId,
  position,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  if (!position) {
    return (
      <div css={containerSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const isCurrentPosition = currentPositionIndex === currentPositionId;
  return (
    <article css={wrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        css={container(isCurrentPosition, isHover)}
        type="button"
        onClick={() => {
          setCurrentPositionId();
        }}
      >
        <strong css={titleCSS(isCurrentPosition, isHover, isDdayEnd)}>{getJobTitleCreator(position)}</strong>

        <div css={infoBox}>
          <p css={desc}>{position.possibleEdu.summary}</p>
          <p css={desc}>
            {position.place.type === "일반" &&
              position.place.addressArr.map((address, i) => {
                return `${i !== 0 ? ", " : ""}${address.split(" ")[0]}`;
              })}
            {position.place.type === "일반" &&
              position.place.factoryArr?.map((factory) => {
                return (
                  <span css={restCSS} key={`지역_${factory}`}>
                    {factory.name}
                  </span>
                );
              })}
            {position.place.type !== "일반" && <span css={restCSS}>{position.place.type}</span>}
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

          <p css={viewButton}>자세히보기</p>
        </div>
      </button>

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
