import { FunctionComponent } from "react";

import { SkeletonBox } from "shared-ui/common/atom/skeletonBox";

import { getJobTitleCreator } from "../../../common/util";
import { PositionCardProps } from "./type";
import { container, desc, infoBox, restCSS, title, containerSkeleton } from "./style";

export const PositionCard: FunctionComponent<PositionCardProps> = ({
  isDdayEnd,
  currentPositionId,
  setCurrentPositionId,
  position,
}) => {
  if (!position) {
    return (
      <div css={containerSkeleton}>
        <SkeletonBox />
      </div>
    );
  }

  const isCurrentPosition = position.id === currentPositionId;
  return (
    <button
      type="button"
      css={container(isCurrentPosition)}
      onClick={() => {
        setCurrentPositionId(position.id);
      }}
    >
      <strong css={title(isCurrentPosition, isDdayEnd)}>
        {getJobTitleCreator(position)
          .split("|")
          .map((line) => {
            return <span key={line}>{line}</span>;
          })}
      </strong>

      <div css={infoBox}>
        <p css={desc}>{position.possibleEdu.summary}</p>
        <p css={desc}>
          {position.place.type === "일반" &&
            position.place.addressArr &&
            position.place.addressArr.map((address, i) => {
              return `${i !== 0 ? ", " : ""}${address.split(" ")[0]}`;
            })}
          {position.place.type === "일반" &&
            !position.place.addressArr &&
            position.place.factoryArr?.map((factory) => {
              return (
                <span css={restCSS} key={`지역_${factory}`}>
                  {factory.factoryName}
                </span>
              );
            })}
          {position.place.type !== "일반" && <span css={restCSS}>기타 근무지</span>}
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
  );
};
